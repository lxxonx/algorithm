package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
)

var (
	in  = bufio.NewReader(os.Stdin)
	out = bufio.NewWriter(os.Stdout)
)

type domino struct {
	x, h int
}

var (
	n       int
	dominos []domino
	left    []int
	right   []int
)

func findLeft(here int) int {
	if left[here] != -1 {
		return left[here]
	}

	t := sort.Search(len(dominos), func(i int) bool {
		return dominos[i].x >= dominos[here].x-dominos[here].h
	})

	ret := t
	for t < here {
		ret = min(ret, findLeft(t))
		t++
	}

	left[here] = ret
	return ret
}

func findRight(here int) int {
	if right[here] != -1 {
		return right[here]
	}

	t := sort.Search(len(dominos), func(i int) bool {
		return dominos[i].x > dominos[here].x+dominos[here].h
	})

	ret := t - 1
	for t > here+1 {
		ret = max(ret, findRight(t-1))
		t--
	}

	right[here] = ret
	return ret
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
func main() {
	defer out.Flush()

	fmt.Fscanln(in, &n)

	dominos = make([]domino, n)
	left = make([]int, n)
	right = make([]int, n)

	for i := 0; i < n; i++ {
		left[i] = -1
		right[i] = -1
	}

	for i := 0; i < n; i++ {
		var x, h int
		fmt.Fscanf(in, "%d %d\n", &x, &h)
		dominos[i] = domino{x, h}
	}

	for i := 0; i < n-1; i++ {
		if dominos[i].x > dominos[i+1].x {
			dominos[i], dominos[i+1] = dominos[i+1], dominos[i]
		}
	}

	for i := 0; i < n; i++ {
		findLeft(i)
		findRight(i)
	}

	dp := make([]int, n)

	for i := 0; i < n; i++ {
		dp[i] = 999999999
	}

	dp[0] = 1

	for i := 0; i < n; i++ {
		if left[i] > 0 {
			dp[i] = min(dp[i], 1+(dp[left[i]-1]))
		} else {
			dp[i] = min(dp[i], 1)
		}
		for j := 0; j < i; j++ {
			if right[j] >= i {
				if j > 0 {
					dp[i] = min(dp[i], 1+(dp[j-1]))
				} else {
					dp[i] = min(dp[i], 1)
				}
			}
		}
	}
}
