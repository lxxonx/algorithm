package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var (
	scanner = bufio.NewScanner(os.Stdin)
	out     = bufio.NewWriter(os.Stdout)
)

var (
	height, width int
	original      [][]int
	destination   [][]int
)

func check(orig [][]int, dest [][]int) bool {
	for i := range orig {
		for j := range orig[0] {
			if orig[i][j] != dest[i][j] {
				return false
			}
		}
	}
	return true
}

func flip(matrix [][]int, h, w int) {
	for i := h; i < h+3; i++ {
		for j := w; j < w+3; j++ {
			if matrix[i][j] == 1 {
				matrix[i][j] = 0
			} else {
				matrix[i][j] = 1
			}
		}
	}
}

func main() {
	defer out.Flush()

	scanner.Scan()
	fmt.Sscanf(scanner.Text(), "%d %d\n", &height, &width)

	original = make([][]int, height)
	destination = make([][]int, height)

	for i := 0; i < height; i++ {
		scanner.Scan()
		split := strings.Split(scanner.Text(), "")
		original[i] = make([]int, width)
		for j := 0; j < width; j++ {
			original[i][j], _ = strconv.Atoi(split[j])
		}
	}

	for i := 0; i < height; i++ {
		scanner.Scan()
		split := strings.Split(scanner.Text(), "")
		destination[i] = make([]int, width)
		for j := 0; j < width; j++ {
			destination[i][j], _ = strconv.Atoi(split[j])
		}
	}

	if check(original, destination) {
		fmt.Fprintln(out, 0)
		return
	}

	if height < 3 || width < 3 {
		fmt.Fprintln(out, -1)
		return
	}

	cnt := 0

	for i := 0; i < height-2; i++ {
		for j := 0; j < width-2; j++ {
			if destination[i][j] != original[i][j] {
				flip(original, i, j)
				cnt++
			}
		}
	}

	if !check(original, destination) {
		fmt.Fprintln(out, -1)
	} else {
		fmt.Fprint(out, cnt)
	}

}
