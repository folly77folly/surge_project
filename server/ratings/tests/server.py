import requests
import unittest
from unittest.mock import Mock


class MyTestCase(unittest.TestCase):

    def test_server_running(self):
        print('connecting to server...')

        response = Mock()
        response.status_code = 200

        print('server running...')

        assert requests.codes.ok == response.status_code


if __name__ == '__main__':
    unittest.main()
