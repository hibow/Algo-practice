function lengthOfLongestSubstring(s: string): number {
  const dataMap: Map<string, number> =  new Map();
  let maxLen: number = 0;
  let end: number = 1;
  let start : number = 0;
  for (end = 0; end < s.length; end++) {
    if (dataMap.has(s.charAt(end))) {
      start = Math.max(start, dataMap.get(s.charAt(end)) + 1)
      // start -> previous repeat index + 1

    }
    dataMap.set(s.charAt(end), end)
    maxLen = Math.max(maxLen, end - start + 1);
    //ex: " " -> len = 1.. -> always calculate the maxLen
  }
  return maxLen
};
//time: O(n), space: O(n)