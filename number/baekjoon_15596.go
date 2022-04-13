package main

func sum(a []int) int {
	r := 0
	for _, v := range a {
		r += v
	}
	return r
}

func main() {
	print(sum([]int{1, 2, 3, 4, 5}))
}
