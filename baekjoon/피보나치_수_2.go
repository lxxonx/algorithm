package main

import "fmt"

func main() {
	var n int
	var fibo [91]int64
	fibo[0], fibo[1] = 0, 1
	for i := 2; i <= 90; i++ {
		fibo[i] = fibo[i-1] + fibo[i-2]
	}
	fmt.Scan(&n)
	fmt.Println(fibo[n])
}
