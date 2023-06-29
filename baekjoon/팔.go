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
	l string
	r string
)

func main() {
	defer out.Flush()

	fmt.Fscanf(in, "%s %s", &l, &r)

	if len(r) != len(l) {
		fmt.Fprintln(out, 0)
		return
	}

	cnt := 0
	for i := 0; i < len(r); i++ {
		if r[i] == l[i] && string(r[i]) == "8" {
			cnt++
		}
		if r[i] != l[i] {
			break
		}
	}

	fmt.Fprintln(out, cnt)
}
