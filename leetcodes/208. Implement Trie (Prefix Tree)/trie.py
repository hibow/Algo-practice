class Trie(object):

    def __init__(self):
        self.trie = {}

    def insert(self, word):
        trie = self.trie
        for c in word:
            trie = trie.setdefault(c, {})
        trie['word'] = word

    def search(self, word):
        trie = self.trie
        for c in word:
            if c not in trie:
                return False
            trie = trie[c]
        if trie.get('word'):
            return True
        return False

    def startsWith(self, prefix):
        trie = self.trie
        for c in prefix:
            if c not in trie:
                return False
            trie = trie[c]
        return True
