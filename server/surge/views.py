from django.views import View
from django.urls import reverse
from django.http import HttpResponseRedirect


class RootView(View):
    def get(self, request):
        return HttpResponseRedirect(reverse('ratings:index'))
