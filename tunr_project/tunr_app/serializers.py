# tunr_app/serializers.py
from rest_framework import serializers

from .models import Session


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ('user-picture', 'emoji-image', 'percent-match', 'target-emo')

