package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
)

var (
	scanner = bufio.NewScanner(os.Stdin)
	out     = bufio.NewWriter(os.Stdout)
)

var (
	n int
)

func main() {
	defer out.Flush()
	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d", &n)

	dp := make([][]int, n)

	for i := 0; i < n; i++ {
		dp[i] = make([]int, 3)
	}
	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d %d %d", &dp[0][0], &dp[0][1], &dp[0][2])

	for i := 1; i < n; i++ {
		rgb := make([]int, 3)
		scanner.Scan()
		fmt.Sscanf(scanner.Text(), "%d %d %d", &rgb[0], &rgb[1], &rgb[2])

		dp[i][0] = int(math.Min(float64(dp[i-1][1]), float64(dp[i-1][2]))) + rgb[0]
		dp[i][1] = int(math.Min(float64(dp[i-1][0]), float64(dp[i-1][2]))) + rgb[1]
		dp[i][2] = int(math.Min(float64(dp[i-1][0]), float64(dp[i-1][1]))) + rgb[2]
	}

	fmt.Fprintln(out, int(math.Min(math.Min(float64(dp[n-1][0]), float64(dp[n-1][1])), float64(dp[n-1][2]))))
}
