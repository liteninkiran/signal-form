export interface Item {
  product: string;
  quantity: number;
}

export interface OrderFormModel {
  customerName: string;
  items: Item[];
}
