package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

var (
	scanner = bufio.NewScanner(os.Stdin)
	out     = bufio.NewWriter(os.Stdout)
)

var (
	n    int
	tree map[string][]string
)

func preorder(node string) {
	if node == "." {
		return
	}

	fmt.Fprintf(out, "%s", node)
	preorder(tree[node][0])
	preorder(tree[node][1])
}

func inorder(node string) {
	if node == "." {
		return
	}

	inorder(tree[node][0])
	fmt.Fprintf(out, "%s", node)
	inorder(tree[node][1])
}

func postorder(node string) {
	if node == "." {
		return
	}

	postorder(tree[node][0])
	postorder(tree[node][1])
	fmt.Fprintf(out, "%s", node)
}

func main() {
	defer out.Flush()
	scanner.Scan()

	fmt.Sscanf(scanner.Text(), "%d", &n)

	tree = make(map[string][]string, n)

	for i := 0; i < n; i++ {
		scanner.Scan()
		split := strings.Split(scanner.Text(), " ")
		tree[split[0]] = []string{split[1], split[2]}
	}

	preorder("A")
	fmt.Fprintln(out)
	inorder("A")
	fmt.Fprintln(out)
	postorder("A")
}
