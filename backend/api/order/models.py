from django. db import models
from api.user.models import CustomUser
from api.movie.models import Movie

# Create your models here.

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)

    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=True, blank=True)
    quantity = models.IntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    def __str__(self):
        return self.user.name + " " + str(self.created_at)