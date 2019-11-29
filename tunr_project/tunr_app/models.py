from django.db import models

# Create your models here.
class Session(models.Model):
    user_picture = models.CharField(max_length=255, default="n/a")
    emoji_image = models.CharField(max_length=255, default='n/a')
    percent_match = models.IntegerField(default=0)
    target_emo = models.CharField(max_length=100, default='n/a')

    def __str__(self):
        return self.user_picture

class ImageSet(models.Model):
    happy = models.CharField(max_length=255, default='/images/cool.png')
    neutral = models.CharField(max_length=255, default='/images/neutral.png')
    angry = models.CharField(max_length=255, default='/images/angry.png')
    disgust = models.CharField(max_length=255, default='/images/disgust.png')
    fear = models.CharField(max_length=255, default='/images/fear.png')
    sad = models.CharField(max_length=255, default='/images/crying.png')
    surprise = models.CharField(max_length=255, default='/images/surprised.png')