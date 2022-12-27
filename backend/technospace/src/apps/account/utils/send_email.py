from django.core.mail import send_mail
from django.conf import settings


def mail_sender(contents):
    print(
        contents['subject'],
        contents['body'],
        settings.EMAIL_HOST_USER,
        [contents['to_email']],
    )
    send_mail(
        contents['subject'],
        contents['body'],
        settings.EMAIL_HOST_USER,
        [contents['to_email']],
        fail_silently=False,
    )