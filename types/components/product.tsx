export interface Iproduct {
  name: string;
  sale_price: number;
  image: string;
  _id: string;
  description: string;
  category: Icategory | null;
}

type Icategory = {
  name:string;
  icon :string;
}
