package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
)

var (
	in  = bufio.NewReader(os.Stdin)
	out = bufio.NewWriter(os.Stdout)
)

func main() {

	var a, b string
	_, _ = fmt.Fscan(in, &a, &b)
	min := int(math.Inf(1))
	diff := len(b) - len(a)
	for i := 0; i <= diff; i++ {
		count := 0
		for j := 0; j < len(a); j++ {
			if a[j] != b[i+j] {
				count++
			}
		}
		if min > count {
			min = count
		}
	}

	fmt.Println(min)

}
