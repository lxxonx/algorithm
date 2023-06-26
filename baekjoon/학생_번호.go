package main

import (
	"bufio"
	"fmt"
	"os"
)

func findstr(str []string, s string) bool {
	for _, v := range str {
		if v == s {
			return true
		}
	}
	return false
}

func comp(str []string) int {
	length := 1
	for ; length <= len(str[0]); length++ {
		temp := []string{}
		for _, v := range str {
			s := v[len(v)-length:]
			if findstr(temp, s) == false {
				temp = append(temp, s)
			}
		}
		if len(temp) == len(str) {
			break
		}
	}

	return length
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	var num int
	fmt.Sscanf(scanner.Text(), "%d", &num)

	arr := make([]string, num)
	for i := 0; i < num; i++ {
		scanner.Scan()
		arr[i] = scanner.Text()
	}

	fmt.Println(comp(arr))

}
