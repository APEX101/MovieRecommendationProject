# MovieRecommendationProject




## 📝 Overview
 
 Created a Movie Recommendatin website. The website recommends movies based on content based filtering approach by the user search also webscrapes reviews for
 searched movies in real time from IMDB and uses BERT based Sentiment anlaysis model to categorize the reviews based on their sentiments.
    
## 🧰 Technical Aspects

- Used Django Rest Framework to create an API for the models by first dumping the model using joblib.
- implemented a recommender which recommend movies based on their scores resulted by their average rating , vote counts and their
  popularity. These scores are the blend of these three dataset columns
- Implemented a on search content based recommender that recommends similar movies to searched movies here using content based filtering recommendations.Created the tag
  column using movie's overviews,genre,cast,directors,keywords etc and found the cosine similarity of each movie with rest of 
  movies in dataset , the top 5 highest similarity scores are displayed.
- Also on searched page added a review section. The review section webscrapes searched  movie Reviews's in real time from the  
  IMDB website and categorizes the reviews in three categories blockbuster,justokay and worst this categorization is done using
  Bert based  sentiment analysis model,which categorizes the language sentences based on their sentiments between 1 to 5
  The top sentiment score (5) is given to blockbuster , least to worst and inbetween is alloted to justokay.
- Created a UI using React Js and material UI
- for statemanagement used REDUX.
  
  
## ⏳ DataSet

https://www.kaggle.com/tmdb/tmdb-movie-metadata
## 🖥️ Installation
### 🛠️ Requirement

* TensorFlow 2
* Keras
* Scikit-Learn
* Seaborn
* Matplotlib
* Pandas
* Numpy
* Transformers
* NLTK
* Beautiful Soup4
* Django Rest Framework
* ReactJs
* Redux,Redux-thunk


    
## ⚙️ Tech Stack
<p float="left">
<img src="https://miro.medium.com/max/1184/0*zKRz1UgqpOZ4bvuA" width="20%" >

<img src="https://repository-images.githubusercontent.com/155220641/a16c4880-a501-11ea-9e8f-646cf611702e" width="30%" >
<img src="https://img2.pngio.com/beautiful-soup-4-funthon-beautiful-soup-png-1500_645.png" width="20%" >  
<img src="https://joblib.readthedocs.io/en/latest/_static/joblib_logo.svg" width="20%" >

<img src="https://john.soban.ski/images/Fast_And_Easy_Regression_With_Tensorflow_Part_2/00_Tf_Keras_Logo.png" width="30%" >
<img src="https://i2.wp.com/softwareengineeringdaily.com/wp-content/uploads/2016/09/scikit-learn-logo.png?resize=566%2C202&ssl=1" width="40%" >
</p>
<img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/187550926/original/cde47296f9d02346b6561eee753741d7272bfce6/do-data-analysis-in-python-using-numpy-pandas-matplotlib-seaborn.jpg" width="70%" >
