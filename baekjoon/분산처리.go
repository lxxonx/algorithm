package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	txt := scanner.Text()
	var length int
	fmt.Sscanf(txt, "%d", &length)

	for i := 0; i < length; i++ {
		scanner.Scan()
		txt := scanner.Text()
		var a, b int
		fmt.Sscanf(txt, "%d %d", &a, &b)

		a %= 10
		if a == 0 {
			fmt.Println(10)
			continue
		}

		b %= 4
		if b == 0 {
			b = 4
		}

		fmt.Println(int(math.Pow(float64(a), float64(b))) % 10)
	}
}
