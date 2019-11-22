# tunr_app/serializers.py
from rest_framework import serializers

from .models import Session


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ('input_image_path', 'result_image_path', 'percent_match', 'target_emo')

