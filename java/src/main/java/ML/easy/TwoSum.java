package ML.easy;

import BoilerPlate.BaseSolution;
import java.util.HashMap;
import java.util.Map;

/**
 * Example solution extending the BoilerPlate template.
 */
public class TwoSum extends BaseSolution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }

    @Override
    public void solve() {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println("Result: " + result[0] + ", " + result[1]);
    }

    public static void main(String[] args) {
        TwoSum solution = new TwoSum();
        solution.printSolutionName();
        solution.solve();
    }
}
