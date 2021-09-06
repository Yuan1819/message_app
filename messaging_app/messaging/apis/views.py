from rest_framework.generics import ListAPIView, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from messaging_app.messaging.apis.serializers import MessageSerializer, ThreadSerializer
from messaging_app.messaging.models import Thread, Message
from messaging_app.users.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


class MessagesInbox(ListAPIView):
    serializer_class = ThreadSerializer

    def get_queryset(self):
        return Thread.inbox(self.request.user)


class MessagesSent(ListAPIView):
    serializer_class = ThreadSerializer

    def get_queryset(self):
        return Thread.sent(self.request.user)


class SendMessage(APIView):
    permission_classes = []

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(SendMessage, self).dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = request.data
        users = [get_object_or_404(User, username=data['to'])]
        msg = Message.new_message(request.user, users, data['subject'], data['content'])
        return Response('ok', status=200)
