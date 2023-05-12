package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var i int
	scanner.Scan()
	line := scanner.Text()
	fmt.Sscanf(line, "%d", &i)
	var s string
	scanner.Scan()
	s = scanner.Text()
	logics := strings.Split(s, " ")
	m := make([]int, 55)
	tf := []int{}
	for _, logic := range logics {
		var num int
		fmt.Sscanf(logic, "%d", &num)
		m[num]++
	}
	for k, v := range m {
		if k == v {
			tf = append(tf, k)
		}
	}
	if len(tf) == 0 {
		fmt.Println(-1)
	} else {
		max := 0
		for _, v := range tf {
			if max < v {
				max = v
			}
		}
		fmt.Println(max)
	}
}
