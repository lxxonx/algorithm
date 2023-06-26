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

	people := make([][]int, n)

	scanner.Scan()
	s := strings.Split(scanner.Text(), " ")
	var start, end int
	fmt.Sscanf(s[0], "%d", &start)
	fmt.Sscanf(s[1], "%d", &end)

	var cases int
	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &cases)

	for i := 0; i < cases; i++ {
		scanner.Scan()
		s = strings.Split(scanner.Text(), " ")
		var a, b int
		fmt.Sscanf(s[0], "%d", &a)
		fmt.Sscanf(s[1], "%d", &b)

		people[a-1] = append(people[a-1], b-1)
		people[b-1] = append(people[b-1], a-1)
	}

	length := make([]int, n)

	queue := make([]int, 0)
	queue = append(queue, start-1)

	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]

		for _, i := range people[cur] {
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
