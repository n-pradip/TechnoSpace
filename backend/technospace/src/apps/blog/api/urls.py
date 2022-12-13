from rest_framework.routers import DefaultRouter

from src.apps.blog.api.views.views import BlogpostView

router = DefaultRouter()
router.register(r'allposts', BlogpostView, basename='all_blogposts')

urlpatterns = router.urls

