from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from messaging_app.users.api.views import UserViewSet
from messaging_app.messaging.apis import urls as msg_urls
if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)


app_name = "api"
urlpatterns = router.urls + msg_urls.urlpatterns
