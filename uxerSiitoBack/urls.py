from django.db import router
from django.urls import include, path
from rest_framework import routers
from uxerSiitoBack import views
from rest_framework.documentation import include_docs_urls
from .views import custom_login


router = routers.DefaultRouter()
router.register(r'uxerSiitoBack', views.uxersiiPruebas, 'uxersiiPruebas') 
router.register(r'signUp', views.signUp, 'signUp') 


urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('api/v1/login/', custom_login, name='login'),
    #path("docs/", include_docs_urls(title="UxersiiPruebas API"))
]