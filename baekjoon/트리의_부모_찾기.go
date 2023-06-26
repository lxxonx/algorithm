package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	defer writer.Flush()

	var n int
	fmt.Fscanln(reader, &n)

	nodes := make([][]int, n+1)

	for i := 0; i < n; i++ {
		var from, to int
		fmt.Fscanln(reader, &from, &to)
		nodes[from] = append(nodes[from], to)
		nodes[to] = append(nodes[to], from)
	}

	parents := make([]int, n+1)
	parents[1] = 1
	visited := make([]bool, n+1)
	queue := []int{1}

	for len(queue) > 0 {
		front := queue[0]
		queue = queue[1:]

		for _, v := range nodes[front] {
			if !visited[v] {
				visited[v] = true
				queue = append(queue, v)
				parents[v] = front
			}
		}
	}

	for i := 2; i <= n; i++ {
		fmt.Fprintln(writer, parents[i])
	}
}
