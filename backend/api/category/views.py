from rest_framework import viewsets
from .serializers import CategorySerializer
from .models import Category
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer 
    authentication_classes = []


