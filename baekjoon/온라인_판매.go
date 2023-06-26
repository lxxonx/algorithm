package main

import (
	"bufio"
	"fmt"
	"os"
)

func sortAAAAAAA(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		for j := i; j < len(arr); j++ {
			if arr[i] < arr[j] {
				arr[i], arr[j] = arr[j], arr[i]
			}
		}
	}
	return arr
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	var n, m int

	fmt.Sscanf(scanner.Text(), "%d %d", &n, &m)

	arr := make([]int, m)
	for i := 0; i < m; i++ {
		scanner.Scan()
		var p int
		fmt.Sscanf(scanner.Text(), "%d", &p)
		arr[i] = p
	}

	arr = sortAAAAAAA(arr)

	price := arr[0]
	max := 0
	p := 0
	for price >= arr[len(arr)-1] {
		total := 0
		count := 0
		for i := 0; i < len(arr); i++ {
			if price <= arr[i] && count < n {
				total += price
				count++
			}
		}
		if total > max {
			max = total
			p = price
		}
		price--
	}

	fmt.Println(p, max)
}
