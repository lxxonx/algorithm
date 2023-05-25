package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func sortArr(s []int) []int {
	for i := 0; i < len(s); i++ {
		for j := i; j < len(s); j++ {
			if s[i] > s[j] {
				s[i], s[j] = s[j], s[i]
			}
		}
	}
	return s
}

func findBetween(s []int, n int) []int {
	if n < s[0] {
		return []int{1, s[0] - 1}
	}
	for i := 0; i < len(s); i++ {
		if s[i] < n && s[i+1] > n {
			return []int{s[i] + 1, s[i+1] - 1}
		}
	}
	return []int{}
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	var length, n int
	fmt.Sscanf(scanner.Text(), "%d", &length)

	scanner.Scan()
	str := scanner.Text()
	sArr := strings.Split(str, " ")
	s := make([]int, length)
	for i, v := range sArr {
		p, _ := strconv.Atoi(v)
		s[i] = p
	}
	s = sortArr(s)

	scanner.Scan()
	str = scanner.Text()
	n, _ = strconv.Atoi(str)

	s = findBetween(s, n)

	if len(s) == 0 {
		fmt.Println(0)
		return
	}

	prevSum := n - s[0]
	nextSum := s[1] - n

	fmt.Println(prevSum*nextSum + prevSum + nextSum)
}
