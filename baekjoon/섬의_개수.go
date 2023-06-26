package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

var island [][]int

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {
		var n, m int
		fmt.Sscanf(scanner.Text(), "%d %d", &n, &m)

		if n == 0 && m == 0 {
			break
		}

		island = make([][]int, m)

		for i := 0; i < m; i++ {
			scanner.Scan()
			s := strings.Split(scanner.Text(), " ")

			for j := 0; j < len(s); j++ {
				var num int
				fmt.Sscanf(s[j], "%d", &num)
				island[i] = append(island[i], num)
			}
		}

		count := 0

		for i := 0; i < m; i++ {
			for j := 0; j < n; j++ {

				if island[i][j] == 1 {
					island[i][j] = 0
					queue := make([][]int, 0)
					queue = append(queue, []int{i, j})
					dx := []int{0, 0, 1, -1, 1, 1, -1, -1}
					dy := []int{1, -1, 0, 0, 1, -1, 1, -1}
					for len(queue) > 0 {
						cur := queue[0]
						queue = queue[1:]

						for i := 0; i < 8; i++ {
							x := cur[0] + dx[i]
							y := cur[1] + dy[i]

							if x < 0 || x >= m || y < 0 || y >= n {
								continue
							}
							if island[x][y] == 1 {
								island[x][y] = 0
								queue = append(queue, []int{x, y})
							}

						}
					}
					count++
				}
			}
		}

		fmt.Println(count)
	}

}
