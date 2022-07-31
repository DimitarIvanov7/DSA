/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const len = s1.length;

  const map1 = new Map();

  for (let i = 0; i < len; i++) {
    map1.set(s1[i], map1.get(s1[i]) + 1 || 1);
  }

  let start = 0;

  let end = 0;

  while (end < s2.length) {
    if (map1.has(s2[end])) {
      start = end;

      while (start <= end) {
        if (map1.has(s2[end]) && map1.get(s2[end]) > 0) {
          console.log(map1);
          let subLen = end - start;
          console.log(subLen);
          if (subLen === len - 1) return true;

          map1.set(s2[end], map1.get(s2[end]) - 1);
          end++;
        } else {
          //   console.log(start);
          map1.set(s2[start], map1.get(s2[start]) + 1);
          start++;
        }
      }

      end++;
    } else {
      end++;
    }
  }

  return false;
};

const str1 = "adc";

const str2 = "dcda";

const str3 = "ab";

const str4 = "eidboaoo";

console.log(checkInclusion(str3, str4));
