class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s)!= len(t):
            return False
        char_count = [0] * 26
        for i in range(0,len(s)):
            char_count[ord(s[i])-ord('a')]+=1
            char_count[ord(t[i])-ord('a')]-=1
        for count in char_count:
            if count!= 0:
                return False
        return True
    def isAnagram1(self, s: str, t: str) -> bool:
        if len(s)!= len(t):
            return False
        char_count = [0] * 26
        for i in range(0,len(s)):
            char_count[ord(s[i])-ord('a')]+=1
            char_count[ord(t[i])-ord('a')]-=1
        return all(count== 0 for count in char_count)