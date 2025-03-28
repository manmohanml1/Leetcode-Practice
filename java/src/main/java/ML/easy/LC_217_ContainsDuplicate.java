package ML.easy;

import java.util.HashSet;

class LC_217_ContainsDuplicate {
    public boolean containsDuplicate1(int[] nums) {
        HashSet<Integer> seenNumbers = new HashSet<>();
        for(int num:nums){
            if(seenNumbers.contains(num)) return true;
            seenNumbers.add(num);
        }
        return false;
    }
}
