package main

import "fmt"

func main() {
	var eInit, sInit, mInit int
	fmt.Scanf("%d %d %d", &eInit, &sInit, &mInit)
	eMax := 15
	sMax := 28
	mMax := 19
	e := 1
	s := 1
	m := 1
	count := 1
	for ; e != eInit || s != sInit || m != mInit; count++ {
		e = e%eMax + 1
		s = s%sMax + 1
		m = m%mMax + 1
	}

	fmt.Printf("%d\n", count)
}
