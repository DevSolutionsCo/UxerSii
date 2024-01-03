from email.policy import default
from tokenize import blank_re
from turtle import title
from django.db import models

# Create your models here.

class userSiitoBack(models.Model):
    titulo = models.CharField(max_length = 200)
    descripcion = models.TextField(blank = True)
    done = models.BooleanField(default = False)

    def __str__(self) -> str:
        return self.titulo