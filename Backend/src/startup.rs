use actix_web::dev::Server;
use actix_web::{web, App, HttpServer};
use std::net::TcpListener;

use crate::routes::insights;
use crate::routes::register;

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let server = HttpServer::new(move || {
        App::new()
            //Route for registering user
            .route("/register", web::post().to(register))
            .route("/insights", web::post().to(insights))
    })
    .listen(listener)?
    .run();
    Ok(server)
}
