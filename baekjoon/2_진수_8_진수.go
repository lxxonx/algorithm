package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	defer writer.Flush()

	var s string
	fmt.Fscanln(reader, &s)
	n := len(s)
	if n%3 == 1 {
		s = "00" + s
	} else if n%3 == 2 {
		s = "0" + s
	}
	sol(s)
}

func sol(s string) {

	n := len(s)
	for i := 0; i < n; i += 3 {
		fmt.Print((s[i]-'0')*4 + (s[i+1]-'0')*2 + (s[i+2] - '0'))
	}
}
