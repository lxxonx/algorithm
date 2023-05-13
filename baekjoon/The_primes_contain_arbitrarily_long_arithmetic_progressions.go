package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var n int

	fmt.Fscanln(reader, &n)

	res := make([]string, n)

	for i := 0; i < n; i++ {
		res[i] = fmt.Sprintf("%d", 2)
	}

	fmt.Fprintln(writer, strings.Join(res, " "))
}
