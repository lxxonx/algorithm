package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

var (
	scanner = bufio.NewScanner(os.Stdin)
	out     = bufio.NewWriter(os.Stdout)
)

var (
	n, t, p int
	arr     []int
)

func findIndex(arr []int, start, target int) int {
	if start >= len(arr) {
		return -1
	}

	cp := make([]int, len(arr)-start)
	copy(cp, arr[start:])

	for i, num := range arr {
		if num == target {
			return i + start
		}
	}
	return -1
}

func main() {
	defer out.Flush()

	scanner.Scan()

	fmt.Sscanf(strings.Trim(scanner.Text(), " "), "%d %d %d", &n, &t, &p)

	if n == 0 {
		fmt.Fprintln(out, 1)
		return
	}

	arr := make([]int, 0)

	scanner.Scan()
	str := strings.Split(strings.Trim(scanner.Text(), " "), " ")
	for _, v := range str {
		num, _ := strconv.Atoi(v)
		arr = append(arr, num)
	}

	arr = append(arr, t)

	sort.Slice(arr, func(i, j int) bool {
		return arr[i] > arr[j]
	})

	indices := make([]int, 0)

	index := findIndex(arr, 0, t)

	for index != -1 {
		indices = append(indices, index+1)
		index = findIndex(arr, index+1, t)
	}

	if indices[len(indices)-1] > p {
		fmt.Fprintln(out, -1)
	} else {
		fmt.Fprintln(out, indices[0])
	}
}
