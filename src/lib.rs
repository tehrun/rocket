/// Returns the greeting shown by the command-line application.
#[must_use]
pub fn greeting() -> &'static str {
    "Hello, Rocket!"
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn greeting_returns_expected_message() {
        assert_eq!(greeting(), "Hello, Rocket!");
    }
}
