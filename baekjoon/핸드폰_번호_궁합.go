package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var a, b string
	scanner.Scan()
	a = scanner.Text()
	scanner.Scan()
	b = scanner.Text()

	dp := ""
	for i := 0; i < len(a); i++ {
		dp += a[i:i+1] + b[i:i+1]
	}

	for len(dp) > 2 {
		temp := ""

		for i := 0; i < len(dp)-1; i++ {
			temp += fmt.Sprintf("%d", (int(dp[i])-48+int(dp[i+1])-48)%10)
		}

		dp = temp
	}

	fmt.Println(dp)

}
