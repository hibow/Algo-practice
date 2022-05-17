class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        '''
        iterate over the string array
          compare each s in strs to see if they're anagrams
          a.sort -> need to create new str spaceO(n)and take O(nlogn) times
            easy to compare each string
          b. use char[26] to store the freq of each index(char) and convert it to string for comparision
            time o(n*m) spaceO(n)
          put it into map as key-> easy to search key for comparision, add the str into the values as an array
        return the values of map
        '''
        map = dict()
#        map.setdefault('', [])
        #map = collections.defaultdict(list) it can set default value as a list
        for s in strs:
          charFreq = [0] * 26
          for c in s:
            index = ord(c) - ord('a')
            charFreq[index] += 1
          key = tuple(charFreq) # tuple is immutable, and I can't use join to convert it to string since it is integer in array element
          if map.get(key):
            map[key].append(s)
          else:
            map[key] = [s]

        return map.values()
