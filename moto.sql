USE moto_db;

CREATE TABLE moto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(50) NOT NULL,
  modello VARCHAR(50) NOT NULL,
  prezzo DECIMAL(10, 2) NOT NULL,
  anno INT NOT NULL,
  cilindrata INT NOT NULL,
  descrizione TEXT,
  immagine_url VARCHAR(255)
);