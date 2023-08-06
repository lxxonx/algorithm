use std::io;

fn main() {
    let mut number_array = String::new();
    io::stdin().read_line(&mut number_array).unwrap();
    let numbers: Vec<&str> = number_array.split_whitespace().collect();
    let number_first = numbers[0].parse::<i32>().unwrap();
    let number_second = numbers[1].parse::<i32>().unwrap();

    if number_first > number_second {
        println!(">");
        return;
    } else if number_first < number_second {
        println!("<");
        return;
    } else {
        println!("==");
        return;
    }
}