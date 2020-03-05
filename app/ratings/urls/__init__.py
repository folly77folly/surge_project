from django.urls import path, include

urlpatterns = [
    path('api', include('ratings.urls.api')),
    # root mount must always come last
    path('', include('ratings.urls.web')),
]
