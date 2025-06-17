
export interface DriverStanding {
  position: number;
  driverId: string;
  givenName: string;
  familyName: string;
  team: string;
  nationality: string;
  points: number;
  img: string;
  age: number;
  description: string;
}

export interface ChampionshipStandings {
  position: number;
  name: string;
  team: string;
  points: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  team: string;
}