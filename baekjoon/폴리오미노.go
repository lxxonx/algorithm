package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func fillX(s string) string {
	var ret string

	for len(s) >= 4 {
		s = s[4:]
		ret += "AAAA"
	}

	for len(s) >= 2 {
		s = s[2:]
		ret += "BB"
	}

	return ret
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	prob := scanner.Text()

	s := strings.Split(prob, ".")

	p := []string{}
	for _, v := range s {
		if len(v)%2 != 0 {
			fmt.Println(-1)
			return
		}

		p = append(p, fillX(v))
	}

	fmt.Println(strings.Join(p, "."))
}
