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
	var n, m int
	fmt.Sscanf(scanner.Text(), "%d %d", &n, &m)

	arr := [][]string{}
	for i := 0; i < n; i++ {
		scanner.Scan()
		str := scanner.Text()
		sArr := strings.Split(str, "")
		arr = append(arr, sArr)
	}

	count := 0
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			switch arr[i][j] {
			case "-":
				if j == 0 || arr[i][j-1] == "|" {
					count++
				}
			case "|":
				if i == 0 || arr[i-1][j] == "-" {
					count++
				}
			}
		}
	}

	fmt.Println(count)

}
