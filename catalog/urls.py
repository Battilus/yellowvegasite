from django.contrib import admin
from django.urls import path, include, re_path
from catalog import views
from django.conf.urls.static import static
from untitled import settings

urlpatterns = [
                  path('catalog/<str:category>/<int:item_id>/', views.item, name='item'),
                  # re_path(r'^catalog/(?P<category>\S+)/(?P<item>\S+)/$', views.item, name='item'),
                  path('catalog/<str:category>/', views.catalog, name='items'),
                  path('catalog/', views.categories),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
