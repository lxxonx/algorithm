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
	visited []bool
	n       int
	numbers []int
)

func dfs(depth int) {
	if depth == n {
		for i := 0; i < n; i++ {
			fmt.Fprint(out, numbers[i], " ")
		}
		fmt.Fprintln(out)
		return
	}

	for i := 0; i < n; i++ {
		if !visited[i] {
			visited[i] = true
			numbers[depth] = i + 1
			dfs(depth + 1)
			visited[i] = false
		}
	}
}

func main() {
	defer out.Flush()
	fmt.Fscanf(in, "%d", &n)

	visited = make([]bool, n)
	numbers = make([]int, n)
	dfs(0)
}
