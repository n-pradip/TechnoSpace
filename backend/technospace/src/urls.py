from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("src.apps.blog.api.urls"))
]

admin.site.site_header = "Technospace"
admin.site.site_title = "Technospace"
admin.site.index_title = "Welcome to Technospace Admin"