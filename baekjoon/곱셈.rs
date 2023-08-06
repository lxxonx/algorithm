use std::io;

fn multi(a: i64, b: i64, m: i64) -> i64 {
    loop {
        if b == 0 {
            return 1;
        }

        let mut x = multi(a, b / 2, m);
        x = (x * x) % m;

        if b % 2 == 1 {
            return (x * a) % m;
        }else {
            return x;
        }
    }
}

fn main(){
    let buf = io::read_to_string(io::stdin()).unwrap();
    let mut input = buf.split_ascii_whitespace().flat_map(str::parse::<i64>);

    let res = multi(input.next().unwrap(), input.next().unwrap(), input.next().unwrap());

    println!("{}", res);
} 