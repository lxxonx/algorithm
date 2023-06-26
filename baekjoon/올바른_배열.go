package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var n int
	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &n)

	arr := make([]int, n)

	for i := 0; i < n; i++ {
		scanner.Scan()
		fmt.Sscanf(scanner.Text(), "%d", &arr[i])
	}
	sort.Ints(arr)

	cand := []int{}
	for i := 0; i < len(arr); i++ {
		end := int(math.Min(float64(i+5), float64(len(arr))))
		cnt := 4
		for j := i + 1; j < end; j++ {
			if arr[i]+4 >= arr[j] {
				cnt--
			}
		}

		cand = append(cand, cnt)
	}

	sort.Ints(cand)
	fmt.Println(cand[0])
}
