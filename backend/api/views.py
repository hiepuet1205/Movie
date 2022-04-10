from django.http import JsonResponse

# Create your views here.

def home(request):
    return JsonResponse({'test' : 'success'})