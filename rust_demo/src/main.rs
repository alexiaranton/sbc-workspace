use std::io;

fn count_vowels(input: &str) -> usize {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let mut count = 0;

    for c in input.chars() {
        if vowels.contains(&c.to_ascii_lowercase()) {
            count += 1;
        }
    }
    count
}

fn main() {
    let mut input = String::new();
    println!("What is your string? ");
    let n = io::stdin().read_line(&mut input).unwrap();
    let vowel_count = count_vowels(&input);
    println!("Number of vowels: {}", vowel_count);
}
