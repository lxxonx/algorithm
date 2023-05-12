package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var num int
	scanner.Scan()
	line := scanner.Text()
	fmt.Sscanf(line, "%d", &num)

	sum := 0
	for i := 1; i < num; i++ {
		sum += i + i*num
	}

	fmt.Println(sum)
}
