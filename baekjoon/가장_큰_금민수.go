package main

import (
	"bufio"
	"fmt"
	"os"
)

func hasElse(n int) bool {
	gg := n
	for gg > 9 {
		m := gg % 10
		if m != 7 && m != 4 {
			return true
		}
		gg = gg / 10
	}
	if gg != 7 && gg != 4 {
		return true
	}
	return false
}

func Sol1526(n int) {
	for i := n; i >= 4; i-- {
		if !hasElse(i) {
			fmt.Println(i)
			return
		}
	}
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	defer writer.Flush()

	var i int
	fmt.Fscanln(reader, &i)
	Sol1526(i)
}
