import type { Category, Hours, Place, Review } from './types';
export type Sort = 'newest' | 'oldest' | 'az' | 'za';
export const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export function selectPlaces(places: Place[], query: string, category: Category | 'Todos', sort: Sort = 'newest') {
  return places.filter(place => normalize(place.name).includes(normalize(query)) &&
    (category === 'Todos' || place.categories.includes(category)))
    .sort((a, b) => sort === 'az' ? a.name.localeCompare(b.name, 'pt-BR') : sort === 'za' ? b.name.localeCompare(a.name, 'pt-BR') : sort === 'oldest' ? a.createdAt - b.createdAt : b.createdAt - a.createdAt);
}
export function validateAuth(username: string, password: string, confirmation?: string, terms?: boolean) {
  if (!username.trim()) return 'Informe seu usuário ou email.';
  if (!password) return 'Informe sua senha.';
  if (confirmation !== undefined) {
    if (password.length < 6) return 'Use uma senha com pelo menos 6 caracteres.';
    if (password !== confirmation) return 'As senhas não conferem.';
    if (!terms) return 'Aceite os termos e condições para continuar.';
  }
  return '';
}
export function validateHours(hours: Hours) {
  return hours.some(hour => hour.open && (!/^([01]?\d|2[0-3]):[0-5]\d$/.test(hour.from) || !/^([01]?\d|2[0-3]):[0-5]\d$/.test(hour.until))) ? 'Informe os horários no formato 9:00 ou 18:00.' : '';
}
export function validatePlace(description: string, hours: Hours, categories: Category[]) {
  if (!description.trim()) return 'Descreva o lugar que você quer adicionar.';
  if (!categories.length) return 'Selecione ao menos uma categoria.';
  return validateHours(hours);
}
export function validateReview(rating: number, text: string) {
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return 'Escolha de 1 a 5 estrelas.';
  if (!text.trim()) return 'Conte como foi sua experiência.';
  return '';
}
export function averageRating(reviews: Pick<Review, 'rating'>[]) {
  return reviews.length ? Math.round(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length * 10) / 10 : 0;
}
export function selectReviews(reviews: Review[], places: Place[], query: string, category: Category | 'Todos', sort: Sort = 'newest') {
  const byId = new Map(places.map(place => [place.id, place]));
  return reviews.filter(review => {
    const place = byId.get(review.placeId);
    return review.mine && !!place && (category === 'Todos' || place.categories.includes(category)) && normalize(`${place.name} ${review.text}`).includes(normalize(query));
  }).sort((a, b) => sort === 'az' ? byId.get(a.placeId)!.name.localeCompare(byId.get(b.placeId)!.name, 'pt-BR') : sort === 'za' ? byId.get(b.placeId)!.name.localeCompare(byId.get(a.placeId)!.name, 'pt-BR') : sort === 'oldest' ? (a.createdAt ?? 0) - (b.createdAt ?? 0) : (b.createdAt ?? 0) - (a.createdAt ?? 0));
}
