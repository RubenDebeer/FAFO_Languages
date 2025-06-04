// Anagram  = a string that contains the exact same characters as another string, but the order of the characters can be different.

// Identifying Anagrams 
// Building Anagram List

// stop -> ['s','t','o','p']
// - o p s t 
// - o p s t 
// pots -> ['p','o','s','t']

// Length word 1 !== Length of word 2 

const isAnagram = (s, t) => {

    if (s.length !== t.length) return false

    const s_Sort = s.split("").sort().join("");
    const t_Sort = t.split("").sort().join("");

    return s_Sort == t_Sort;
}

const isAnagram2 = (s, t) => {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // This will iterate over the first sting and count the Number of time the character appears in the string 
    for (char of t) {
        if (!charCount[char]) return false;
        charCount[char]--
    }

    return true;
}
