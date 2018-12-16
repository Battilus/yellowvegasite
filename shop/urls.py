from django.contrib import admin
from django.urls import path, include
from shop.views import main_page, about, constructor, delivery, payment

urlpatterns = [
    path('about/', about),
    path('catalog/', constructor),
    path('delivery/', delivery),
    path('payment/', payment),
    path('', main_page),
]
