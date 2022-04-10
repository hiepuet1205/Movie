from rest_framework import serializers

from .models import Movie

class MovieSerializer(serializers.HyperlinkedModelSerializer):
    imageBig = serializers.ImageField(max_length=None, allow_empty_file=False, allow_null=True, required=False)
    imageSmall = serializers.ImageField(max_length=None, allow_empty_file=False, allow_null=True, required=False)
    class Meta:
        model = Movie
        fields = ('id', 'nameVietnamese', 'originalTitle', 'description', 'studio', 'totalTime', 'yearRelease', 'totalLike', 'totalDislike',
                    'price', 'imageBig', 'imageSmall', 'videoUrl', 'category', 'director', 'stars', 'writers')