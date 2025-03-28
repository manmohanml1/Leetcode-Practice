package ML.easy;

public class LC_242_ValidAnagram {
    //Brute force iterate each s and iterate each t and eliminate until nothing matches to return true
    //Optimized solution is the one with frequency count and array/hashset methods available
    //TC:O(n^2)-> Brute Force, O(n)-> Optimized 
    //SC:O(n^2)-> Brute Force, O(1)-> as fixed/constant items in array rather than continously expanding one
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length()) return false;
        int[] charCounts = new int[26];
        for(int i = 0; i<s.length(); i++){
            charCounts[s.charAt(i) -'a']++;
            charCounts[t.charAt(i) -'a']--;
        }
        for(int count:charCounts){
            if(count!=0) return false;
        }
        return true;
    }
}


