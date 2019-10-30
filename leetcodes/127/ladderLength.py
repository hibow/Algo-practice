class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: int
        """
        # Set
        # run time is much slower than JS
        dic = set(wordList)
        if beginWord == endWord:
            return True
        if endWord not in dic:
            return False
        alpha = string.ascii_lowercase
        tempQ = collections.deque([(beginWord, 1)])

        while tempQ:
            word, score = tempQ.popleft()
            if word == endWord:
                return score
            for i in range(len(word)):
                for ch in alpha:
                    new_word = word[:i] + ch + word[i+1:]
                    if new_word in dic:
                        tempQ.append((new_word, score + 1))

        return 0
