package main

import (
	"bufio"
	"fmt"
	"os"
)

func fm(m map[string]int, s string) bool {
	for k := range m {
		if s == k {
			return true
		}
	}
	return false
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	var n int
	fmt.Sscanf(scanner.Text(), "%d", &n)

	matrix := map[string]int{}

	for i := 0; i < n; i++ {
		scanner.Scan()
		txt := scanner.Text()
		if fm(matrix, txt) {
			matrix[txt]++
		} else {
			matrix[txt] = 1
		}
	}

	cand := []string{}
	max := 0

	for k, v := range matrix {
		if v > max {
			max = v
			cand = []string{k}
		} else if v == max {
			cand = append(cand, k)
		}
	}

	if len(cand) == 1 {
		fmt.Println(cand[0])
		return
	}

	for i := 0; i < len(cand)-1; i++ {
		if cand[i] < cand[i+1] {
			cand[i], cand[i+1] = cand[i+1], cand[i]
		}
	}

	fmt.Println(cand[len(cand)-1])
}
