from rest_framework import viewsets
from .serializers import MovieSerializer
from .models import Movie

# Create your views here.

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all().order_by('id')
    serializer_class = MovieSerializer 

