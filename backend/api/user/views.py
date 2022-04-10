from lib2to3.pgen2 import token
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .models import CustomUser
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout
import random
import re

# Create your views here.                            

def generate_session_token(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97, 123)] + [str(i) for i in range(10)]) for _ in range(length))

@csrf_exempt
def signin(request):
    if request.method != 'POST':
        return JsonResponse({
            'error': 'send a post request with valid parameters'
        })

    username = request.POST['email']
    password = request.POST['password']

    UserModel = get_user_model()

    if not re.match("[a-zA-Z0-9-]{1,}@([a-zA-Z\.])?[a-zA-Z]{1,}\.[a-zA-Z]{1,4}", username):
        return JsonResponse({
            'error': 'Enter a valid email address'
        })

    if len(password) < 8:
        return JsonResponse({
            'error': 'Password must be at least 8 characters'
        })

    try:
        user = UserModel.objects.get(email=username)

        if user.check_password(password):
            usr_dict = UserModel.objects.filter(email=username).values().first()
            usr_dict.pop('password')

            if user.session_token != '0':
                user.session_token = '0'
                user.save()
                return JsonResponse({
                    'error': 'Previous session exists'
                })

            token = generate_session_token()
            user.session_token = token
            user.save()
            login(request, user)

            return JsonResponse({
                'token': token,
                'user': usr_dict
            })
        else:
            return JsonResponse({
                'error': 'Invalid Password'
            })

    except UserModel.DoesNotExist:
        return JsonResponse({
            'error': 'Invalid email'
        })

def signout(request, id):
    logout(request)

    UserModel = get_user_model()

    try:
         user = UserModel.objects.get(pk=id)
         user.session_token = "0"
         user.save()
    except UserModel.DoesNotExist:
         return JsonResponse({'error': 'Invalid user ID'})
    return JsonResponse({'success': 'Logout success'})

class UserViewSet(viewsets.ModelViewSet):
    # permission_classes_by_action = {'create': [AllowAny]}

    queryset = CustomUser.objects.all().order_by('id')
    serializer_class = UserSerializer
    permission_classes_by_action = {'create': [AllowAny]}

    def create(self, request, *args, **kwargs):
        return super(UserViewSet, self).create(request, *args, **kwargs)

    def get_permissions(self):
        try:
            # return permission_classes depending on `action` 
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError: 
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes]