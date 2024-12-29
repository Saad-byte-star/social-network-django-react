from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User , Post
import json


def index(request):
    allPosts = Post.objects.all().order_by("id").reverse()
    return render(request, "network/index.html")

def new_post(request):
    if request.method == "POST" :
        content = request.POST['content']
        user = User.objects.get(pk=request.user.id)
        post = Post(content=content,user=user)
        post.save()
        return HttpResponseRedirect(reverse(index))
    

def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "network/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "network/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

@csrf_exempt
def register(request):
    if request.method == "POST":
        try:
            # Parse JSON data from the request body
            data = json.loads(request.body)

            # Extract necessary fields from the data
            username = data.get("username")
            email = data.get("email")
            password = data.get("password")
            confirmation = data.get("confirmation")

            # Ensure password matches confirmation
            if password != confirmation:
                return JsonResponse({"message": "Passwords must match."}, status=400)

            # Attempt to create new user
            try:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                login(request, user)
                return JsonResponse({"message": "User created successfully"}, status=201)
            except IntegrityError:
                return JsonResponse({"message": "Username already taken."}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON in request body."}, status=400)
        except KeyError as e:
            return JsonResponse({"message": f"Missing field: {str(e)}"}, status=400)
    else:
        return JsonResponse({"message": "Invalid request method."}, status=405)