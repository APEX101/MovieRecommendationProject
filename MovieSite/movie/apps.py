from django.apps import AppConfig
import os
import joblib
from django.conf import settings
import pandas as pd
from transformers import TFAutoModelForSequenceClassification , AutoTokenizer


class MovieConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "movie"
    MODEL_DATA = os.path.join(settings.MODELS, "moviesrecommender.joblib")
    SIM_FILE = os.path.join(settings.MODELS, "similarityscores.joblib")
    TOKENIZER_FILE = os.path.join(settings.MODELS, "tokenizer.joblib")
    MODEL_FILE = os.path.join(settings.MODELS, "model.joblib")
    data = joblib.load(MODEL_DATA)
    sim = joblib.load(SIM_FILE)
    Sentimenttokenizer =  joblib.load(TOKENIZER_FILE)
    SentimentModel = joblib.load(MODEL_FILE)
    
    
