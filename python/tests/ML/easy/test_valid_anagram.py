import unittest
from src.ML.easy.valid_anagram import Solution
class TestContainsDuplicate(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()
        
    def test_contains_duplicate(self):
        self.assertTrue(self.solution.isAnagram1("anagram", "nagaram")) 
        self.assertFalse(self.solution.isAnagram1("rat", "car"))
        self.assertTrue(self.solution.isAnagram1("bro", "rob"))

