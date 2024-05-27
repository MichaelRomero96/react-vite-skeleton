import { ISupplierItemStatus } from './order';

export interface Supplier {
  id: number;
  name: string;
  code: string;
  items: SupplierItem[];
}

export interface SupplierItem {
  id: number;
  name: string;
}

export interface SupplierItemWithStatus extends SupplierItem {
  status: ISupplierItemStatus;
}
