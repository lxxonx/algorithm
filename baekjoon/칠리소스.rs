#[allow(unused_variables)]

fn main() {
    let input = process_input();
    let tz = &mut input.split_ascii_whitespace();

    let mut c: isize = parse(tz);

    let mut res = 0;
    let mut d = 1;

    while c > 0 {
        res += d * (c % 7);
        c /= 7;
        d *= 3;
    }

    println!("{}", res)
}

use std::fmt::Debug;
use std::str::FromStr;

#[inline(always)]
fn parse<'a, T, U>(tz: &mut T) -> U
where
    T: Iterator<Item = &'a str>,
    U: FromStr,
    <U as FromStr>::Err: Debug,
{
    tz.next().unwrap().parse().unwrap()
}

fn process_input() -> String {
    use std::io::{self, Read};
    let mut stdin = io::stdin();
    let mut buffer = String::new();
    drop(stdin.read_to_string(&mut buffer));
    buffer
}