# syntax=docker/dockerfile:1

FROM rust:1-bookworm AS builder
WORKDIR /app

# Copy manifests first to improve Docker layer caching for dependency builds.
COPY Cargo.toml Cargo.lock rust-toolchain.toml ./
COPY src ./src

RUN cargo build --release --locked

FROM debian:bookworm-slim AS runtime

RUN useradd --system --uid 10001 --create-home --home-dir /home/appuser appuser

COPY --from=builder /app/target/release/rocket /usr/local/bin/rocket

# This project currently runs as a CLI. Keep the conventional application port
# documented for deployments that add a listener later.
EXPOSE 8080

USER appuser
ENTRYPOINT ["/usr/local/bin/rocket"]
