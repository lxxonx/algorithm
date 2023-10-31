use std::{
    cmp::min,
    io::{self},
};

fn main() {
    let mut num = String::new();
    io::stdin().read_line(&mut num).unwrap();

    let num = num.trim().parse::<usize>().unwrap();

    let mut dp = vec![0; num + 1];

    for i in 2..num + 1 {
        dp[i] = dp[i - 1] + 1;

        if i % 2 == 0 {
            dp[i] = min(dp[i], dp[i / 2] + 1);
        }
        if i % 3 == 0 {
            dp[i] = min(dp[i], dp[i / 3] + 1);
        }
    }

    println!("{}", dp[num]);
}
