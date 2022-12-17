from rest_framework.routers import DefaultRouter

from src.apps.blog.api.views.views import BlogpostView,CategoryView

router = DefaultRouter()
router.register(r'allposts', BlogpostView, basename='all_blogposts')
router.register(r'category', CategoryView, basename='categories')

urlpatterns = router.urls

