export interface product {
  name: string;
  sale_price: number;
  image: string;
  _id: string;
  description: string;
  category: category | null;
}

type category = {
  name:string;
  icon :string;
}
