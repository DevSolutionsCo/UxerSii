from django.contrib import admin
from .models import userSiitoBack
from .models import UsuarioHogar, Administrador


# Register your models here.
admin.site.register(userSiitoBack)
admin.site.register(UsuarioHogar)
admin.site.register(Administrador)
