export interface Car {
  id: string;
  name: string;
  quarter: string;
  year: number;
  img: string;
  type: string;
  hp: string;
}

export interface CarCategory {
  quarter: string;
  cars: Car[];
}
