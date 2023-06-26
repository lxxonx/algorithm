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
	n     int
	start int
)

func is666(x int) bool {
	cnt := 0
	for x > 0 {
		if x%10 == 6 {
			cnt++
		} else {
			cnt = 0
		}

		if cnt == 3 {
			return true
		}

		x /= 10
	}
	return false
}

func main() {
	defer out.Flush()
	fmt.Fscanf(in, "%d", &n)

	start = 666

	for {
		if is666(start) {
			n--
			if n == 0 {
				fmt.Fprintln(out, start)
				break
			}
		}

		start++
	}

}
