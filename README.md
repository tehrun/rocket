# Rocket

Rocket is a minimal Rust application scaffold. The current binary prints a static
`Hello, Rocket!` greeting through a small library function, making the repository
a compact starting point for Rust application development, testing, linting,
formatting, and containerization.

## Prerequisites

Install the following tools before working locally:

- [Rustup](https://rustup.rs/) for managing the Rust toolchain.
- A stable Rust toolchain. This repository includes `rust-toolchain.toml`, which
  selects the stable channel and installs `rustfmt` and `clippy`.
- Docker with the Compose plugin if you want to build or run the containerized
  application.

## Local Rust setup

Install Rust and the repository toolchain components:

```sh
rustup toolchain install stable --component rustfmt --component clippy
```

From the repository root, verify the toolchain and dependencies:

```sh
cargo check --locked
```

Run the application locally:

```sh
cargo run --locked
```

## Docker/Compose setup

Build the application image with Docker:

```sh
docker build -t rocket .
```

Run the container directly:

```sh
docker run --rm rocket
```

Or build and run it with Docker Compose:

```sh
docker compose up --build
```

The Compose configuration exposes port `8080:8080` for future web/server
behavior, although the current application is a CLI that exits after printing a
greeting.

## Build command

Build the project in debug mode:

```sh
cargo build --locked
```

Build the optimized release binary:

```sh
cargo build --release --locked
```

## Test command

Run the test suite:

```sh
cargo test --locked
```

## Lint and formatting commands

Run Clippy with warnings treated as errors:

```sh
cargo clippy --locked --all-targets --all-features -- -D warnings
```

Check formatting without modifying files:

```sh
cargo fmt --check
```

Apply formatting changes:

```sh
cargo fmt
```

## Environment variables

The application does not currently require any runtime environment variables.

`compose.yaml` optionally reads a repository-root `.env` file for future
configuration:

```sh
# .env
# No variables are required at this time.
```

If environment variables are added later, document each one here with:

- variable name;
- whether it is required or optional;
- default value, if any;
- example value;
- description of its effect.

## Database setup

No database is selected for this project at this stage. The application does not
need persistent storage, so there is no database service in `compose.yaml`, no
database client or ORM dependency in `Cargo.toml`, and no migrations directory.

If a database is selected in the future, update this section with:

1. required environment variables such as `DATABASE_URL`;
2. Docker Compose service details;
3. local database creation steps;
4. migration installation and execution commands;
5. seed or fixture loading instructions, if applicable.
