package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strings"
)

var directions = [][2]int{
	{0, 1},
	{0, -1},
	{1, 0},
	{-1, 0},
}

func isOut(x, n int) bool {
	return x >= n || x < 0
}

func solution(inner [][]string) {
	STAR_SIZE := 5

	originStar := make([][2]int, 0)
	for x, row := range inner {
		for y, c := range row {
			if c == "*" {
				originStar = append(originStar, [2]int{x, y})
			}
		}
	}

	permuted := permutation(make([]int, len(originStar)))
	combined := combination(make([]int, 25), len(originStar))
	answer := 987654321

	checkConnection := func(stars [][]bool, position [2]int) bool {
		cnt := 0
		queue := [][2]int{position}
		visited := make([][]bool, STAR_SIZE)
		for i := 0; i < STAR_SIZE; i++ {
			visited[i] = make([]bool, STAR_SIZE)
		}

		visited[position[0]][position[1]] = true
		for len(queue) != 0 {
			front := queue[0]
			queue = queue[1:]
			x, y := front[0], front[1]
			cnt++

			for i := 0; i < 4; i++ {
				nx, ny := x+directions[i][0], y+directions[i][1]

				if isOut(nx, STAR_SIZE) || isOut(ny, STAR_SIZE) {
					continue
				}
				if visited[nx][ny] || !stars[nx][ny] {
					continue
				}

				visited[nx][ny] = true
				queue = append(queue, [2]int{nx, ny})
			}
		}

		return cnt == len(originStar)
	}

	stars := make([][]bool, STAR_SIZE)
	for i := 0; i < STAR_SIZE; i++ {
		stars[i] = make([]bool, STAR_SIZE)
	}

	for i := 0; i < len(combined); i++ {
		temp := make([][2]int, 0)
		for k := 0; k < len(combined[i]); k++ {
			x := combined[i][k] / 5
			y := combined[i][k] % 5
			temp = append(temp, [2]int{x, y})
			stars[x][y] = true
		}

		if checkConnection(stars, temp[0]) {
			for k := 0; k < len(permuted); k++ {
				total := 0
				for q := 0; q < len(permuted[k]); q++ {
					originPosition := permuted[k][q]
					total += getGap(originStar[originPosition][0], originStar[originPosition][1], temp[q][0], temp[q][1])
				}
				answer = int(math.Min(float64(answer), float64(total)))
			}
		}

		for i := 0; i < len(temp); i++ {
			stars[temp[i][0]][temp[i][1]] = false
		}
	}
	fmt.Println(answer)
}

func getGap(a, b, c, d int) int {
	return int(math.Abs(float64(a-c)) + math.Abs(float64(b-d)))
}

func combination(array []int, n int) [][]int {
	result := make([][]int, 0)
	var _run func(int, int, []int)
	_run = func(idx, depth int, arr []int) {
		if depth == n {
			result = append(result, append([]int(nil), arr...))
			return
		}

		if idx >= len(array) {
			return
		}
		arr = append(arr, array[idx])
		_run(idx+1, depth+1, arr)
		arr = arr[:len(arr)-1]
		_run(idx+1, depth, arr)
	}
	_run(0, 0, []int{})
	return result
}

func permutation(arr []int) [][]int {
	result := make([][]int, 0)
	size := len(arr)

	var _run func(int)
	_run = func(idx int) {
		if idx == size {
			result = append(result, append([]int(nil), arr...))
			return
		}

		for i := idx; i < size; i++ {
			arr[i], arr[idx] = arr[idx], arr[i]
			_run(idx + 1)
			arr[i], arr[idx] = arr[idx], arr[i]
		}
	}
	_run(0)

	return result
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	graph := make([][]string, 5)
	for i := 0; i < 5; i++ {
		scanner.Scan()
		graph[i] = strings.Split(scanner.Text(), "")
	}

	solution(graph)
}
