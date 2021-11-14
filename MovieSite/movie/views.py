from django.shortcuts import render

from .apps import MovieConfig
from rest_framework.views import APIView
from rest_framework.response import Response
import pandas as pd
from bs4 import BeautifulSoup
import requests
import re

# Create your views here.
class MoviesRecommend(APIView):
    def post(self, request):
        data = request.data
        name = data["name"]
        df = MovieConfig.data
        sim = MovieConfig.sim
        movie_index = df[df["title"] == name.lower()].index[0]
        cosine_distances = sorted(
            list(enumerate(sim[movie_index])), reverse=True, key=lambda x: x[1]
        )[1:6]
        re = []
        for i in cosine_distances:
            re.append(df.loc[i[0]].id)
        recommended_dict = {"recommended": re}
        return Response(recommended_dict, status=200)


class TopWeightedMovies(APIView):
    def get(self, request):
        df = MovieConfig.data
        temp  = df.set_index('id')
        top =   temp[:20].index
        recommended_dict = {"recommended": top}
        return Response(recommended_dict, status=200)
        
        
        
class CommentsSentiments(APIView):
    def post(self, request):
        tokenizer = MovieConfig.Sentimenttokenizer
        model = MovieConfig.SentimentModel
        df = MovieConfig.data
        data = request.data
        moviename = data["moviename"]
        # Finding Movie id from name
        movie_index = df[df["title"] == moviename.lower()].index[0]
        movieid = df.loc[movie_index].id
        headers = {
        'User-Agent':
	    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'
            }
        URL = 'https://www.themoviedb.org/movie/{}/reviews'.format(movieid)

        makerequest = requests.get(URL,headers = headers)
        # Make Soup
        soup  = BeautifulSoup(makerequest.text,  'html.parser')
        # Make regex 
        regex = re.compile('.*teaser*.')
        # Find all componenets where where you find regex in class of div eg <div class=teaser>
        result = soup.find_all('div',{'class' : regex})
        # Remove unnecessary tags
        resultsclean  = [i.text for i in result]
        t = [re.sub('\n',"", i) for i in resultsclean]
        t = [re.sub('read the rest',"", i) for i in t] 
        
        # Getting Sentiment Scores for all the comments
        res = []
        response = []
        neutral = []
        bad = []
        good = []
        

        for i in t:
         
            # Create batch with data
            pt_batch = tokenizer(i,truncation=True,max_length=512,return_tensors="pt")
            scores = model(**pt_batch)
            # res.append( int(scores.logits.argmax()+1))
            score =  int(scores.logits.argmax())+1
            if(  score == 2  or score == 3  or score == 4 ):
                neutral.append(i)
            
                
            if(score == 1  ):
                bad.append(i)
            

                
            if(score == 5 ):
                good.append(i)
                

        res =  {'neutral' : neutral , 'good' : good  , 'bad': bad}
        return Response(res, status=200)   

                