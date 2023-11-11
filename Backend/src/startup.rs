use actix_web::dev::Server;
use actix_web::{web, App, HttpServer};
use std::net::TcpListener;

use crate::routes::register;

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let server = HttpServer::new(move || {
        App::new()
            //Route for registering user
            .route("/register", web::post().to(register))
    })
    .listen(listener)?
    .run();
    Ok(server)
}
