import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  constructor() { }
  Moto = [
    {
      id:0,
      MarcaNome:'Ducati', 
      Modello:'Ducati Panigale V2', 
      Prezzo:19690, 
      Anno:2022, 
      Cilindrata:955,
      Descrizione:'La Panigale bicilindrica si rinnova profondamente: cambia nome, diventando Panigale V2, guadagna un’estetica completamente nuova e un’elettronica raffinata grazie all’utilizzo della Piattaforma Inerziale e diventa ancora più performante e sicura nell’uso sportivo, quanto sfruttabile e godibile per l’utilizzo stradale, grazie a una sella pilota più confortevole e al setup rivisto delle sospensioni. Il suo nome comunica agli amanti dei bicilindrici di Borgo Panigale che il modello è spinto dal Superquadro da 955 cm³.',
      Immagine: 'https://cdn-img.moto.it/images/20522516/1200x/ducati-panigale-v2-01.jpg'
    },
    {
      id:1,
      MarcaNome:'Ducati', 
      Modello:'Hypermotard 950', 
      Prezzo:14490, 
      Anno:2022, 
      Cilindrata:950,
      Descrizione:'Il termine supermotard non fu stato giudicato sufficiente da Ducati per definire quella moto presentata a Eicma 2005 ed eletta Best in Show dal pubblico. Lo stile era quello, manubrio alto, sella e serbatoio stretti e una guida “ignorante” favorita dal motore bicilindrico desmodromico decisamente esuberante. Negli anni il concetto di fun bike totale si è evoluto, per tornare più vicino alle origini con l ultima edizione presentata a fine 2018, equipaggiata con un motore della serie Testastretta 11° da 114 CV. La Hypermotard rimane una moto concepita per il divertimento, con un peso contenuto e con tre diversi riding mode, per selezionare quello più adatto a ogni momento, visto che non sempre c è la necessità di aggredire la strada. Oltre alla versione standard Ducati propone la SP, alleggerita di 3 kg e con sospensioni Öhlins regolabili sulla quale sono montati tra l altro il cambio Ducati Quick Shift (DQS) up/down, cerchi forgiati Marchesin e vari componenti in fibra di carbonio.',
      Immagine: 'https://www.ducatimilano.it/wp-content/uploads/2018/11/Hypermotard-950-MY19-Studio-04-Gallery-906x510.jpg'
    }
  ]
  Marca = [
    {
      Nome:'Yamaha', 
      Immagine:'https://upload.wikimedia.org/wikipedia/commons/c/c3/Yamaha-Logo.png'
    }
  ]

}
