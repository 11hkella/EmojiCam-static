from rest_framework import viewsets

from .serializers import SessionSerializer, ImageSetSerializer, RateSerializer

from .models import Session, ImageSet, Rate


class SessionView(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer


class ImageSetView(viewsets.ModelViewSet):
    queryset = ImageSet.objects.all()
    serializer_class = ImageSetSerializer

class RateView(viewsets.ModelViewSet):
    queryset = Rate.objects.all()
    serializer_class = RateSerializer

