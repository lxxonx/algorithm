package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strings"
)

func sol1() {
	scanner := bufio.NewScanner(os.Stdin)

	var n int
	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &n)

	graph := make([][]bool, n)
	for i := 0; i < n; i++ {
		scanner.Scan()
		tmp := strings.Split(scanner.Text(), "")
		graph[i] = make([]bool, n)
		for j := 0; j < len(tmp); j++ {
			if tmp[j] == "Y" {
				graph[i][j] = true
			} else {
				graph[i][j] = false
			}
		}
	}
	max := 0
	for i := 0; i < n; i++ {
		count := 0
		for j := 0; j < n; j++ {
			if i == j {
				continue
			}
			if graph[i][j] {
				count++
				continue
			}
			for k := 0; k < n; k++ {
				if graph[i][k] && graph[j][k] {
					count++
					break
				}
			}
		}

		if max < count {
			max = count
		}
	}

	fmt.Println(max)
}

func sol2() {
	scanner := bufio.NewScanner(os.Stdin)

	var n int
	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &n)

	graph := make([][]int, n+1)
	for i := 1; i <= n; i++ {
		scanner.Scan()
		tmp := strings.Split(scanner.Text(), "")
		graph[i] = make([]int, n+1)
		for j := 1; j <= n; j++ {
			if tmp[j-1] == "Y" {
				graph[i][j] = 1
			} else {
				graph[i][j] = int(math.Inf(0))
			}
		}
	}
	for i := 1; i <= n; i++ {
		graph[i][i] = 0
	}

	for k := 1; k <= n; k++ {
		for a := 1; a <= n; a++ {
			for b := 1; b <= n; b++ {
				if graph[a][b] > graph[a][k]+graph[k][b] {
					graph[a][b] = graph[a][k] + graph[k][b]
				}
			}
		}
	}

	fmt.Println(graph)

	distance := make([]int, n+1)
	for i := 1; i <= n; i++ {
		for j := 1; j <= n; j++ {
			if i != j && graph[i][j] <= 2 {
				distance[i] += 1
			}
		}
	}

	fmt.Println(distance)
}

func main() {
	sol2()
}
