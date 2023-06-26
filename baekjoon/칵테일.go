package main

import (
	"bufio"
	"fmt"
	"os"
)

func gcd(a, b int) int {
	if b == 0 {
		return a
	}

	return gcd(b, a%b)
}

func lcm(a, b int) int {
	return a * b / gcd(a, b)
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	mlcm := 1
	var n int
	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &n)

	arr := make([][][]int, n)

	for scanner.Scan() {
		var a, b, p, q int
		fmt.Sscanf(scanner.Text(), "%d %d %d %d", &a, &b, &p, &q)

		mlcm *= lcm(p, q)

		arr[a] = append(arr[a], []int{b, q, p})
		arr[b] = append(arr[b], []int{a, p, q})
	}

	visited := make([]bool, n)
	res := make([]int, n)
	res[0] = mlcm

	queue := make([]int, 0)
	queue = append(queue, 0)
	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]
		visited[curr] = true

		for _, v := range arr[curr] {
			b, q, p := v[0], v[1], v[2]

			res[b] = res[curr] * q / p

			if !visited[b] {
				queue = append(queue, b)
			}
		}
	}

	mgcd := res[0]

	for _, v := range res {
		mgcd = gcd(mgcd, v)
	}

	r := ""

	for _, v := range res {
		v /= mgcd
		r += fmt.Sprintf("%d ", v)
	}

	fmt.Println(r)
}
