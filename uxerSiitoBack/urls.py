from django.db import router
from django.urls import include, path
from rest_framework import routers
from uxerSiitoBack import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'uxerSiitoBack', views.uxersiiPruebas, 'uxersiiPruebas') 

urlpatterns = [
    path("api/v1/", include(router.urls)),
  #  path("docs/", include_docs_urls(title="UxersiiPruebas API"))
]