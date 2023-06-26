package main

import (
	"bufio"
	"fmt"
	"os"
)

func dfs(vertex [][]int, visited []bool, cur int) {
	visited[cur] = true
	for _, i := range vertex[cur] {
		if !visited[i] {
			dfs(vertex, visited, i)
		}
	}
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	var n, v int
	fmt.Sscanf(scanner.Text(), "%d %d", &n, &v)

	vertex := make([][]int, n)

	for i := 0; i < v; i++ {
		scanner.Scan()
		var a, b int
		fmt.Sscanf(scanner.Text(), "%d %d", &a, &b)
		vertex[a-1] = append(vertex[a-1], b-1)
		vertex[b-1] = append(vertex[b-1], a-1)
	}
	visited := make([]bool, n)

	var count int

	for i := 0; i < n; i++ {
		if !visited[i] {
			dfs(vertex, visited, i)
			count++
		}
	}

	fmt.Println(count)
}
