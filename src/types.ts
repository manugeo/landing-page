export interface Market {
  name: string;
  id: number;
  rating: string;
  features: Feature[]
}

export interface Feature {
  name: string;
  id: number;
  status: boolean;
}