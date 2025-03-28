package ML.easy;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ContainsDuplicateTest {
    @Test
    void testContainsDuplicate() {/* */
        ContainsDuplicate solution = new ContainsDuplicate();
        int[] nums1 = {1,2,3,1};
        int[] nums2 = {1,2,3,4};
        int[] nums3 = {1,1,1,3,3,4,3,2,4,2};
        assertTrue(solution.containsDuplicate1(nums1));
        assertFalse(solution.containsDuplicate1(nums2));
        assertTrue(solution.containsDuplicate1(nums3));
    }
}
