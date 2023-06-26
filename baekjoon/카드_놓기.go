package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

var n, k int

func hasElement[T int | string](a []T, el T) bool {
	for _, v := range a {
		if el == v {
			return true
		}
	}
	return false
}

func permute(nums []int, length int) []string {
	if length == 1 {
		result := make([]string, len(nums))
		for i, num := range nums {
			result[i] = strconv.Itoa(num)
		}
		return result
	}

	var permutations []string

	for i, num := range nums {
		remaining := make([]int, len(nums)-1)
		copy(remaining, nums[:i])
		copy(remaining[i:], nums[i+1:])

		subPermutations := permute(remaining, length-1)

		for _, subPerm := range subPermutations {
			if !hasElement(permutations, strconv.Itoa(num)+subPerm) {
				permutations = append(permutations, strconv.Itoa(num)+subPerm)
			}
		}
	}

	return permutations
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &n)

	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &k)

	arr := make([]int, 0)
	for i := 0; i < n; i++ {
		scanner.Scan()
		tmp, _ := strconv.Atoi(scanner.Text())
		arr = append(arr, tmp)
	}

	permuted := permute(arr, k)
	fmt.Println(len(permuted))
}
