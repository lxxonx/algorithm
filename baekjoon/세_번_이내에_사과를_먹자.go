package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func printGraph(graph [][]int) {
	for _, v := range graph {
		fmt.Println(v)
	}
}

func hasPath(path [][]int, curr []int) bool {
	for _, v := range path {
		if v[0] == curr[0] && v[1] == curr[1] {
			return true
		}
	}
	return false
}

var cnt = 0

func move(graph [][]int, curr []int, path [][]int, depth int, count int) {
	dx := []int{0, 0, 1, -1}
	dy := []int{1, -1, 0, 0}

	if cnt >= 2 {
		return
	}

	if depth > 3 {
		return
	}

	if graph[curr[0]][curr[1]] == 1 {
		count++
	}

	path = append(path, curr)

	for i := 0; i < 4; i++ {
		nx := curr[0] + dx[i]
		ny := curr[1] + dy[i]
		if nx >= 0 && nx < 5 && ny >= 0 && ny < 5 &&
			graph[nx][ny] != -1 &&
			!hasPath(path, []int{nx, ny}) {
			move(graph, []int{nx, ny}, path, depth+1, count)
		}
	}

	if cnt < count {
		cnt = count
	}
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	graph := make([][]int, 5)

	for i := 0; i < 5; i++ {
		scanner.Scan()
		tmp := strings.Split(scanner.Text(), " ")
		graph[i] = make([]int, 5)
		for j := 0; j < 5; j++ {
			graph[i][j], _ = strconv.Atoi(tmp[j])
		}
	}

	scanner.Scan()
	currStr := strings.Split(scanner.Text(), " ")
	curr := make([]int, 2)

	for i := 0; i < 2; i++ {
		curr[i], _ = strconv.Atoi(currStr[i])
	}

	move(graph, curr, [][]int{}, 0, 0)

	if cnt >= 2 {
		fmt.Println(1)
	} else {
		fmt.Println(0)
	}
}
