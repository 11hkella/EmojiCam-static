# tunr_app/serializers.py
from rest_framework import serializers

from .models import Session, ImageSet


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ('latitude', 'longitude', 'timestamp')


class ImageSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageSet
        fields = ('happy', 'neutral', 'angry', 'disgust', 'fear', 'sad', 'surprise')