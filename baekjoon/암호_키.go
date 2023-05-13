package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
)

func check(n int64) {
	sqr := math.Sqrt(float64(n))
	min := math.Min(sqr, 1000000)

	var i int64
	for i = 3; i <= int64(min); i += 2 {
		if n%i == 0 {
			fmt.Println("NO")
			return
		}
	}
	fmt.Println("YES")
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var num int64

	scanner.Scan()
	line := scanner.Text()
	fmt.Sscanf(line, "%d", &num)

	var i int64
	for i = 0; i < num; i++ {
		scanner.Scan()
		line = scanner.Text()
		var n int64
		fmt.Sscanf(line, "%d", &n)
		check(n)
	}
}
