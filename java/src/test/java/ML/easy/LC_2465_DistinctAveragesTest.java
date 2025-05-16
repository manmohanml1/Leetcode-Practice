package ML.easy;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class LC_2465_DistinctAveragesTest {
    @Test
    void testDistinctAverages() {
        LC_2465_DistinctAverages solution = new LC_2465_DistinctAverages();
        assertEquals(2,solution.distinctAverages(new int[]{4,1,4,0,3,5}));
        assertEquals(1,solution.distinctAverages(new int[]{1,100}));
    }
}


