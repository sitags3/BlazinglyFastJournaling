// //! src/configuration.rs

// use config::{Config, File, FileFormat};
// #[derive(serde::Deserialize)]
// pub struct Settings {
//     pub database_path: String,
//     pub application_port: u16,
// }

// pub fn get_configuration() -> Result<Settings, config::ConfigError> {
//     let config = Config::builder()
//         .add_source(File::new("../configuration.yaml", FileFormat::Yaml))
//         .build()?;
//     let final_settings = config.try_deserialize::<Settings>()?;
//     Ok(final_settings)
// }
