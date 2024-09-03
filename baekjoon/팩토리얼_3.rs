// #![allow(unused)]
fn main() {
    let mut st = String::new();
    std::io::stdin().read_line(&mut st).unwrap();
    let num = st.trim().parse::<BigUint>().unwrap();

    let mut factorial: BigUint = 1;    
    for n in 2..=num {
        factorial *= n;
    }

    println!("{}", factorial);
}