fn main() {
    let mut st = String::new();
    std::io::stdin().read_line(&mut st).unwrap();
    let num = st.trim().parse::<u64>().unwrap();

    let mut factorial: u64 = 1;    
    for n in 2..=num {
        factorial *= n;
    }

    println!("{}", factorial);
}