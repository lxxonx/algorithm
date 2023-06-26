package main

import (
	"bufio"
	"fmt"
	"os"
)

func fibonacci(n int) int {
	x, y := 1, 1
	for i := 3; i <= n; i++ {
		y, x = (x+y)%1000000007, y
	}

	return y
}

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var num int
	fmt.Fscanln(reader, &num)

	fmt.Fprintln(writer, fibonacci(num), num-2)
}
