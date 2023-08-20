use std::io::{self, BufRead};
// use std::collections::HashSet;

fn main() {
    let (_n, mut vec) = read_input();

    vec.sort_by(
        |a, b| {
            if a.len() == b.len() {
                return a.cmp(b);
            }

            return b.len().cmp(&a.len());
        }
    );

    let mut new_vec: Vec<String> = Vec::new();

    for i in 0..vec.len() {
        let mut is_prefix = false;

        for j in 0..new_vec.len() {
            if new_vec[j].starts_with(&vec[i]) {
                is_prefix = true;
                break;
            }
        }

        if !is_prefix {
            new_vec.push(vec[i].clone());
        }
    }


    println!("{}", new_vec.len());
}

fn read_input() -> (usize, Vec<String>) {
    let mut lines = io::stdin().lock().lines();
    let mut vec = Vec::new();

    let length = lines.next().unwrap().unwrap().parse::<usize>().unwrap();

    while let Some(line) = lines.next() {
        let last_input = line.unwrap();

        if last_input.len() == 0 {
            break;
        }

        vec.push(last_input);
    }

    (length, vec)
}