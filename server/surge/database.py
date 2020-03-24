import os

class Database:
    @classmethod
    def development(cls, BASE_DIR):
        return {
            'default': {
                'ENGINE': 'djongo',
                'NAME': 'surgedb',
                'HOST': 'db',
                'USERNAME': '',
                'PASSWORD': ''
            }
        }

    @classmethod
    def production(cls, BASE_DIR):
        return {
            'default': {
                'ENGINE': 'djongo',
                'NAME': 'surgedb'
            }
        }
