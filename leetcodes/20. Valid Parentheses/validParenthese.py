class Solution:
    def isValid(self, s: str) -> bool:
        # input: string
        # output: boolean
        # edge case: if str.length %2 not 0, return false
        #  time: O(n), space O(n)
        #  iterate over the str, push opposite symbol of ( [ { if encounters any of them into temp array
        #     else compare if temp len is zero or the next char equals to temp.pop(),if not return false
        #  return if temp len is zero (it should finish the iteration of str)
        # if str.len() %2 == 0: --> string doesn't have len()...don't know why.
        #   return False
        temp = []
        for c in s:
            if c == '(':
                temp.append(')')
            elif c == '[':
                temp.append(']')
            elif c == '{':
                temp.append('}')
            elif (temp.len() == 0 or temp.pop() != c):
                return False
        return temp.len() == 0
