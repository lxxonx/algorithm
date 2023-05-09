package main

import (
	"fmt"
)

func main() {
	str := ""

	fmt.Scan(&str)

	for i := 1; i < len(str); i++ {
		start := str[:i]
		end := str[i:]

		startMul := 1
		for v, _ := range start {
			startMul *= int(start[v] - '0')
		}
		endMul := 1
		for v, _ := range end {
			endMul *= int(end[v] - '0')
		}

		if startMul == endMul {
			fmt.Println("YES")
			return
		}
	}
	fmt.Println("NO")
	return
}
