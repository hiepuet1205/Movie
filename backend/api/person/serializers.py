from rest_framework import serializers

from .models import Person

class PersonSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(max_length=None, allow_empty_file=False, allow_null=True, required=False)
    class Meta:
        model = Person
        fields = ('id', 'name', 'birthName', 'birthDay', 'description', 'born', 'height', 'job', 'image', 'videoUrl')