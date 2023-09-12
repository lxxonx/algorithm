fn main() {
    let mut chars = get_chars_from_stdin();
    let mut count = 0;
    loop {
        if chars.len() == 1 {
            break;
        }
        let mut sum = 0;
        for ch in chars.iter() {
            sum += *ch as i32 - 48;
        }
        count += 1;
        chars = sum.to_string().bytes().collect();
    }
    println!("{}", count);
    if chars[0] % 3 == 0 {
        println!("YES");
    } else {
        println!("NO");
    }
}

fn get_chars_from_stdin() -> Vec<u8> {
    let mut st = String::new();
    std::io::stdin().read_line(&mut st).unwrap();
    let ret = st.trim().bytes().collect();

    ret
}
