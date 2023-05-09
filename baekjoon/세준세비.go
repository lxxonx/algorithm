package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strings"
)

type Input struct {
	n, m           int
	nPower, mPower []int
}

func (i Input) fight() string {
	sort.Sort(sort.IntSlice(i.nPower))
	sort.Sort(sort.IntSlice(i.mPower))

	for len(i.nPower) > 0 && len(i.mPower) > 0 {
		if i.nPower[0] >= i.mPower[0] {
			i.mPower = i.mPower[1:]
		} else {
			i.nPower = i.nPower[1:]
		}
	}

	if len(i.nPower) > 0 {
		return "S"
	} else if len(i.mPower) > 0 {
		return "B"
	} else {
		return "C"
	}

}

func main() {
	scn := bufio.NewScanner(os.Stdin)

	var length int
	fmt.Scanln(&length)

	lines := make([]Input, length)

	for i := 0; i < length; i++ {
		input := Input{}
		scn.Scan()
		scn.Scan()
		fmt.Sscanf(scn.Text(), "%d %d", &input.n, &input.m)
		scn.Scan()
		input.nPower = make([]int, input.n)
		c := strings.Split(scn.Text(), " ")
		for j, v := range c {
			fmt.Sscanf(v, "%d", &input.nPower[j])
		}

		scn.Scan()
		c = strings.Split(scn.Text(), " ")
		input.mPower = make([]int, input.m)
		for j, v := range c {
			fmt.Sscanf(v, "%d", &input.mPower[j])
		}

		lines[i] = input
	}
	for _, v := range lines {
		fmt.Println(v.fight())
	}
}
