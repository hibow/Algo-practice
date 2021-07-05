/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    //input: string, string
    //output: boolean
    //edge case: they should have same length and at least length = 1, all valid ascii chars
    
    //order of occurrences? -> Just mapping from t char to s char 
    //test case: 'paper' 'title -> true; 'badc' 'abab' -> false
    //need two maps for StoT and TtoS 
    if (s.length === 0 || t.length === 0) return false;
    if (s.length !== t.length) return false;

    //create two hashmaps (if int[256] will consider all possible characters as space O(1)), O(n) here
    //time O(n)
    let sTotMap = {};
    let tTosMap = {};
    //iterate over string s and map s.char to tchart in hashmap
    for (let i = 0; i < s.length ; i++) {
      //if not exist, mapping characters
      if (!sTotMap[s[i]] && !tTosMap[t[i]]) {
        sTotMap[s[i]] = t[i];
        tTosMap[t[i]] = s[i];
      }

      //if char exists, check if it's the same characters, if not, return false
      if (sTotMap[s[i]] !== t[i] && tTosMap[t[i]] !== s[i] ){
        return false;
      }
    }
    return true;
    //return true
};