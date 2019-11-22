from django.db import models

# Create your models here.
class Session(models.Model):
    user_picture = models.CharField(max_length=255, default="n/a")
    emoji_image = models.CharField(max_length=255, default='n/a')
    percent_match = models.IntegerField()
    target_emo = models.CharField(max_length=100, default='n/a')

    def __str__(self):
        return self.user_picture