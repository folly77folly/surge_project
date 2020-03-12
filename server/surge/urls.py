from django.contrib import admin
from surge.views import RootView
from django.urls import path, include


urlpatterns = [
    path('', RootView.as_view(), name='root'),
    path('ratings/', include(('ratings.urls', 'ratings'))),
    path('admin/', admin.site.urls),
]
