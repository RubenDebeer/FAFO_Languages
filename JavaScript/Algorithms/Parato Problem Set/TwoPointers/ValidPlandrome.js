const isValidPalindrome = (word) => {
    // Normalize the string: lowercase + remove non-alphanumerics
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = word.length - 1;

    // --> [x][x][][][][x][x] <--
    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};