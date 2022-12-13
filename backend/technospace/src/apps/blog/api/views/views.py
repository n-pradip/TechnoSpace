from rest_framework import viewsets

from src.apps.blog.api.serializers.serializers import BlogpostSerializer
from src.apps.blog.models import BlogpostModel


class BlogpostView(viewsets.ModelViewSet):
    queryset = BlogpostModel.objects.all()
    serializer_class = BlogpostSerializer
    # filterset_fields = ['post_title', 'id']

