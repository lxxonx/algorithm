package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

type Domino struct {
	x, length int
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	n, _ := strconv.Atoi(scanner.Text())

	domino := make([]Domino, n)
	for i := 0; i < n; i++ {
		scanner.Scan()
		input := strings.Split(scanner.Text(), " ")
		x, _ := strconv.Atoi(input[0])
		length, _ := strconv.Atoi(input[1])
		domino[i] = Domino{x, length}
	}

	sort.Slice(domino, func(i, j int) bool {
		return domino[i].x < domino[j].x
	})

	count := 1

	for i := 0; i < n-1; i++ {
		if domino[i].x+domino[i].length < domino[i+1].x {
			count++
		}
	}

	fmt.Println(count)
}
