from unittest import TestCase
from main import check_if_isogram

class TestifIsogram(TestCase):
    def test_true_isogram(self):
        result = check_if_isogram(word='isogram')
        self.assertTrue(result)

    def test_false_isogram(self):
        result = check_if_isogram(word='lolly')
        self.assertFalse(result)

    def test_edge_case(self):
        result = check_if_isogram(word='helLo')
        self.assertFalse(result)