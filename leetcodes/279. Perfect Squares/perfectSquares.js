/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
 //input: integer
 //output: integer
 //edge case: if n < 2, return n
 let psList = [];
 let p = 1;
 //perfect sqaure list
 while(p*p <= n) {
  psList.push(p*p);
  p++;
 }
 //don't store duplicate one
 let marked = {n: true};
  let paths = 0;
  let queue = [n];
  //[12] -[11, 8, 3] -> [...]
  while(queue.length) {
    let size = queue.length;
    paths += 1;
    while(size > 0) {
      let sum = queue.shift();
      for (let s in psList) {
        let next = sum - s;
        if (next < 0) {
          break;
        }
        if (next === 0) {
          return paths;
        }
        if (marked[next]){
          continue;
          //duplicate
        }
        marked[next] = true;
        queue.push(next);
      }
      size--;
    }
  }
  return n;
};