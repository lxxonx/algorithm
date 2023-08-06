package main

import (
	"bufio"
	"fmt"
	"os"
)

var (
	in  = bufio.NewReader(os.Stdin)
	out = bufio.NewWriter(os.Stdout)
)

var (
	num int
)

func main() {
	fmt.Fscanf(in, "%d", &num)

	res := 0
	pow := 1

	for num > 0 {
		res += pow * (num % 7)
		num /= 7
		pow *= 3
	}

	fmt.Println(res)
}
