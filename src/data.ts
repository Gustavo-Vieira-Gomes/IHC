import type { Hours, Place, Review, User } from './types';
export const defaultHours = (): Hours => ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, i) => ({ day, open: i !== 6, from: '9:00', until: '18:00' }));
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,';
const base = { description, rating: 4.5, price: 1, phone: '(17) 99999-0000', instagram: '@explorar', mine: true };
export const initialPlaces: Place[] = [
  { ...base, id: 'ibirapuera', name: 'Parque Ibirapuera', category: 'Natureza', categories: ['Natureza', 'Esportes'], image: 'b890a.png', hours: defaultHours(), createdAt: 6 },
  { ...base, id: 'vitinho', name: 'Vitinho Park', category: 'Parques', categories: ['Parques'], image: 'f120c.png', hours: defaultHours(), createdAt: 5 },
  { ...base, id: 'pao-de-acucar', name: 'Pão de Açúcar', category: 'Cultura', categories: ['Natureza', 'Cultura'], image: '8711b.png', hours: defaultHours(), createdAt: 4 },
  { ...base, id: 'lanche', name: 'Lanche Gostoso', category: 'Restaurantes', categories: ['Restaurantes'], image: 'f1c86.png', hours: defaultHours(), createdAt: 3 },
  { ...base, id: 'pastel', name: 'Pastel Gostosão', category: 'Restaurantes', categories: ['Restaurantes'], image: 'f1c86.png', hours: defaultHours(), createdAt: 2 },
  { ...base, id: 'museu', name: 'Museu de Vassouras', category: 'Cultura', categories: ['Cultura'], image: 'b49ac.png', hours: defaultHours(), createdAt: 1 },
  { ...base, id: 'kartodromo', name: 'Kartódromo', category: 'Natureza', categories: ['Natureza', 'Esportes', 'Parques'], image: '436c8.png', hours: defaultHours(), mine: false, createdAt: 0 },
];
export const initialReviews: Review[] = [
  { id: 'review-1', placeId: 'ibirapuera', author: 'João Pedro Neves', rating: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,', mine: true },
  { id: 'review-2', placeId: 'ibirapuera', author: 'João Pedro Neves', rating: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,', mine: true },
  { id: 'review-3', placeId: 'kartodromo', author: '@User1', rating: 4.5, text: description, mine: false },
  { id: 'review-4', placeId: 'kartodromo', author: '@User2', rating: 4.5, text: description, mine: false },
];
export const initialUser: User = {
  name: 'João Pedro Neves', location: 'São José do Rio Preto, Brasil', age: '22 anos',
  instagram: '@jpneves', bio: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. “',
};
