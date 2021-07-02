class Solution {
    public List<List<Integer>> generate(int numRows) {
        //input: int rows of array
        //output: result array with all row values in their list array
        //edge case: at least rows >= 1, if row =1 return [1]
        //rows also represents the size of the list or the len of the list
        //time: O(rows^2), space O(rows^2)
        //create a result array
        List<List<Integer>> result = new ArrayList<>();
        //iterate over the rows
        for (int i = 0; i < numRows ; i++) {
          //create a list array
          List<Integer> rowList = new ArrayList<>();
          //iterate over the lenth of the list
          for (int j =0; j < i + 1; j++) {
            //if first elem or last elem of the list, push [1]
            if (j == 0 || j == i) {
              rowList.add(1);
            //else,
            } else {
              //add current elem with the prev elem from last list and push into the current list array
              rowList.add(result.get(i-1).get(j) + result.get(i-1).get(j-1));
            }
          }
          //push list into result
          result.add(rowList);
        }
        //return result array
        return result;
    }
}