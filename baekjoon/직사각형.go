package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var a, b int

	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &a)

	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &b)

	fmt.Println(a * b)

}
