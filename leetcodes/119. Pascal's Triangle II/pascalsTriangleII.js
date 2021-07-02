/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    //input: integer
    //output: list array of that row
    //edge case: rowIndex >=0
    //space O(rowIndex) -> only one list as result
    //create a array list as result
    let result = [];
    //if rowIndex < 0 return result
    if (rowIndex < 0) return result;
    //iterate over the rows from 0
    for (let i = 0; i < rowIndex +1; i++) {
      //add 1 to res list
      result.push(1);
      //iterate over the rowlist from the elem before the last one (from row 2 or above) to the elem after the first one..
      // row 2 : index 1, row 3: index 1, index 2
      for (let j = i -1; j>0; j--){
        //change the elem at the j index to res[j-1] + res[j] -> change the elem of list in-place
        result[j] = result[j-1] + result[j];
      }
    }
    return result;
    //return result
};