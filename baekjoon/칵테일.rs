use std::io::{stdin, Read};

fn gcd(a: usize, b: usize) -> usize {
    if b == 0 {
        return a;
    }
    gcd(b, a % b)
}

fn lcm(a: usize, b: usize) -> usize {
    a * b / gcd(a, b)
}

fn main() {
    let mut buf = String::new();
    io::stdin().read_to_string(&mut buf).unwrap();
    let mut it = buf.split_ascii_whitespace();
    let mut read = || it.next().unwrap().parse::<usize>().unwrap();
    let n = read();
    let mut input = vec![[0; 4]; n - 1];
    for i in 0..n - 1 {
        input[i] = [0; 4].map(|_| read());
        let [a, b, _, _] = input[i];
        tree[a].push(b);
        tree[b].push(a);
        let [_, _, p, q] = &mut input[i];
        let gcd = lcm(*p, *q);
        *p /= gcd;
        *q /= gcd;
    }

    println!("{}", n);
}