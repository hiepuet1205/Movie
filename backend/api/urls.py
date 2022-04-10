from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework.authtoken import views
from .views import home

urlpatterns =[
    path('', home, name='api.home'),
    path('category/', include('api.category.urls')),
    path('movie/', include('api.movie.urls')),
    path('order/', include('api.order.urls')),
    path('person/', include('api.person.urls')),
    path('user/', include('api.user.urls')),
    path('api-token-auth/', views.obtain_auth_token, name='api_token_auth')
]