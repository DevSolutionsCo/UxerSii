from django.db import router
from django.urls import include, path
from rest_framework import routers
from uxerSiitoBack import views
from rest_framework.documentation import include_docs_urls
from .views import custom_login, obtenerdatosuserh, actualizardatosh, getranking, getpuntos, postdonacion, getalimentos,  postalimentos, valcod
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.static import serve
from django.conf import settings


router = routers.DefaultRouter()
router.register(r'uxerSiitoBack', views.uxersiiPruebas, 'uxersiiPruebas') 
router.register(r'signUp', views.signUp, 'signUp') 


urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('api/v1/login/', custom_login, name='login'),
    path('api/v1/actuali/', actualizardatosh, name='actuali'),
    path('api/v1/ranking/', getranking, name='ranking'),
    path('api/v1/donacion/', postdonacion, name='donacion'), # type: ignore
    path('api/v1/puntosm/', getpuntos, name='puntosm'),
    path('api/v1/alimentos/<int:id_punto>/', getalimentos, name='alimentos'),
    path('api/v1/valcod/<int:codigo>/', valcod, name='valcod'),
    path('api/v1/alimentosp/', postalimentos, name='alimentosp'),
    #path('alimentos/<str:nombre_archivo>', serve, {'document_root': settings.STATIC_ROOT + '/alimentos/'}),
    path('api/v1/datosUserH/', obtenerdatosuserh, name='datos'), # type: ignore
    #path("docs/", include_docs_urls(title="UxersiiPruebas API"))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

