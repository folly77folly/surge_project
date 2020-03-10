from django.views import View
from django.http import HttpResponse 


class IndexView(View):
    def get(self, request):
        return HttpResponse('<h1>Testing<h1>', content_type='text/html')
