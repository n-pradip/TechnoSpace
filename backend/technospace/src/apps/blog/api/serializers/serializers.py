from rest_framework import serializers

from src.apps.blog.models import BlogpostModel, CategoryModel


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = '__all__'


class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogpostModel
        fields = ["title", "author", "category", "slug", "image", "content", "featured", "status", "created_at"]
        read_only_fields = ["slug"]
