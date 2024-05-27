export interface ICustomer {
  id: string;
  created_at: Date;
  first_name: string;
  last_name: string;
  document_id: string;
  email: string;
  phone_number: string;
  address: {
    neighborhood: string;
    typeStreet: StreetType;
    street: string;
    numberStreet?: number;
    floor?: string;
    contactPhoneNumber: string;
  };
}

export enum StreetType {
  CAREER_AVENUE = 'Avenida Carrera',
  STREET = 'Calle',
  CAREER = 'Carrera',
  AVENUE = 'Avenida',
  CIRCULAR = 'Circular',
  ENCIRCLE = 'Circunvalar',
  DIAGONAL = 'Diagonal',
  SQUARE = 'Manzana',
  TRANSVERSAL = 'Transversal',
  VIA = 'Vía',
}

export interface ICreateCustomer {
  id?: number;
  first_name: string;
  last_name: string;
  document_id: string;
  email: string;
  phone_number: string;
  address: string;
}
