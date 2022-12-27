from django.urls import path, include


urlpatterns = [
    path(r'account/', include('src.apps.account.api.urls')),
    path(r'blog/', include('src.apps.blog.api.urls')),
]
