/**
 * Definition for a binary tree node.
 */
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

//recursive
// func isSymmetric(root *TreeNode) bool {
// 	if root == nil {
// 		return true
// 	}
// 	return isSym(root.Left, root.Right)
// }
// func isSym(a, b *TreeNode) bool {
// 	if a == nil && b == nil {
// 		return true
// 	}
// 	if a == nil || b == nil {
// 		return false
// 	}
// 	return (a.Val == b.Val) && isSym(a.Left, b.Right) && isSym(a.Right, b.Left)
// }

//iterative
func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	tempQ := []*TreeNode{}
	tempQ = append(append(tempQ, root.Left), root.Right)
	for len(tempQ) != 0 {
		n1 := tempQ[0]
		n2 := tempQ[1]
		tempQ = tempQ[2:]
		if n1 == nil && n2 == nil {
			continue
		}
		if n1 == nil || n2 == nil {
			return false
		}
		if n1.Val != n2.Val {
			return false
		}
		tempQ = append(tempQ, n1.Left)
		tempQ = append(tempQ, n2.Right)
		tempQ = append(tempQ, n1.Right)
		tempQ = append(tempQ, n2.Left)
	}
	return true
}
func main() {
	fmt.Println("Hello, world.")
}
