from rest_framework import serializers

from src.apps.blog.models import BlogpostModel


class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogpostModel
        fields = '__all__'
