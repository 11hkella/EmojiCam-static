from django.db import models


# Create your models here.

class Session(models.Model):
    latitude = models.DecimalField(max_digits=19, decimal_places=10)
    longitude = models.DecimalField(max_digits=19, decimal_places=10)
    timestamp = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.timestamp


class ImageSet(models.Model):
    happy = models.CharField(max_length=255, default='/images/cool.png')
    neutral = models.CharField(max_length=255, default='/images/neutral.png')
    angry = models.CharField(max_length=255, default='/images/angry.png')
    disgust = models.CharField(max_length=255, default='/images/disgust.png')
    fear = models.CharField(max_length=255, default='/images/fear.png')
    sad = models.CharField(max_length=255, default='/images/crying.png')
    surprise = models.CharField(max_length=255, default='/images/surprised.png')

    def __str__(self):
        return self.happy

class Rate(models.Model):
    stars = models.PositiveSmallIntegerField()
    comment = models.TextField()

    def __str__(self):
        return self.stars

