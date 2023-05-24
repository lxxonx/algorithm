package main

import (
	"bufio"
	"fmt"
	"os"
)

func isYearLeap(year int) bool {
	if year%4 == 0 && (year%100 != 0 || year%400 == 0) {
		return true
	}
	return false
}

func getMonthFromString(mon string) int {
	switch mon {
	case "January":
		return 1
	case "February":
		return 2
	case "March":
		return 3
	case "April":
		return 4
	case "May":
		return 5
	case "June":
		return 6
	case "July":
		return 7
	case "August":
		return 8
	case "September":
		return 9
	case "October":
		return 10
	case "November":
		return 11
	case "December":
		return 12
	default:
		return 0
	}
}

func isFloat(num float64) bool {
	if num == float64(int(num)) {
		return false
	}
	return true
}

var days = []int{0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30}
var leapDays = []int{0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30}

func main() {
	reader := bufio.NewReader(os.Stdin)

	var mon string
	var day, year, hour, min int

	fmt.Fscanf(reader, "%s %d, %d %d:%d", &mon, &day, &year, &hour, &min)
	totalMin := 365 * 24 * 60
	if isYearLeap(year) {
		totalMin += 1 * 24 * 60
	}

	currentMon := getMonthFromString(mon)
	current := min + hour*60 + (day-1)*24*60
	for i := 1; i < currentMon; i++ {
		if isYearLeap(year) {
			current += leapDays[i] * 24 * 60
		} else {
			current += days[i] * 24 * 60
		}
	}

	current *= 100

	asr := float64(current) / float64(totalMin)

	if isFloat(asr) {
		fmt.Printf("%g", asr)
	} else {
		fmt.Printf("%.1f", asr)
	}
}
