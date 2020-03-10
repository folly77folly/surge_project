from django.urls import path
from ..views.web.index_view import IndexView


urlpatterns = [
    path('', IndexView.as_view(), name='index')
]
