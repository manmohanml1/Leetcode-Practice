package ML.easy;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class LC_242_ValidAnagramTest {
    @Test
    void testValidAnagram() {
        LC_242_ValidAnagram solution = new LC_242_ValidAnagram();
        assertTrue(solution.isAnagram("anagram", "nagaram"));
        assertFalse(solution.isAnagram("rob", "car"));
        assertTrue(solution.isAnagram("bat", "tab"));
    }
}
