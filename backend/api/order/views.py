from ast import Not
from rest_framework import viewsets
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from .serializers import OrderSerializer
from .models import Order
from api.movie.models import Movie
from django.views.decorators.csrf import csrf_exempt 

# Create your views here.

def validate_user_session(id, token):
    UserModel = get_user_model() 
    try:
        user = UserModel.objects.get(pk=id)
        if user.session_token == token:
             return True
        return False
    except UserModel.DoesNotExist:
         return False

@csrf_exempt
def add(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({"error": True, "message": "Please re-login!"})

    UserModel = get_user_model()

    if request.method != 'POST':
        return JsonResponse({
            'error': 'send a post request with valid parameters'
        })

    try:
        user = UserModel.objects.get(pk=id)
    except UserModel.DoesNotExist:
        return JsonResponse({
            'error': 'User does not exist'
        })

    movie_id = request.POST['movie_id']
    quantity = request.POST['quantity']

    movie = Movie.objects.get(pk=movie_id)

    order = Order(user=user, movie=movie, quantity=quantity)
    order.save()
    return JsonResponse({
        'success': True,
        'error': False,
        'msg': 'Order placed successfully!',
    })

@csrf_exempt
def get(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({"error": True, "message": "Please re-login!"})

    UserModel = get_user_model()

    if request.method != 'GET':
        return JsonResponse({
            'error': 'send a GET request ok!'
        })

    try:
        user = UserModel.objects.get(pk=id)
    except UserModel.DoesNotExist:
        return JsonResponse({
            'error': 'User does not exist'
        })

    orders = Order.objects.filter(user=id).values()

    return JsonResponse({
        'success': True,
        'error': False,
        'msg': 'successfully!',
        'orders': list(orders)
    })

@csrf_exempt
def delete(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({"error": True, "message": "Please re-login!"})

    UserModel = get_user_model()

    if request.method != 'POST':
        return JsonResponse({
            'error': 'send a post request with valid parameters'
        })

    try:
        user = UserModel.objects.get(pk=id)
    except UserModel.DoesNotExist:
        return JsonResponse({
            'error': 'User does not exist'
        })

    order_id = request.POST['order_id']

    order = Order.objects.get(pk=order_id)
    order.delete()

    return JsonResponse({
        'success': True,
        'error': False,
        'msg': 'delete successfully!',
    })


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('updated_at')
    serializer_class = OrderSerializer


             
                        
