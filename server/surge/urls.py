from django.contrib import admin
from surge.views import root_view
from django.urls import path, include
from surge.views import page_not_found_view, server_error_view


handler500 = server_error_view
handler404 = page_not_found_view

urlpatterns = [
    path('', root_view, name='root'),
    path('admin/', admin.site.urls),
    path('ratings/', include(('ratings.urls', 'ratings'))),
]
