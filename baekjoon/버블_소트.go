package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

var count = 0
var nums = []int{}
var temp = []int{}

func mergeSort(left, mid, right int) {
	i := left
	j := mid + 1
	k := left

	for i <= mid && j <= right {
		if nums[i] <= nums[j] {
			temp[k] = nums[i]
			i++
		} else {
			temp[k] = nums[j]
			j++
			count += mid - i + 1
		}
		k++
	}

	for i <= mid {
		temp[k] = nums[i]
		i++
		k++
	}

	for j <= right {
		temp[k] = nums[j]
		j++
		k++
	}

	for i := left; i <= right; i++ {
		nums[i] = temp[i]
	}
}

func merge(left, right int) {
	if left < right {
		mid := (left + right) / 2
		merge(left, mid)
		merge(mid+1, right)
		mergeSort(left, mid, right)
	}
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var num int

	scanner.Scan()
	line := scanner.Text()
	fmt.Sscanf(line, "%d", &num)

	scanner.Scan()
	line = scanner.Text()
	splited := strings.Split(line, " ")
	for i := 0; i < len(splited); i++ {
		var n int
		fmt.Sscanf(splited[i], "%d", &n)
		nums = append(nums, n)
		temp = append(temp, 0)
	}

	merge(0, num-1)
	fmt.Println(count)
}
