package main

import (
	"fmt"
	"strconv"
)

func reverse(s string) string {
	r := []rune(s)
	for i := 0; i < len(s)/2; i++ {
		r[i], r[len(s)-1-i] = r[len(s)-1-i], r[i]
	}
	return string(r)
}

func main() {
	var a, b string

	fmt.Scan(&a, &b)

	a = reverse(a)
	b = reverse(b)

	aInt, _ := strconv.Atoi(a)
	bInt, _ := strconv.Atoi(b)

	sum := aInt + bInt

	sumStr := strconv.Itoa(sum)
	sumStr = reverse(sumStr)

	sum, _ = strconv.Atoi(sumStr)

	fmt.Println(sum)
}
