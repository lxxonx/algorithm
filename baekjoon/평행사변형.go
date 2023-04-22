package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
)

func isIntegral(val float64) bool {
	return val == float64(int(val))
}

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var ax, ay, bx, by, cx, cy float64

	fmt.Fscanln(reader, &ax, &ay, &bx, &by, &cx, &cy)

	var abSlope, acSlope, bcSlope float64
	if (ax - bx) == 0 {
		abSlope = 0
	} else {
		abSlope = float64(ay-by) / float64(ax-bx)
	}
	if (ax - cx) == 0 {
		acSlope = 0
	} else {
		acSlope = float64(ay-cy) / float64(ax-cx)
	}
	if (bx - cx) == 0 {
		bcSlope = 0
	} else {
		bcSlope = float64(by-cy) / float64(bx-cx)
	}

	if abSlope == acSlope && acSlope == bcSlope {
		fmt.Fprintln(writer, "-1.0")
		return
	}

	var abLength, acLength, bcLength, max, min float64

	abLength = math.Sqrt((ax-bx)*(ax-bx) + (ay-by)*(ay-by))
	acLength = math.Sqrt((ax-cx)*(ax-cx) + (ay-cy)*(ay-cy))
	bcLength = math.Sqrt((bx-cx)*(bx-cx) + (by-cy)*(by-cy))

	// a-b, b-c
	max = abLength*2 + bcLength*2
	min = abLength*2 + bcLength*2

	// a-c, c-b
	if max < acLength*2+bcLength*2 {
		min, max = max, acLength*2+bcLength*2
	} else {
		min = acLength*2 + bcLength*2
	}

	// b-a, a-c
	if max < abLength*2+acLength*2 {
		min = math.Min(min, max)
		max = abLength*2 + acLength*2
	} else {
		min = math.Min(min, abLength*2+acLength*2)
	}

	ans := max - min

	if isIntegral(ans) {
		fmt.Fprintf(writer, "%.1f\n", ans)
		return
	}
	fmt.Fprintln(writer, ans)
}
