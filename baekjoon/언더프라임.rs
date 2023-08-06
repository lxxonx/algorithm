use std::io;
use std::f64;

// test 1: caching
// result: pass 132ms
// static mut PRIME_MAP: Vec<i64> = vec![];

// fn is_prime(n: i64) -> bool {
//     if n < 2 {
//         return false;
//     }
//     unsafe {
//         if PRIME_MAP.contains(&n) {
//             return true;
//         }
//     }
//     let mut i = 2;
//     while i * i <= n {
//         if n % i == 0 {
//             return false;
//         }
//         i += 1;
//     }
//     unsafe {
//         PRIME_MAP.push(n);
//     }
//     true
// }

// test 2: eratosthenes
// result: pass 132ms
fn prime_list(len: i64) -> Vec<bool> {
    let mut prime = vec![true; len as usize + 1];
    prime[0] = false;
    prime[1] = false;
    for i in 2..=(len as f64).sqrt() as i64 {
        if prime[i as usize] {
            let mut j = i * i;
            while j <= len {
                prime[j as usize] = false;
                j += i;
            }
        }
    }
    prime
}

static mut PRIME_MAP: Vec<bool> = vec![];

fn is_prime(n: i64) -> bool {
    unsafe {
        PRIME_MAP[n as usize]
    }
}

fn is_under_prime(mut n: i64) -> bool {
    let mut count: i64 = 0;
    for i in 2..=(f64::sqrt(n as f64) as i64)+1 {
        while n % i == 0 {
            n /= i;
            count += 1;
        }
    }
    if n != 1 {
        count += 1;
    }

    is_prime(count)
}

fn main(){
    let buf = io::read_to_string(io::stdin()).unwrap();
    let mut input = buf.split_ascii_whitespace().flat_map(str::parse::<i64>);
    let arr = [input.next().unwrap(), input.next().unwrap()];

    unsafe {
        PRIME_MAP = prime_list(arr[1]);
    }

    let mut count = 0;
    for i in arr[0]..=arr[1] {
        if is_under_prime(i) {
            count += 1;
        }
    }

    println!("{}", count);
} 