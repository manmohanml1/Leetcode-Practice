package ML.easy;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

public class LC_1_TwoSumTest {
    @Test
    void testTwoSum() {
        LC_1_TwoSum solution = new LC_1_TwoSum();
        assertArrayEquals(new int[]{0, 1}, solution.twoSum(new int[]{2, 7, 11, 15}, 9));
        assertArrayEquals(new int[]{1,2}, solution.twoSum(new int[]{3,2,4}, 6));
        assertArrayEquals(new int[]{0, 1}, solution.twoSum(new int[]{3,3}, 6));
    }
}
