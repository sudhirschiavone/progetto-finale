USE moto_db;

CREATE TABLE moto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  marca_id INT NOT NULL,
  modello VARCHAR(50) NOT NULL,
  prezzo DECIMAL(10, 2) NOT NULL,
  anno INT NOT NULL,
  cilindrata INT NOT NULL,
  descrizione TEXT,
  immagine_url VARCHAR(255),
  FOREIGN KEY (marca_id) REFERENCES marca(id)
);
CREATE TABLE marca (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  immagine_url VARCHAR(255)
);
INSERT INTO marca (nome, immagine_url, descrizione)
VALUES
  ('Yamaha', 'https://example.com/yamaha.jpg', 'Descrizione Yamaha'),
  ('Honda', 'https://example.com/honda.jpg', 'Descrizione Honda'),
  ('Kawasaki', 'https://example.com/kawasaki.jpg', 'Descrizione Kawasaki'),
  ('Suzuki', 'https://example.com/suzuki.jpg', 'Descrizione Suzuki'),
  ('Ducati', 'https://example.com/ducati.jpg', 'Descrizione Ducati'),
  ('BMW', 'https://example.com/bmw.jpg', 'Descrizione BMW'),
  ('Triumph', 'https://example.com/triumph.jpg', 'Descrizione Triumph');
