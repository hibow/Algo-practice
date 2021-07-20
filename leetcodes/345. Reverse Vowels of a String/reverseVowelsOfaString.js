/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    //input:string
    //output: string
    //edge case: string contains ASCII printable characters (uppercase and lowercase)
    /**
     * two pointer time O(n), space O(1)
     *  v_chars = ['a','i','u','e','o','A','I','U','E','O']
     * iterate over the string with s and e and s < e
     *  if s has vow, and e has vow, switch character, s ++, e --
     *  if s has no vow, s ++
     *  if e has no vow, e--
     * 
     * return original s 
     */
  if (s.length ===1) return s;
  //js string has to be split for swapping
  s = s.split('');
  let v_chars = new Set('aeiouAEIOU')
  let st = 0, end = s.length -1;
  while (st < end) {
    if (!v_chars.has(s[st])){
      st ++;
    }
    if (!v_chars.has(s[end])){
      end --;
    }
    if (v_chars.has(s[st]) && v_chars.has(s[end])) {
      [s[st], s[end]] = [s[end], s[st]];
      st ++;
      end --
    }
  }
  return s.join('');
};