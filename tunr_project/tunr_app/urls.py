from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('session', views.SessionView)
router.register('image_set', views.ImageSetView)
router.register('rate', views.RateView)


urlpatterns = [
    path('', include(router.urls))
]