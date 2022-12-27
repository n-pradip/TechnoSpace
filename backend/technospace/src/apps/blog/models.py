from django.db import models
from src.apps.blog.utils.slug_generator import slug_generator


class CategoryModel(models.Model):
    category_name = models.CharField(max_length=128)

    def __str__(self):
        return self.category_name


STATUS = (
    ("Published", "Published"),
    ("Draft", "Draft"),
)


class BlogpostModel(models.Model):
    title = models.CharField(max_length=255, null=False, default="", blank=False)
    author = models.CharField(max_length=128)
    category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=128, null=True)
    image = models.ImageField(upload_to="blog/images", null=True, blank=True)
    content = models.TextField(max_length=10000)
    featured = models.BooleanField(default=False)
    status = models.CharField(choices=STATUS, default='Draft', max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        while BlogpostModel.objects.filter(slug=self.slug).exists() or self.slug is None:
            self.slug = slug_generator(self.title)
        super(BlogpostModel, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class SubscriptionModel(models.Model):
    subscription_email = models.EmailField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)


class ContactModel(models.Model):
    title = models.CharField(max_length=255)
    message = models.TextField(max_length=10000)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
