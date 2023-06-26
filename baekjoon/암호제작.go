package main

import (
	"bufio"
	"fmt"
	"math/big"
	"os"
)

var (
	in  = bufio.NewReader(os.Stdin)
	out = bufio.NewWriter(os.Stdout)
)

var (
	k big.Int
	l int
)

func isPrime(x int) bool {
	for i := 2; i*i <= x; i++ {
		if x%i == 0 {
			return false
		}
	}

	return true
}

func main() {
	defer out.Flush()

	fmt.Fscanln(in, &k, &l)

	pt := make([]bool, l)
	pt[0] = true
	pt[1] = true

	for i := 2; i < l; i++ {
		if !pt[i] {
			for j := i * i; j < l; j += i {
				pt[j] = true
			}
		}
	}

	for i := 2; i < l; i++ {
		if !pt[i] && new(big.Int).Mod(&k, big.NewInt(int64(i))).Cmp(big.NewInt(0)) == 0 {
			fmt.Fprintf(out, "BAD %d", i)
			return
		}
	}

	fmt.Fprintln(out, "GOOD")
}
