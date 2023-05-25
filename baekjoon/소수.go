package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	var a, b, n int

	fmt.Fscanf(reader, "%d %d %d", &a, &b, &n)

	a = a % b
	for i := 0; i < n-1; i++ {
		if a < b {
			a *= 10
		}
		a = a % b
	}

	sol := a * 10 / b
	fmt.Println(sol)
}
