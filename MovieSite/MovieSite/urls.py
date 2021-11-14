from django.contrib import admin
from django.urls import path
from movie.views import MoviesRecommend
from movie.views import TopWeightedMovies
from movie.views import CommentsSentiments

urlpatterns = [
    path("admin/", admin.site.urls),
    path("searchbased/", MoviesRecommend.as_view(), name="Recommend"),
    path("top/", TopWeightedMovies.as_view(), name="TOP"),
    path("comments/", CommentsSentiments.as_view(), name="Sentiments"),]
