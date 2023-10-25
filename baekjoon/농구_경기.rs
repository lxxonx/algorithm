use std::collections::HashMap;
use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let _num: i32 = stdin
        .lock()
        .lines()
        .next()
        .unwrap()
        .unwrap()
        .parse()
        .unwrap();
    let names: Vec<String> = stdin.lock().lines().map(|x| x.unwrap()).collect();

    let mut members: HashMap<String, i32> = HashMap::new();

    for name in names {
        if members.contains_key(&name.chars().nth(0).unwrap().to_string()) {
            members.insert(
                name.chars().nth(0).unwrap().to_string(),
                members
                    .get(&name.chars().nth(0).unwrap().to_string())
                    .unwrap()
                    + 1,
            );
        } else {
            members.insert(name.chars().nth(0).unwrap().to_string(), 1);
        }
    }

    let mut res = Vec::new();

    for (key, value) in members {
        if value >= 5 {
            res.push(key);
        }
    }

    if res.len() == 0 {
        println!("PREDAJA");
    } else {
        res.sort();
        for name in res {
            print!("{}", name);
        }
    }
}
