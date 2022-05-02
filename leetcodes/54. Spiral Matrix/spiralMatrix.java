class Solution {
  public List<Integer> spiralOrder(int[][] matrix) {
    //timeO(n*m), spaceO(n*m)-> ans
    List<Integer> list = new ArrayList<>();
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0) return list;

    int rowMin = 0, rowMax = matrix.length-1, colMin = 0, colMax = matrix[0].length-1;
    while(rowMin <= rowMax && colMin <= colMax) {
      //right
        for(int i=colMin; i<=colMax; i++) list.add(matrix[rowMin][i]);
        rowMin++;
      //down
        for(int i=rowMin; i<=rowMax; i++) list.add(matrix[i][colMax]);
        colMax--;

        if(rowMin > rowMax || colMin > colMax) break;
        //left
        for(int i=colMax; i>=colMin; i--) list.add(matrix[rowMax][i]);
        rowMax--;
      //up
        for(int i=rowMax; i>=rowMin; i--) list.add(matrix[i][colMin]);
        colMin++;
    }
    return list;
  }
}