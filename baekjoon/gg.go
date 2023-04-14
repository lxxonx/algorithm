package main

import (
	"bufio"
	"fmt"
	"math/big"
	"os"
	"strings"
)

func main() {
	num := []string{
		"40404", "1234", "777", "109", "100",
		"24", "22", "22", "22", "22",
		"22", "22", "22", "22", "22",
		"22", "22", "22", "22", "22",
		"22", "22", "22", "22", "18",
		"17", "17", "10", "9", "8",
		"8", "7", "6", "5", "4",
		"3", "3", "3", "2", "2",
		"1", "1", "1", "0"}

	emoji := []string{
		"📟", "🔢", "🎰", "", "💯",
		"🏪", "🧑‍🏫", "🧑🏻‍🏫", "🧑🏼‍🏫", "🧑🏽‍🏫",
		"🧑🏾‍🏫", "🧑🏿‍🏫", "👨‍🏫", "👨🏻‍🏫", "👨🏼‍🏫",
		"👨🏽‍🏫", "👨🏾‍🏫", "👨🏿‍🏫", "👩‍🏫", "👩🏻‍🏫",
		"👩🏼‍🏫", "👩🏽‍🏫", "👩🏾‍🏫", "👩🏿‍🏫", "🔞",
		"📅", "📆", "🔟", "9️⃣", "🎱",
		"8️⃣", "7️⃣", "6️⃣", "5️⃣", "4️⃣",
		"🥉", "🏎️", "3️⃣", "🥈", "2️⃣",
		"🥇", "🔂", "1️⃣", "0️⃣",
	}

	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var a, b string
	fmt.Fscanln(reader, &a)
	fmt.Fscanln(reader, &b)

	for i := 0; i < len(num); i++ {
		a = strings.ReplaceAll(a, emoji[i], num[i])
		b = strings.ReplaceAll(b, emoji[i], num[i])
	}

	aNum := new(big.Int)
	bNum := new(big.Int)

	aNum, _ = aNum.SetString(a, 10)
	bNum, _ = bNum.SetString(b, 10)

	sum := new(big.Int)

	sumString := sum.Add(aNum, bNum).String()

	for i := 0; i < len(num); i++ {
		sumString = strings.ReplaceAll(sumString, num[i], emoji[i])
	}

	writer.WriteString(sumString)
}
