export const EMPTY_MOTORS = {
    id: 0,
    birthDate: '',
    gender: '',
    firstName: '',
    hireDate: '',
    lastName: ''
  };

export interface Motors{
    id :number,
    marca_id :number,
    modello :string,
    prezzo: number,
    anno:number,
    cilindrata :number,
    descrizione :string,
    immagine_url :string,
}

export interface Motors {
    MOTORSs: Motors[]
}
  
export interface DataObject {
    _embedded: Motors,
    _links: Link,
    page: Page,
}
  
export interface Link {
    first: LinkPart,
    last: LinkPart,
    next: LinkPart,
    prev: LinkPart,
    self: LinkPart,
}
  
export interface LinkPart {
    href: String,
}
  
export interface Page {
    number: number,
    size: number,
    totalElements: number,
    totalPages: number,
}