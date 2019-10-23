/**
 * Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order,
 * return a sorted array of only the integers that appeared in all three arrays.

Example 1:
Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.

Constraints:
1 <= arr1.length, arr2.length, arr3.length <= 1000
1 <= arr1[i], arr2[i], arr3[i] <= 2000

Hints:
Count the frequency of all elements in the three arrays.
The elements that appeared in all the arrays would have a frequency of 3.
 *
 */
//#1 object to store frequency
//#2 3 pointers for each one

function findCommonElement(arr1, arr2, arr3){
  //input: 3 arrays
  //output: array
  //     1, 5, 5
  //     3, 4, 5, 5, 10
  //     5, 5, 10, 20
  //  O(n1 + n2 + n3)
  //iterate over 3 arrays
  //

};

/**
 * test case
 */

 var arr1 = [ 1, 5, 10, 15];  //
 var arr2 = [2, 3, 5, 7, 10];
 var arr3 = [5, 8, 10];

 var a = findCommonElement(arr1, arr2, arr3);
 console.log(a);

 /**
  * function findCommonElement(arr1, arr2, arr3){
    let i = 0;
    let j = 0;
    let k =0;

    while(i<arr1.length && j < arr2.length && k < arr3.length){
        if(arr1[i] == arr2[j] && arr2[j] == arr3[k]){
           console.log(arr1[i]);
            i++;
            j++;
            k++;
        }
        else if (arr1[i] < arr2[j]){
            i++;
        }
        else if (arr2[j] < arr3[k]){
            j++
        }else{
            k++;
        }
    }

}

findCommonElement([5, 10, 15], [1, 3, 5, 7, 10], [8, 10]);
  */