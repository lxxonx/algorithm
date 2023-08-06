use std::io::{BufWriter,BufReader,BufRead,Write,stdin,stdout};

fn main(){
    let mut reader = BufReader::new(stdin().lock());
    let mut writer = BufWriter::new(stdout().lock());
    let mut sum = 0;
    loop{  
        let mut input = String::new();
        reader.read_line(&mut input).unwrap();
        let mut input = input.trim().split_whitespace().map(|x|x.parse::<isize>().unwrap());
        let num: isize = input.next().unwrap();
        if num == -1 {
            break;
        }
        sum += num;
    }
    writeln!(writer, "{}", sum).unwrap();
} 