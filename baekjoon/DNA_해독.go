package main

import (
	"bufio"
	"fmt"
	"os"
)

var codeMap = map[string]string{
	"AA": "A",
	"AG": "C",
	"AC": "A",
	"AT": "G",
	"GA": "C",
	"GG": "G",
	"GC": "T",
	"GT": "A",
	"CA": "A",
	"CG": "T",
	"CC": "C",
	"CT": "G",
	"TA": "G",
	"TG": "A",
	"TC": "G",
	"TT": "T",
}

func main() {
	var num int
	var code string

	reader := bufio.NewReader(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	defer writer.Flush()

	fmt.Fscanln(reader, &num)
	fmt.Fscanln(reader, &code)

	if num == 1 {
		fmt.Fprintln(writer, code)
		return
	}

	decoded := ""
	for len(code) > 0 {
		if decoded == "" {
			sp := len(code) - 1
			decoded = code[sp:]
			code = code[:sp]
		}
		sp := len(code) - 1
		last := code[sp:]
		code = code[:sp]
		decoded = codeMap[decoded+last]
	}

	fmt.Fprintln(writer, decoded)
}
