export type Category = 'Natureza' | 'Parques' | 'Restaurantes' | 'Esportes' | 'Cultura';
export type Hours = { day: string; open: boolean; from: string; until: string }[];
export type Place = {
  id: string; name: string; description: string; category: Category; categories: Category[];
  image: string; rating: number; price: number; hours: Hours; mine: boolean;
  phone: string; instagram: string; createdAt: number;
};
export type Review = { id: string; placeId: string; author: string; rating: number; text: string; mine: boolean; createdAt?: number; image?: string };
export type Preferences = {
  appearance: 'light' | 'dark' | 'system'; textSize: 'standard' | 'medium' | 'large';
  highContrast: boolean; notifications: boolean; location: boolean;
};
export type User = { name: string; location: string; age: string; instagram: string; bio: string };
export type RootStack = {
  Welcome: undefined; Login: undefined; Register: undefined; Home: undefined; Explore: undefined;
  Detail: { id: string }; Profile: undefined; MyPoints: undefined; Favorites: undefined;
  MoreInfo: { id: string }; AddPlace: undefined; Review: { id: string; reviewId?: string };
  MyReviews: undefined; Settings: undefined;
};
