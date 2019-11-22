from rest_framework import viewsets

from .serializers import SessionSerializer
from .models import Session


class SessionView(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

