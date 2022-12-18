from rest_framework import serializers

from src.apps.blog.models import BlogpostModel, CategoryModel, SubscriptionModel, ContactModel


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = '__all__'


class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogpostModel
        fields = ["id","title", "author", "category", "slug", "image", "content", "featured", "status", "created_at"]
        read_only_fields = ["slug"]


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionModel
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactModel
        fields = '__all__'