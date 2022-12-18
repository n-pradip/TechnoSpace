from django.contrib import admin
from src.apps.blog.models import BlogpostModel, CategoryModel, SubscriptionModel, ContactModel

# admin.site.register(BlogpostModel)
@admin.register(BlogpostModel)
class BlogpostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'created_at', 'status']


@admin.register(CategoryModel)
class CatgoryAdmin(admin.ModelAdmin):
    list_display = ['category_name']


@admin.register(SubscriptionModel)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ['subscription_email', 'created_at']


@admin.register(ContactModel)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['title', 'message']

