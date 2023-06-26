package main

import (
	"bufio"
	"fmt"
	"os"
)

type mat struct {
	matrix [][]int
	m      int
	n      int
}

func (m *mat) dfs(x int, y int) int {
	if x < 0 || x >= m.m || y < 0 || y >= m.n || m.matrix[x][y] == 0 {
		return 0
	}

	m.matrix[x][y] = 0

	m.dfs(x-1, y)
	m.dfs(x+1, y)
	m.dfs(x, y-1)
	m.dfs(x, y+1)

	return 1
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	var t int
	fmt.Sscanf(scanner.Text(), "%d", &t)

	for i := 0; i < t; i++ {
		scanner.Scan()
		var m, n, k int
		fmt.Sscanf(scanner.Text(), "%d %d %d", &m, &n, &k)

		p := mat{m: m, n: n}
		p.matrix = make([][]int, m)

		for j := 0; j < m; j++ {
			p.matrix[j] = make([]int, n)
			for l := 0; l < n; l++ {
				p.matrix[j][l] = 0
			}
		}

		for j := 0; j < k; j++ {
			scanner.Scan()
			var x, y int
			fmt.Sscanf(scanner.Text(), "%d %d", &x, &y)
			p.matrix[x][y] = 1
		}

		count := 0

		for j := 0; j < m; j++ {
			for l := 0; l < n; l++ {
				count += p.dfs(j, l)
			}
		}

		fmt.Println(count)
	}
}
