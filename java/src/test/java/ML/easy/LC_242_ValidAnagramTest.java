package ML.easy;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ValidAnagramTest {
    @Test
    void testValidAnagram() {
        ValidAnagram solution = new ValidAnagram();
        assertTrue(solution.isAnagram("anagram", "nagaram"));
        assertFalse(solution.isAnagram("rob", "car"));
        assertTrue(solution.isAnagram("bat", "tab"));
    }
}
