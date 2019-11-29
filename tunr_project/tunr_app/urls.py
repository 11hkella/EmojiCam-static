from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('sessions', views.SessionView)
router.register('image_sets', views.ImageSetView)

urlpatterns = [
    path('', include(router.urls))
]