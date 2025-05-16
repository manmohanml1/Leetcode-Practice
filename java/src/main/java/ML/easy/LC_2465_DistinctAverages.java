package ML.easy;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
//Sort and Two-Pointer method: TC:O(nlogn), SC:O(n) 
class LC_2465_DistinctAverages {
    public int distinctAverages(int[] nums) {
        if(nums.length <=1) return 0;
        Arrays.sort(nums);
        Set<Double> uniqueAvg = new HashSet<>();
        int left = 0, right = nums.length - 1;
        while(left<right){
            double avg = (nums[left] + nums[right])/ 2.0;
            uniqueAvg.add(avg);
            left++;
            right--;
        }
        return uniqueAvg.size();
    }
}


