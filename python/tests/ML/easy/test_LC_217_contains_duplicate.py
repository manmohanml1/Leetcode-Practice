import unittest
from src.ML.easy.LC_217_contains_duplicate import contains_duplicate2
class TestContainsDuplicate(unittest.TestCase):
        
    def test_contains_duplicate(self):
        self.assertTrue(contains_duplicate2([1,2,3,1])) 
        self.assertFalse(contains_duplicate2([1,2,3,4]))
        self.assertTrue(contains_duplicate2([1,1,1,3,3,4,3,2,4,2]))