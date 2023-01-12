from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from src.apps.account.models import User
from django.contrib.auth.models import User


# class CustomUserAdmin(UserAdmin):
#     list_display = ['full_name', 'email']


admin.site.register(User, UserAdmin)
