# Rocket

A minimal Rust project scaffold.

## Persistence

This application does **not** need persistent storage at this stage. It only
prints a static greeting and has no runtime behavior that creates, reads,
updates, or deletes user/application data.

Because no database is required:

- `compose.yaml` only defines the application service; there is no `db` service.
- No database client, ORM, or migration-tool dependencies are included in
  `Cargo.toml`.
- No migrations directory or database bootstrap step is needed for local
  development.

If future features introduce stateful data, revisit this decision before adding
storage-related dependencies or services.

## Commands

Build the project:

```sh
cargo build
```

Run the test suite:

```sh
cargo test
```

Run Clippy lints:

```sh
cargo clippy
```

Format the code:

```sh
cargo fmt
```
