from django.urls import reverse
from django.shortcuts import render
from django.http import HttpResponseRedirect


def root_view(request):
    return HttpResponseRedirect(reverse('ratings:index'))

def server_error_view(request, exception=None):
    return render(request, 'surge/500.html', status=500)

def page_not_found_view(request, exception=None):
    return render(request, 'surge/404.html', status=404)
