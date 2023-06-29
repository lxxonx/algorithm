package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

var (
	in  = bufio.NewReader(os.Stdin)
	out = bufio.NewWriter(os.Stdout)
)

var (
	n, k int

	bottles []int
)

func countOnes(binary string) (int, int) {
	cnt := 0
	lastIndex := 0
	for i, s := range binary {
		if string(s) == "1" {
			cnt++
			lastIndex = i
		}
	}

	return lastIndex, cnt
}

func main() {
	defer out.Flush()

	fmt.Fscan(in, &n, &k)

	p := strconv.FormatInt(int64(n), 2)
	idx, cnt := countOnes(p)
	plus := 0
	for cnt > k {
		plus += int(math.Pow(2, float64(len(p)-idx-1)))
		p = strconv.FormatInt(int64(n+plus), 2)
		idx, cnt = countOnes(p)
	}

	fmt.Println(plus)
}
