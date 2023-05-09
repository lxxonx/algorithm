package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var x, y int

	fmt.Fscanln(reader, &x, &y)

	result := x - y

	if result < 0 {
		result = -result
	}

	fmt.Fprintln(writer, result)
}
