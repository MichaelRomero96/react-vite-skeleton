interface IProduct {
  id: string;
  name: string;
  base_price: number;
  specifications: string;
  color: string;
  sale_price: number;
  discount: number;
  type: ProductType;
}

export enum ProductType {
  DiningRoom = 'Comedor',
  Other = 'Otro',
}

export interface IDiningRoomProduct extends IProduct {
  seats: string;
  finish: string;
  chairType: string;
  base: string;
  glass: string;
  upholstery: string;
}

export default IProduct;
