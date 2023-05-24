package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
)

func find(spot string, path []string) bool {
	for _, v := range path {
		if v == spot {
			return true
		}
	}
	return false
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	prev := scanner.Text()
	path := []string{prev}
	for {
		scanner.Scan()
		spot := scanner.Text()
		if spot == "" {
			if len(path) != 36 {
				fmt.Println("Invalid")
				return
			}

			if math.Abs(float64(prev[0])-float64(path[0][0]))+math.Abs(float64(prev[1])-float64(path[0][1])) != 3 {
				fmt.Println("Invalid")
				return
			}
			fmt.Println("Valid")
			return
		}

		sum := math.Abs(float64(prev[0])-float64(spot[0])) + math.Abs(float64(prev[1])-float64(spot[1]))

		if sum == 3 && prev[0] != spot[0] && prev[1] != spot[1] && find(spot, path) == false {
			prev = spot
			path = append(path, spot)
		} else {
			fmt.Println("Invalid")
			return
		}
	}
}
