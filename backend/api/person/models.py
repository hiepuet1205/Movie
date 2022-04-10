from django.db import models

# Create your models here.
class Person(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    birthName = models.CharField(max_length=80)
    birthDay = models.CharField(max_length=150)
    description = models.TextField(max_length=500)
    born = models.CharField(max_length=150)
    height = models.IntegerField()
    job = models.CharField(max_length=20)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    videoUrl = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name