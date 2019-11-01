/**
 * 
 * beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
   find only character difference
                         hit  
              x     x     x     x     x
      hot    dot   dog   lot   log   cog
          x                        x     x
  dot    dog                lot  log   cog
             x    x         x         x
  dog   lot log  cog      cog   log  cog    
        x        x                  
  cog  lot  log cog              cog  
  edge case : if end word is equal to begin word
   shortLen
    

 * 
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (beginWord === endWord) return 1;
  const dic = new Set(wordList);
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  // let visited = new Set(beginWord);
  if (!dic.has(endWord)) return 0;
  const tempQ = [{ word: beginWord, score: 1 }];
  while (tempQ.length) {
    const { word, score } = tempQ.shift();
    if (word === endWord) return score;
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < 26; j++) {
        const letter = alphabets[j];
        if (word[i] === letter) continue;
        const nextWord = word.slice(0, i) + letter + word.slice(i + 1);
        if (!dic.has(nextWord)) continue;
        // if (visited.has(nextWord)) continue;
        dic.delete(nextWord);
        // visited.add(nextWord);
        tempQ.push({
          score: score + 1,
          word: nextWord
        });
      }
    }
  }
  return 0;
};

var a = ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
console.log(a);
