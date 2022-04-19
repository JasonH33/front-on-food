export type DisheType = {
  id: number;
  name: string;
  rate: string;
  reviews: string;
  picture: string;
  category: string;
  deliveryEstimated: string;
  city: string;
  tags:[
    {
      name: string;
    }
  ]
}