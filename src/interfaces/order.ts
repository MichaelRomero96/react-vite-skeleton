import { ICreateCustomer, ICustomer } from './customers';

interface IOrder {
  id: number;
  status: OrderStatus;
  created_at: Date;
  updated_at?: Date;
  commissionCost: number;
  deliver_cost: number;
  deliver_date: Date;
  customer_id: string;
  customer: ICustomer;
  deposit?: number;
  order_products: IOrderProduct[];
}

export enum OrderStatus {
  PENDING = 'Pendiente',
  DELIVERED = 'Entregado',
  CANCELLED = 'Cancelado',
}

export interface ICreateOrder {
  customer: ICreateCustomer;
  deliver_date: Date;
  deposit?: number;
  order_products: ICreateOrderProduct[];
}

export interface ICreateOrderProduct {
  id: number;
  name: string;
  color: string;
  quantity: number;
  specifications: string;
  price: number;
  supplier_id: number;
  supplier_items: ISupplierItem[];
}

interface IOrderProduct {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
  specifications: string;
  total: number;
  deposit: number;
  created_at: Date;
  product_id: number;
  sale_price: number;
  supplier_id: number;
  supplier_items: ISupplierItem[];
}
interface ISupplierItem {
  id: number;
  name: string;
  status: ISupplierItemStatus;
}

export enum ISupplierItemStatus {
  PENDING = 'Pendiente',
  BOUGHT = 'Comprado',
  IN_FACTORY = 'En fábrica',
}

export interface CreateOrderOptions {
  isNewCustomer?: boolean;
}

export default IOrder;
