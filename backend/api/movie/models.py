from django.db import models
from api.category.models import Category
from api.person.models import Person

# Create your models here.
class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    nameVietnamese = models.CharField(max_length=500)
    originalTitle = models.CharField(max_length=500)
    description = models.TextField()
    studio = models.CharField(max_length=50)
    totalTime = models.IntegerField()
    yearRelease = models.IntegerField()
    totalLike = models.IntegerField()
    totalDislike = models.IntegerField()
    price = models.FloatField(default=100)
    imageBig = models.ImageField(upload_to='images/', blank=True, null=True)
    imageSmall = models.ImageField(upload_to='images/', blank=True, null=True)
    videoUrl = models.CharField(max_length=500)
    category = models.ManyToManyField(Category, related_name="movie")
    director = models.ForeignKey(Person, on_delete=models.SET_NULL, null=True, blank=True, related_name = 'director_movie')
    stars = models.ManyToManyField(Person, related_name = 'actor_movie')
    writers = models.ManyToManyField(Person, related_name = 'writer_movie')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.originalTitle
