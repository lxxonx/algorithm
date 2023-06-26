package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	var n int
	fmt.Sscanf(scanner.Text(), "%d", &n)

	steps := make([]int, n)
	scanner.Scan()
	s := strings.Split(scanner.Text(), " ")
	for i := 0; i < n; i++ {
		fmt.Sscanf(s[i], "%d", &steps[i])
	}

	scanner.Scan()
	s = strings.Split(scanner.Text(), " ")
	var start, end int
	fmt.Sscanf(s[0], "%d", &start)
	fmt.Sscanf(s[1], "%d", &end)

	length := make([]int, n)

	queue := make([]int, 0)
	queue = append(queue, start-1)

	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]

		for i := cur + steps[cur]; i < n; i += steps[cur] {
			if cur == end-1 {
				fmt.Println(length[cur])
				return
			}
			if length[i] != 0 {
				continue
			}
			length[i] = length[cur] + 1
			queue = append(queue, i)
		}
		for i := cur - steps[cur]; i >= 0; i -= steps[cur] {
			if cur == end-1 {
				fmt.Println(length[cur])
				return
			}
			if length[i] != 0 {
				continue
			}
			length[i] = length[cur] + 1
			queue = append(queue, i)
		}
	}

	fmt.Println(-1)
}
