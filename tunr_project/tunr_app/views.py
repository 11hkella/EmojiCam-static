from rest_framework import viewsets

from .serializers import SessionSerializer, ImageSetSerializer
from .models import Session, ImageSet


class SessionView(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class ImageSetView(viewsets.ModelViewSet):
    queryset = ImageSet.objects.all()
    serializer_class = ImageSetSerializer