# tunr_app/serializers.py
from rest_framework import serializers

from .models import Session, ImageSet

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ('user_picture', 'emoji_image', 'percent_match', 'target_emo')

class ImageSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageSet
        fields = ('happy', 'neutral', 'angry', 'disgust', 'fear', 'sad', 'surprise')