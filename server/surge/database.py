import os


class Database:
    @classmethod
    def development(cls, BASE_DIR):
        return {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'tmp/db.sqlite3')
            }
        }

    @classmethod
    def production(cls, BASE_DIR):
        return {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'tmp/db.sqlite3')
            }
        }
