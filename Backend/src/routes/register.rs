use actix_web::{web, HttpResponse};
use bcrypt::{hash, DEFAULT_COST};
use sqlx::SqlitePool;

#[derive(serde::Deserialize)]
pub struct FormData {
    username: String,
    password: String,
}

const DB_URL: &str = "sqlite:/home/saulitis/Documents/Programming/Junction2023/BlazinglyFastJournaling/Backend/blazingly_fast.db";
// Let's start simple: we always return a 200 OK
pub async fn register(form: web::Form<FormData>) -> HttpResponse {
    match hash_password(&form.password) {
        Ok(hashed) => {
            let pool = SqlitePool::connect(DB_URL).await.unwrap();
            let result = sqlx::query("INSERT INTO users (username, password) VALUES (?, ?)")
                .bind(form.username.clone())
                .bind(hashed)
                .execute(&pool)
                .await;
            match result {
                Ok(_) => todo!(),
                Err(e) => {
                    println!("Fail: {}", e);
                    HttpResponse::BadRequest().finish();
                }
            }
        }
        Err(e) => {
            println!("Failed to hash password: {:?}", e);
            HttpResponse::BadRequest().finish();
        }
    }
    HttpResponse::Ok().finish()
}

// hash plain text password
pub fn hash_password(plain_password: &str) -> Result<String, bcrypt::BcryptError> {
    hash(plain_password, DEFAULT_COST)
}

// check if user already exists
