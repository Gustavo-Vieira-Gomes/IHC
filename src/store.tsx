import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialPlaces, initialReviews, initialUser } from './data';
import type { Place, Preferences, Review, User } from './types';
import { defaultPreferences, restorePreferences } from './preferences';
import { averageRating } from './domain';

type State = { places: Place[]; reviews: Review[]; favorites: string[]; user: User; signedIn: boolean; remember: boolean; preferences: Preferences };
const seed: State = { places: initialPlaces, reviews: initialReviews, favorites: ['ibirapuera', 'vitinho', 'pao-de-acucar', 'lanche', 'pastel'], user: initialUser, signedIn: false, remember: false, preferences: defaultPreferences };
const KEY = 'ihc-explorar-v1';
const Store = createContext<{
  state: State; ready: boolean; storageError: string;
  signIn: (name?: string, remember?: boolean) => void; signOut: () => void;
  toggleFavorite: (id: string) => void; updatePlace: (place: Place) => void;
  updateUser: (user: User) => void;
  addPlace: (place: Omit<Place, 'id' | 'createdAt' | 'mine'>) => string;
  saveReview: (review: { placeId: string; rating: number; text: string; image?: string; id?: string }) => void;
  updatePreferences: (preferences: Partial<Preferences>) => void;
} | null>(null);

export function StoreProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = useState<State>(seed);
  const [ready, setReady] = useState(false);
  const [storageError, setStorageError] = useState('');
  useEffect(() => {
    let alive = true;
    AsyncStorage.getItem(KEY).then(raw => {
      if (!raw || !alive) return;
      const saved = JSON.parse(raw) as State;
      if (Array.isArray(saved.places) && Array.isArray(saved.favorites) && Array.isArray(saved.reviews) && typeof saved.user?.name === 'string') setState({ ...seed, ...saved, preferences: restorePreferences(saved.preferences) });
    }).catch(() => { if (alive) setStorageError('Não foi possível recuperar os dados salvos.'); })
      .finally(() => { if (alive) setReady(true); });
    return () => { alive = false; };
  }, []);
  useEffect(() => {
    if (ready) AsyncStorage.setItem(KEY, JSON.stringify({ ...state, signedIn: state.signedIn && state.remember })).catch(() => setStorageError('Suas alterações estão disponíveis nesta sessão, mas não puderam ser salvas.'));
  }, [state, ready]);
  return <Store.Provider value={{ state, ready, storageError,
    signIn: (name, remember = false) => setState(s => ({ ...s, signedIn: true, remember, user: name ? { ...s.user, name } : s.user })),
    signOut: () => setState(s => ({ ...s, signedIn: false })),
    toggleFavorite: id => setState(s => ({ ...s, favorites: s.favorites.includes(id) ? s.favorites.filter(x => x !== id) : [...s.favorites, id] })),
    updatePlace: place => setState(s => ({ ...s, places: s.places.map(p => p.id === place.id ? place : p) })),
    updateUser: user => setState(s => ({ ...s, user, reviews: s.reviews.map(r => r.mine ? { ...r, author: user.name } : r) })),
    addPlace: place => {
      const id = `place-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      setState(s => ({ ...s, places: [{ ...place, id, mine: true, createdAt: Date.now() }, ...s.places] }));
      return id;
    },
    saveReview: input => {
      const id = input.id ?? `review-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      setState(s => {
        if (!s.places.some(p => p.id === input.placeId)) return s;
        const previous = input.id ? s.reviews.find(r => r.id === input.id && r.mine && r.placeId === input.placeId) : undefined;
        if (input.id && !previous) return s;
        const review: Review = { id, placeId: input.placeId, author: s.user.name, mine: true, rating: input.rating, text: input.text.trim(), image: input.image, createdAt: previous?.createdAt ?? Date.now() };
        const reviews = previous ? s.reviews.map(r => r.id === id ? review : r) : [review, ...s.reviews];
        return { ...s, reviews, places: s.places.map(p => p.id === input.placeId ? { ...p, rating: averageRating(reviews.filter(r => r.placeId === p.id)) } : p) };
      });
    },
    updatePreferences: preferences => setState(s => ({ ...s, preferences: restorePreferences({ ...s.preferences, ...preferences }) })),
  }}>{children}</Store.Provider>;
}
export function useStore() {
  const value = useContext(Store);
  if (!value) throw new Error('StoreProvider ausente');
  return value;
}
