use std::io::{BufReader,BufRead,stdin};

fn find_meeting_room(vector: Vec<(i32, i32)>) -> isize {
    let mut time = 0;
    let mut count = 0;
    for i in vector.into_iter() {
        if time <= i.1 {
            count += 1;
            time = i.0;
        }
    }
    count
}

fn main(){
    let mut reader = BufReader::new(stdin().lock());
    let mut input = String::new();
    reader.read_line(&mut input).unwrap();

    let n = input.trim().parse().unwrap();
    let mut v: Vec<(i32, i32)> = vec![];
    for _ in 0..n{
        input.clear();
        reader.read_line(&mut input).unwrap();
        let nums: Vec<i32> = input.trim().split_whitespace().map(|x|x.parse().unwrap()).collect::<Vec<i32>>();

        v.push((nums[1],nums[0]));
    }
    v.sort();

    let res = find_meeting_room(v);

    println!("{}", res);
} 