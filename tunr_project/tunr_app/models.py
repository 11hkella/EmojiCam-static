from django.db import models

# Create your models here.
class Session(models.Model):
    input_image_path: models.CharField(max_length=255, default='n/a')
    result_image_path: models.CharField(max_length=255, default='n/a')
    percent_match: models.IntegerField()
    target_emo: models.CharField(max_length=100, default='n/a')

    def __str__(self):
        return self.input_image_path