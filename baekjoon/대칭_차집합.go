package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	var reader = bufio.NewReader(os.Stdin)
	//var writer = bufio.NewWriter(os.Stdout)

	str, _ := reader.ReadString('\n')
	nums := strings.Split(strings.TrimSuffix(str, "\n"), " ")
	N, _ := strconv.Atoi(nums[0])
	M, _ := strconv.Atoi(nums[1])

	str, _ = reader.ReadString('\n')
	nums = strings.Split(strings.TrimSuffix(str, "\n"), " ")

	n := map[int]bool{}
	m := map[int]bool{}
	for i := 0; i < N; i++ {
		ne, _ := strconv.Atoi(nums[i])
		n[ne] = true
	}

	str, _ = reader.ReadString('\n')
	nums = strings.Split(strings.TrimSuffix(str, "\n"), " ")

	for i := 0; i < M; i++ {
		me, _ := strconv.Atoi(nums[i])
		m[me] = true
	}
	nmm := make(map[int]bool)
	mmn := make(map[int]bool)
	for k, _ := range n {
		if m[k] != true {
			nmm[k] = true
		}
	}
	for k, _ := range m {
		if n[k] != true {
			mmn[k] = true
		}
	}
	fmt.Println(len(nmm) + len(mmn))
}
