from django.contrib import admin
from django.urls import path, include
from catalog import views

urlpatterns = [
    path('<str:category>/', views.catalog),
    path('', views.catalog),

]
