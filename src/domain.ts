import type { Category, Place } from './types';
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
