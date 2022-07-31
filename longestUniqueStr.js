var lengthOfLongestSubstring = function (s) {
  const map1 = new Map();
  map1.set(s[0]);

  let longest = 0;

  let start = 0;

  let end = 1;

  while (end <= s.length) {
    let current = "";
    if (map1.has(s[end])) {
      map1.delete(s[start]);
      start++;
    } else {
      current = s.substring(start, end + 1);
      map1.set(s[end]);
      end++;
    }

    current.length > 0 && console.log(current);
    console.log(map1);
    longest = Math.max(current.length, longest);
  }

  return longest;
};

let str = "abcabcbb";

console.log(lengthOfLongestSubstring(str));
