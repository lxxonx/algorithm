package main

import "fmt"

func isPalindrome(input string) bool {
	for i := 0; i < len(input)/2; i++ {
		if input[i] != input[len(input)-i-1] {
			return false
		}
	}
	return true
}

func main() {
	var input string
	for {
		fmt.Scan(&input)
		if input == "0" {
			break
		}
		if isPalindrome(input) {
			fmt.Println("yes")
		} else {
			fmt.Println("no")
		}
	}
}
