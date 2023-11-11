use actix_web::{web, HttpResponse};

#[derive(serde::Deserialize)]
pub struct FormData {
    username: String,
    password: String,
}
// Let's start simple: we always return a 200 OK
pub async fn register(_form: web::Form<FormData>) -> HttpResponse {
    HttpResponse::Ok().finish()
}

// hash plain text password
// fn hash_password(plain_password: String) -> String {

// }
