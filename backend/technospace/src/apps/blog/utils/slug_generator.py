import string
import random


def slug_generator(text):
    random_string = ''.join(random.choice(string.ascii_letters + string.digits) for i in range(10))
    slug = text.replace(" ", "-") + "-" + random_string
    return slug



