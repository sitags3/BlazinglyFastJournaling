//! main.rs
use backend::startup::run;
use std::net::TcpListener;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let address = format!("127.0.0.1:8000");
    let listener = TcpListener::bind(address).expect("Failed to bind random port");
    run(listener)?.await
}
