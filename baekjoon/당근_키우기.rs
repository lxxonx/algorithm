use std::io::{BufWriter,BufReader,BufRead,Write,stdin,stdout};

fn main(){
    let mut reader = BufReader::new(stdin().lock());
    let mut writer = BufWriter::new(stdout().lock());

    let mut input = String::new();
    reader.read_line(&mut input).unwrap();
    let mut input = input.trim().split_whitespace().map(|x|x.parse::<isize>().unwrap());
    let x = input.next().unwrap();
    let y = input.next().unwrap();

    let ans = if x >= y {
        (x + y) + y / 10 
    } else {
        (x + y) + x / 10
    };

    writeln!(writer, "{}", ans).unwrap();
} 