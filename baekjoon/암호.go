package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func reverse(s []string) string {
	for i := 0; i < len(s)/2; i++ {
		j := len(s) - 1 - i
		s[i], s[j] = s[j], s[i]
	}
	return strings.Join(s, "")
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	lines := []string{}
	for scanner.Scan() {
		line := scanner.Text()
		lines = append(lines, line)
	}
	var num int
	fmt.Sscanf(lines[0], "%d", &num)

	for i := 0; i < len(lines[1]); i += num {
		chunk := lines[i*num : (i+1)*num]
		if i%2 == 0 {
			fmt.Println(chunk)
		} else {
			fmt.Println(reverse(chunk))
		}

	}
}
