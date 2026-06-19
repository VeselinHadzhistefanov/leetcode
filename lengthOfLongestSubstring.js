var testData = "abcabcbbacac"
testData = "abcdefgabc"
testData = "aabababa"
testData = "aaaaaaa"

var lengthOfLongestSubstring = function (s) {
  var result = 0;
  var nextRepeatingAt = []

  for (i = 0; i < s.length; i++) {
    nextRepeatingAt[i] = s.length;
    for (j = i + 1; j < s.length; j++) {
      if (j < nextRepeatingAt[i] && s[i] == s[j]) {
        nextRepeatingAt[i] = j
      }
    }
  }

  for (i = 0; i < s.length; i++) {
    var isRepeating = false
    for (j = i + 1; j < nextRepeatingAt[i]; j++) {
      if (nextRepeatingAt[j] < nextRepeatingAt[i]) {
        isRepeating = true
      }
    }
    if (!isRepeating && nextRepeatingAt[i] - i > result) {
      result = nextRepeatingAt[i] - i
    }
  }

  return result;
}

var result = lengthOfLongestSubstring(testData)
console.log(result)
