use std::io;
use std::collections::VecDeque;

const MAX: i64 = 100_000;
const MIN: i64 = 0;

fn move_to(n: i64, k: i64) -> i64 {
    let mut visited = [false; 100001];
    let mut queue = VecDeque::new();
    queue.push_back((n, 0));
    loop {
        let (n, t) = queue.pop_front().unwrap();
        if n == k {
            return t;
        }
        if n + 1 <= MAX && !visited[(n + 1) as usize] {
            visited[(n + 1) as usize] = true;
            queue.push_back((n + 1, t + 1));
        }
        if n - 1 >= MIN && !visited[(n - 1) as usize] {
            visited[(n - 1) as usize] = true;
            queue.push_back((n - 1, t + 1));
        }
        if n * 2 <= MAX && !visited[(n * 2) as usize] {
            visited[(n * 2) as usize] = true;
            queue.push_back((2 * n, t + 1));
        }
    }
}

fn main(){
    let buf = io::read_to_string(io::stdin()).unwrap();
    let mut input = buf.split_ascii_whitespace().flat_map(str::parse::<i64>);

    let res = move_to(input.next().unwrap(), input.next().unwrap());

    println!("{}", res);
} 