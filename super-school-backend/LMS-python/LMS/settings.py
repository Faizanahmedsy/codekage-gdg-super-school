"""
Django settings for LMS project.

Generated by 'django-admin startproject' using Django 5.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""
import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('DJANGO_SECRET')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG')

# Application definition

INSTALLED_APPS = [
    "daphne",
    "channels",
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',
    'django.contrib.auth',
    'nest_db_app.apps.NestDbAppConfig',
    'exam_app.apps.ExamAppConfig',
    'django_filters',
    'digital_marking',
    'corsheaders',
    'personalized_learning',
    'analytics_app.apps.AnalyticsAppConfig',
    'dashboard',
    'report_app',
    'django_crontab',
    'lesson_plan'
]

# WebSocket configuration
ASGI_APPLICATION = "LMS.asgi.application"

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [("localhost", 6379)],
        },
    },
}



ALLOWED_HOSTS = ['*']

MIDDLEWARE = [
    'LMS.middleware.language_middleware.SetLanguageMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'LMS.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['template'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]



# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ.get('POSTGRES_DB'),
        "USER": os.environ.get('POSTGRES_USER'),
        "PASSWORD": os.environ.get('POSTGRES_PASSWORD'),
        "HOST": os.environ.get('POSTGRES_HOST'),
        "PORT": os.environ.get('POSTGRES_PORT'),
    }
}

CELERY_BROKER_URL = 'redis://redis:6379/0'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_RESULT_BACKEND = 'redis://redis:6379/0'
CELERY_TASK_SERIALIZER = 'json'

# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

MEDIA_URL = '/upload/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'upload')
# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'exam_app.pagination.GlobalPagination',  # Use the custom pagination class
    'PAGE_SIZE': 10  # Default fallback value for pagination if no `page_size` is provided in the request
}

CORS_ALLOW_METHODS = ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"]
CORS_ALLOW_HEADERS = ["*"]

# CORS_ALLOWED_ORIGINS = ["http://203.123.87.191:5009","http://110.238.75.177:5009","http://110.238.75.177","http://203.123.87.191"]
CORS_ALLOWED_ORIGINS = os.environ.get("CORS_ALLOWED_ORIGINS").split(" ")

SUPER_ROLE = ['super_admin', 'department_of_education']

LANGUAGES = [
    ('en', 'English'),
    ('af', 'Afrikaans'),
    # ('is', 'IsiZulu'),
    ('is', 'IsiZulu'),
]

LOCALE_PATHS = [
    BASE_DIR / 'exam_app/locale',
    BASE_DIR / 'personalized_learning/locale',
    BASE_DIR / 'analytics_app/locale',
    BASE_DIR / 'dashboard/locale',
    BASE_DIR / 'report_app/locale',
    BASE_DIR / 'lesson_plan/locale',
    BASE_DIR / 'digital_marking/locale',
    BASE_DIR / 'manual_marking/locale',

]

USE_I18N = True
# USE_L10N = True
# USE_TZ = True


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

# SMTP Configuration
EMAIL_HOST = os.environ.get('EMAIL_HOST')
EMAIL_PORT = os.environ.get('EMAIL_PORT')
EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS')
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL')


SUPER_SCHOOL_FRONTEND = os.environ.get('SUPER_SCHOOL_FRONTEND')
SUPER_SCHOOL_BACKEND = os.environ.get('SUPER_SCHOOL_BACKEND')


CRONJOBS = [
    ('0 * * * *', 'nest_db_app.management.commands.task.my_task', '>> /var/log/my_task.log 2>&1'),
]
