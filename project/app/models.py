from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField('Title', max_length=50)
    image = models.ImageField(upload_to='images', verbose_name='image')
    content = models.TextField('Main')
    created_at = models.DateTimeField('Date', auto_now_add=True)

    def __str__(self):
        return self.title