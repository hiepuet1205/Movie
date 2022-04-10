from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'', views.OrderViewSet)

urlpatterns = [
    path('add/<str:id>/<str:token>', views.add, name='order.add'),
    path('get/<str:id>/<str:token>', views.get, name='order.get'),
    path('delete/<str:id>/<str:token>', views.delete, name='order.get'),
    path('', include(router.urls))
]
