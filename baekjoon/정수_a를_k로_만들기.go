package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	var a, k int
	fmt.Sscanf(scanner.Text(), "%d %d", &a, &k)

	dp := make([]int, k+1)

	for i := a + 1; i <= k; i++ {
		if i/2 >= a && i%2 == 0 {
			if dp[i/2] < dp[i-1] {
				dp[i] = dp[i/2] + 1
			} else {
				dp[i] = dp[i-1] + 1
			}
		} else {
			dp[i] = dp[i-1] + 1
		}
	}

	fmt.Println(dp[k])
}
