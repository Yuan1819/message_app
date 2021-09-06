from django.urls import path, include
from . import views

urlpatterns = [
    path('inbox/', views.MessagesInbox.as_view(), name="inbox"),
    path('message/send/', views.SendMessage.as_view(), name="send-message"),
    path('messages/inbox/', views.MessagesInbox.as_view(), name="messages-inbox"),
    path('messages/sent/', views.MessagesSent.as_view(), name="messages-sent"),
]
