fn main() {
    let mut chars = get_chars_from_stdin();
    chars.sort_by_key(|&k| u8::MAX - k);
    let rst = String::from_utf8(chars).unwrap();
    println!("{}", rst);
}

fn get_chars_from_stdin() -> Vec<u8> {
    let mut st = String::new();
    std::io::stdin().read_line(&mut st).unwrap();
    let ret = st.trim().bytes().collect();

    ret
}
