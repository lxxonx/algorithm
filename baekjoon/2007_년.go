package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	var mon, date int

	fmt.Fscanf(reader, "%d %d", &mon, &date)

	day := []string{"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"}

	month := []int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}

	sum := 0

	for i := 0; i < mon-1; i++ {
		sum += month[i]
	}
	sum += date

	fmt.Println(day[sum%7])
}
