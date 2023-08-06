package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var (
	scanner = bufio.NewScanner(os.Stdin)
	out     = bufio.NewWriter(os.Stdout)
)

var (
	num, x   int
	sum, cnt int
)

func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func main() {
	scanner.Scan()
	fmt.Sprintf(scanner.Text(), "%d", &num)

	scanner.Scan()
	txt := strings.Split(scanner.Text(), " ")

	scanner.Scan()
	t := scanner.Text()
	x, _ = strconv.Atoi(t)

	sum := 0
	cnt := 0

	for _, v := range txt {
		n, _ := strconv.Atoi(v)

		if gcd(x, n) == 1 {
			sum += n
			cnt += 1
		}
	}

	fmt.Println(float32(sum / cnt))
}
