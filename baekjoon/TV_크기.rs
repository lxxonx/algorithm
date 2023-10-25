use std::io::{self};

fn main() {
    let mut number_array = String::new();
    io::stdin().read_line(&mut number_array).unwrap();
    let numbers: Vec<f32> = number_array
        .split_whitespace()
        .map(|x| x.parse::<f32>().unwrap())
        .collect();

    let sqr = numbers[1].powi(2) + numbers[2].powi(2);
    let c = numbers[0] / sqr.sqrt();

    let h = (numbers[1] * c) as i32;
    let w = (numbers[2] * c) as i32;

    println!("{} {}", h, w);
}
