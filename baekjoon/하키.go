package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

func main() {
	var reader = bufio.NewReader(os.Stdin)
	//var writer = bufio.NewWriter(os.Stdout)

	str, _ := reader.ReadString('\n')
	nums := strings.Split(strings.TrimSuffix(str, "\n"), " ")
	W, _ := strconv.Atoi(nums[0])
	H, _ := strconv.Atoi(nums[1])
	R := H / 2
	X, _ := strconv.Atoi(nums[2])
	Y, _ := strconv.Atoi(nums[3])
	P, _ := strconv.Atoi(nums[4])

	cnt := 0

	for i := 0; i < P; i++ {
		str, _ = reader.ReadString('\n')
		nums = strings.Split(strings.TrimSuffix(str, "\n"), " ")
		x, _ := strconv.Atoi(nums[0])
		y, _ := strconv.Atoi(nums[1])

		if math.Sqrt(float64((X-x)*(X-x)+(Y+R-y)*(Y+R-y))) <= float64(R) ||
			math.Sqrt(float64((X+W-x)*(X+W-x)+(Y+R-y)*(Y+R-y))) <= float64(R) ||
			x >= X && x <= X+W && y >= Y && y <= Y+H {
			cnt++
		}
	}

	fmt.Println(cnt)

}
