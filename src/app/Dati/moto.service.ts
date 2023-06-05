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
    },
    {
      id:3,
      MarcaNome:'Yamaha ',
      Modello:'Yamaha MT-125 ', 
      Prezzo:5299, 
      Anno:2022, 
      Cilindrata:955,
      Descrizione:'Con il loro stile dinamico, la scocca essenziale e le prestazioni entusiasmanti, non sorprende che i modelli MT di Yamaha abbiano attirato tanti piloti nel Dark Side of Japan. Questa famiglia di moto è in continua evoluzione. La radicale MT-125 è pronta a garantire ancora più prestazioni, grinta e adrenalina nella classe 125.',
      Immagine: 'https://cdn-img.moto.it/images/26431908/1200x/yamaha-mt-125-2022-01.jpg'
    }
    ,{
      id:4,
      MarcaNome:'Yamaha', 
      Modello:'Yamaha XSR 700', 
      Prezzo:8499, 
      Anno:2022, 
      Cilindrata:700,
      Descrizione:'Una moto accessibile, piacevole sia per i piloti nuovi che per quelli più esperti.XSR700 è facile da manovrare in qualsiasi ambiente, dalle curve delle strade tortuose fino al traffico frenetico della città, ma in entrambi i casi ti divertirai moltissimo.',
      Immagine: 'https://cdn-img.moto.it/images/26760094/1200x/yamaha-xsr700-2022-04.jpg'
    }
    ,{
      id:5,
      MarcaNome:'Honda', 
      Modello:'CB 500 F', 
      Prezzo:6590, 
      Anno:2022, 
      Cilindrata:500,
      Descrizione:'La sigla è una tra le più storiche all interno della gamma Honda, e pressoché da sempre è sinonimo di moto bicilindrica semplice ed economica, capace di adattarsi a tutti, prima di tutto a chi si avvicina per la prima volta a una moto di media cilindrata. L ultima evoluzione ha reso più grintoso l aspetto, senza per questo renderla più impegnativa. L elemento centrale rimane il motore bicilindrico parallelo con distribuzione a otto valvole e raffreddamento a liquido, accreditato di una potenza di 48 CV (il limite massimo consentito per chi ha una patente A2) e una coppia di 43 Nm che assicura l elasticità e la rende gestibile con facilità. Le forme che in passato erano molto convenzionali sono oggi quelle di una naked piuttosto aggressiva, ma sempre con una sella vicina a terra e un manubrio in alluminio rialzato e largo quanto basta per renderla molto maneggevole, in velocità come in manovra. Le caratteristiche tecniche sono all insegna del classico, con telaio a diamante in acciaio, forcella telescopica da 41 mm, sospensione posteriore Pro-Link, entrambi regolabili e ruote da 17 pollici di diametro. Il tutto è completato da due freni a disco con ABS a due canali, e un peso limitato in 189 kg dichiarati con il pieno di carburante.',
      Immagine: 'https://cdn-img.moto.it/images/25583078/1200x/honda-cb500f-2022-01.jpg'
    }
    ,{
      id:6,
      MarcaNome:'Honda', 
      Modello:'CBR 500 R', 
      Prezzo:7290, 
      Anno:2022, 
      Cilindrata:471,
      Descrizione:'La novità dell ultima release (2021) è l introduzione  di una forcella Showa SFF-BP – cioè Big Pistons con funzioni separate – a steli rovesciati di 41 mm di diametro, abbinata a nuovi cerchi a razze sdoppiate in alluminio, più leggeri, con una riduzione delle masse non sospese che agevola il lavoro della sospensione; completano il ”pacchetto” due dischi freno anteriori di 296 mm di diametro e sulle due versioni naked e sportiva anche pinze Nissin ad attacco radiale.',
      Immagine: 'https://cdn-img.moto.it/images/22879846/1200x/honda-cbr500r-2021-01.jpg'
    }
    ,{
      
      id:7,
      MarcaNome:'Kawasaki', 
      Modello:'Kawasaki Ninja 1000 ZX-10R', 
      Prezzo:21590, 
      Anno:2023, 
      Cilindrata:998,
      Descrizione:'Puoi battere i tuoi avversari, ma c’è un’altra sfida che devi affrontare: quella con te stesso. Per chi come te è all altezza di qualsiasi sfida, abbiamo sviluppato la moto che ogni vero campione merita. Le Ninja ZX-10R & Ninja ZX-10RR hanno tutto ciò che serve per essere vincenti: un‘aerodinamica completamente rinnovata con alette integrate, piccoli fari a led, strumentazione a colori TFT e connettività smartphone, oltre a molti aggiornamenti provenienti dall’esperienza nel mondiale Superbike del Kawasaki Racing Team. Adesso che hai a disposizione la Ninja definitiva progettata per le gare, Sfida te stesso!',
      Immagine: 'https://cdn-img.moto.it/images/23703768/1200x/kawasaki-ninja-zx-10r-2021-9.jpg'
    },
    {
      id:8,
      MarcaNome: 'Kawasaki',
      Modello: 'Kawasaki Z 900',
      Prezzo: 10290,
      Anno: 2021,
      Cilindrata: 948,
      Descrizione: 'Z900 è stata creata per dominare la strada! Nuova inedita colorazione per il 2022. Confermate power modes, riding modes, traction control e fari full LED. La strumentazione TFT a colori inoltre permette di connettersi alla moto via Bluetooth con il proprio smartphone. La Z900 è disponibile in due versioni per il 2022, una a piena potenza da 125 CV (92,2 kW) e un modello dedicato ai possessori di patente A2 con 95 CV (70 kW).',
      Immagine: 'https://cdn-img.moto.it/images/23548040/1200x/kawasaki-z-900-2020-08.jpg'
    },
    {
      id:9,
      MarcaNome: 'KTM',
      Modello: 'KTM Duke 1290 R',
      Prezzo: 20950,
      Anno: 2023,
      Cilindrata: 1290,
      Descrizione: 'In cima alla catena alimentare delle hyper-naked, con la sua notevole e minacciosa collezione di specifiche altamente performanti per la ciclistica e il motore, oltre a elettronica e miglioramenti top di gamma per il pilota, la KTM 1290 SUPER DUKE R non ha bisogno di presentazioni. Ma gliene abbiamo preparata una lo stesso. Ecco la BEAST.',
      Immagine: 'https://immagini.insella.it/sites/default/files/primi_contatti_gallery/2013/10/ktm-1290-super-duke-r_25.jpg'
    },
    {
      id:10,
      MarcaNome: 'Suzuki',
      Modello: 'Suzuki GSX-S950',
      Prezzo: 10390,
      Anno: 2021,
      Cilindrata: 999,
      Descrizione: 'No, ad Hamamatsu non sono impazziti, anche se accanto alla GSX-S 1000 è spuntata una GSX-S 950. Che senso avrebbe realizzare una copia dell’ultima naked con solo 50 cc in meno? In realtà la sigla è solo un espediente che serve a evitare di sminuire con denominazioni tipo “basic” o “entry level” questa variante meno grintosa, ma anche più abbordabile della GSX-S1000, che si è subito fatta apprezzare per il favorevole rapporto tra qualità e prezzo',
      Immagine: 'https://cdn-img.moto.it/images/25122615/1200x/suzuki-gsx-s950-2021-13.jpg'
    },
    {
      id:11,
      MarcaNome: 'Suzuki',
      Modello: 'Suzuki RM-Z450',
      Prezzo: 8890,
      Anno: 2023,
      Cilindrata: 449,
      Descrizione: 'Nella sua essenza più pura, il motocross richiede una moto in grado di soddisfare tre aspetti fondamentali: correre, curvare e frenare, tutti meglio di qualunque altra concorrente. La RM-Z450 è stata progettata con grande attenzione al raggiungimento di questo equilibrio vincente e vanta già un patrimonio di 29 campionati mondiali e nazionali, tra cui cinque titoli AMA 450 Motocross e due AMA 450 Supercross. A questa storia costellata di successi si aggiungono un motore, un telaio ed una elettronica perfettamente bilanciati oltre ad un design straordinario. Il risultato? La RM-Z450 più potente, equilibrata e competitiva di sempre.',
      Immagine: 'https://cdn-img.moto.it/images/16632022/1200x/suzuki-rm-450-2019-02.jpg'
    },
    {
      id:12,
      MarcaNome: 'BMW',
      Modello: 'Bmw F 900 XR',
      Prezzo: 12250,
      Anno: 2020,
      Cilindrata: 895,
      Descrizione: 'XR significa sportività e prestazioni sulle lunghe distanze. In sella alla F 900 XR puoi inseguire ogni curva divertendoti. La posizione di guida eretta e rilassata e la protezione dal vento ti offrono tutta la comodità per rendere ogni tuo viaggio un esperienza indimenticabile. Grazie al ricco equipaggiamento, in sella alla F 900 XR sarai sempre pronto per affrontare giri più sportivi, viaggi e spostamenti in città.',
      Immagine: 'https://storage.edidomus.it/dueruote/nuovo/850/LAT1586861752476.jpg'
    },
    {
      id:13,
      MarcaNome: 'BMW',
      Modello: 'Bmw C 400 GT',
      Prezzo: 8600,
      Anno: 2021,
      Cilindrata: 350,
      Descrizione: 'Con il BMW C 400 GT puoi esplorare la città e superare i suoi confini in pieno comfort: sali in sella, seleziona la tua musica preferita e lasciati guidare nel percorso. Il C 400 GT è agile, dinamico e tecnologico: grazie al Ride By Wire e a optional come la BMW Motorrad Connectivity, puoi arrivare a destinazione in tutta comodità e sicurezza.',
      Immagine: 'https://cdn-img.moto.it/images/24535928/1000x/bmw-c-400-gt-2021-01.jpg'
    },
    {
      id:14,
      MarcaNome: 'Triumph',
      Modello: 'Triumph Bonneville Bobber 1200',
      Prezzo: 15895,
      Anno: 2021,
      Cilindrata: 1200,
      Descrizione: 'La Bobber è una delle moto più affascinanti. Ora il suo look muscoloso e la sua guida molto apprezzata si rinnovano. Cromature realizzate a mano e colorazione Jet Black: la bellezza audace della Bobber raggiunge un nuovo livello grazie a un contrasto mai visto prima.',
      Immagine: 'https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/modern-classics/my21/dx4%20bonneville%20bobber/family%20page%20images/bonneville-bobber-family-dual-image-block-1-630x788.jpg'
    },
    {
      id:15,
      MarcaNome: 'Triumph',
      Modello: 'Triumph Tiger 660 Sport',
      Prezzo: 9495,
      Anno: 2022,
      Cilindrata: 660,
      Descrizione: 'Il motore a tre cilindri garantisce una potenza e una dotazione al top del segmento per una guida comoda e versatile a un prezzo contenuto.',
      Immagine: 'https://storage.edidomus.it/dueruote/nuovo/850/00056015.JPG'
    },
    {
      id:16,
      MarcaNome: 'Husqvarna',
      Modello: 'Husqvarna 701 Enduro',
      Prezzo: 12450,
      Anno: 2022,
      Cilindrata: 693,
      Descrizione: 'La versatile 701 Enduro non conosce confini: è incredibilmente efficace negli ambienti urbani e dà il meglio di sé in offroad. Ispirata alle moto del marchio che hanno vinto il campionato mondiale Enduro e prodotta con tecniche ingegneristiche avanzate, arricchite da un elettronica allo stato dell arte e da numerosi ausili per il pilota, la 701 Enduro offre performance uniche.',
      Immagine: 'https://www.mototecnicaonline.net/wp-content/uploads/2023/03/PHO_BIKE_90_RE_MY23-HQV-701-Enduro-90-right_SALL_AEPI_V1.png'
    },
    {
      id:17,
      MarcaNome: 'Husqvarna',
      Modello: 'Husqvarna Svartpilen 125',
      Prezzo: 5610,
      Anno: 2021,
      Cilindrata: 125,
      Descrizione: 'La ottavo di litro si distingue per un look del tutto personale che mischia elementi moderni con dettami classici. Guidabile a 16 anni con patente A1, ecco come è fatta, come va e quanto costa la naked entry level della gamma Svartpilen',
      Immagine: 'https://cdn-img.moto.it/images/26959454/1000x/svartpilen-125-2022-01.jpg'
    },
    {
      id:18,
      MarcaNome: 'Aprilia',
      Modello: 'Aprilia RS 125',
      Prezzo: 5499,
      Anno: 2021,
      Cilindrata: 125,
      Descrizione: 'La moto simbolo della sportività di Aprilia si rinnova nelle forme e nella tecnologia, senza perdere quel feeling adrenalinico che ha scritto la storia del motociclismo. Aprilia RS 125 è oggi più che mai un concentrato di stile e potenza, un modello adatto anche ai più giovani grazie alla sua leggerezza e praticità, e pronto a far battere persino i cuori dei piloti più esperti grazie a un motore sempre più generoso e componenti sempre più avanzati.',
      Immagine: 'https://images.piaggio.com/aprilia/vehicles/ap6112900ebp00/ap6112900ebp06/ap6112900ebp06-01-s.png'
    },
    {
      id:19,
      MarcaNome: 'Aprilia',
      Modello: 'Aprilia SX 125',
      Prezzo: 4199,
      Anno: 2021,
      Cilindrata: 125,
      Descrizione: 'Aprilia SX 125 vanta contenuti sportivi al top, alte prestazioni e un design fortemente distintivo. L unica moto in questo segmento a vantare l’impianto frenante con ABS solo sulla ruota anteriore. Erede della fortunata storia di Aprilia nelle competizioni off-road, la rinnovata SX 125 vanta un raffinato design, prestazioni importanti ed una tecnologia avanzata che la include tra le moto destinate a chi vuole distinguersi fin dal debutto in due ruote. La nuova SX 125 è nata per soddisfare i piloti più giovani che cercano una moto con caratteristiche racing in termini di stile, tecnologia e prestazioni.',
      Immagine: 'https://images.piaggio.com/aprilia/vehicles/ap6161s00ecn00/ap6161s00ecnb6/ap6161s00ecnb6-01-s.png'
    },
    {
      id:20,
      MarcaNome:'Fantic Motor',
      Modello:'Fantic Motor Caballero 125 Rally',
      Prezzo:5790,
      Anno:2022,
      Cilindrata:125,
      Descrizione:'Sono due le versioni disponibili del Caballero 125 di Fantic Motor: Flat Track e Scrambler. Entrambe hanno motore monocilindrico Minarelli da 15 CV raffreddato a liquido, un robusto telaio monotrave in acciaio con piastre laterali in alluminio, forcella a steli rovesciati d 41 mm e monoammortizzatore regolabile nel precarico. Le differenze sono solo nell’aspetto e nelle ruote. Davanti il cerchio da 19 pollici è condiviso, ma cambia la gomma: sulla Flat Track è più larga e stradale e sulla Scrambler più stretta e tassellata. Dietro, invece, il cerchio è da 19 pollici sulla Flat, mentre la Scrambler ce l’ha da 17 pollici. Buone le finiture e la dotazione di serie che prevede tra l’altro fari full led, impianto di scarico in acciaio inox, dischi freno a margherita con pinza radiale e persino l’ABS (disinseribile) che non sarebbe obbligatorio su questa cilindrata.',
      Immagine:'https://mabomotor.it/7786/fantic-caballero-125-rally.jpg',
    },
  {
    id:21,
    MarcaNome:'Fantic Motor',
    Modello:'Fantic Motor XEF 250 Enduro 4T',
    Prezzo:9990,
    Anno:2023,
    Cilindrata:250,
    Descrizione:'Fantic XEF 250 Trail Enduro è il connubio perfetto tra potenza e facilità di guida. L’avanzata tecnologia e la continua ricerca al miglioramento, la portano ad essere ideale per percorrere gli sterrati più ostici, ma vi permetterà tuttavia di guidare sereni per lunghi passi in mezzo alla natura. Non avrete più bisogno di numerevoli mezzi di trasporto per raggiungere le mete che più vi intrigano, il gruppo termico è infatti progettato per ridurre al minimo gli interventi di manutenzione e garantirvi un mezzo capace di portarvi ovunque.',
    Immagine:'https://cdn-img.moto.it/images/29295076/1200x/fanticxef250-2023.jpg'
  }
  ];
}
