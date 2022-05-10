from telnetlib import TM


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        '''
        time O(m+n) space O(m+n)
        create a map for t (char, counts)
        use two pointers track each character and push (target char from t, index) into a list for s
        if all char counts meets tMap, get the min len of substring
        move left pointer and right pointer for same matched char counts and get the most min len of substring
        return the min len
        '''
        if not t or not s:
            return ''
        tMap = {}
        for i in range(0, len(t)):
            tch = t[i]
            
            if tch in tMap :
                tMap[tch] = tMap[tch] + 1
            else:
                tMap[tch] = 1
        sList = []
        for j, char in enumerate(s):
            if char in tMap:
                sList.append((j, char))
        l,r = 0,0
        #matched count = len(tMap)
        required = len(tMap)
        matched = 0
        counts = {}
        res = float("inf"), 0, 0
        
        while r < len(sList): 
            #count sch in sList
            sch = sList[r][1]
            counts[sch] = counts.get(sch, 0) + 1 #if sch found, count+1; if not found, count = 0
            #if counts matched tMap for each sch
            if counts[sch] == tMap[sch]:
                matched +=1
            #matched + 1
            while l<=r and matched == required:
            #when matched is required and l <= r
                lch = sList[l][1]
                end = sList[r][0]
                start = sList[l][0]
            #compare with res to get min len (end - start + 1) and store start and end position
                if end - start + 1 < res[0]:
                    res = [end-start + 1, start, end]
            #remove sch from counts count -1
                counts[lch] -= 1
                if counts[lch] < tMap[lch]:
            #if sch counts < tmap[sch], matched -1
                    matched -=1
                l +=1
            r += 1
        
        return '' if res[0] == float('inf') else s[res[1]:res[2]+1]
 