from django.db import models


class Category(models.Model):
    category_name = models.CharField(max_length=128)

    def __str__(self):
        return self.category_name


STATUS = (
        ("Published", "Published"),
        ("Draft", "Draft"),
    )


class BlogpostModel(models.Model):
    post_title = models.CharField(max_length=128)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=128)
    image = models.ImageField(upload_to="blog/images", null=True, blank=True)
    content = models.TextField(max_length=10000)
    featured = models.BooleanField(default=False)
    status = models.CharField(choices=STATUS, default='Draft', max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.post_title
    