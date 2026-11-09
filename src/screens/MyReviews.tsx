import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Asset, Empty, Label, Page, SearchField, Stars, Title } from '../components';
import { PlaceFilterMenu, placeSortOptions, type FilterAnchor } from '../PlaceFilterMenu';
import { assets } from '../assets';
import { useStore } from '../store';
import { useAppearance } from '../appearance';
import { selectReviews, type Sort } from '../domain';
import { fonts } from '../theme';
import type { Category, RootStack } from '../types';

export function MyReviewsScreen({ navigation }: NativeStackScreenProps<RootStack, 'MyReviews'>) {
  const { state } = useStore();
  const { palette } = useAppearance();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<Sort>('newest');
  const [category, setCategory] = useState<Category | 'Todos'>('Todos');
  const [menu, setMenu] = useState(false);
  const [anchor, setAnchor] = useState<FilterAnchor | null>(null);
  const trigger = useRef<View>(null);
  const option = placeSortOptions.find(s => s.value === sort)!;
  const reviews = selectReviews(state.reviews, state.places, query, category, sort);
  const close = () => { setMenu(false); requestAnimationFrame(() => trigger.current?.focus()); };
  return <View style={{ flex: 1 }}><View style={{ flex: 1, filter: menu ? 'blur(1px)' : undefined }}><Page active="user"><Title style={{ marginBottom: 32 }}>Minhas reviews</Title>
    <View style={styles.searchRow}><View style={{ flex: 1 }}><SearchField value={query} onChange={setQuery} /></View><Pressable ref={trigger} collapsable={false} accessibilityRole="button" accessibilityLabel="Ordenar minhas avaliações" accessibilityState={{ expanded: menu }} onPress={() => trigger.current?.measureInWindow((x, y, width, height) => { setAnchor({ x, y, width, height }); setMenu(true); })} style={styles.sort}><Label style={{ color: palette.accent, textDecorationLine: 'underline' }}>{option.title}</Label><Asset name={option.arrow} width={option.arrowWidth} height={5.7735} style={{ transform: [{ rotate: '-90deg' }] }} /></Pressable></View>
    <View style={{ gap: 25, marginTop: 20 }}>{reviews.map(review => {
      const place = state.places.find(p => p.id === review.placeId)!;
      return <Pressable key={review.id} accessibilityRole="button" accessibilityLabel={`Editar avaliação de ${place.name}, ${review.rating} estrelas`} onPress={() => navigation.navigate('Review', { id: place.id, reviewId: review.id })} style={[styles.card, { backgroundColor: palette.review }]}>
        <View style={styles.heading}><View style={styles.avatar}><Image source={assets['c3a50.png']} style={{ width: 56, height: 113, left: -9, top: -16 }} /></View><Label style={{ fontFamily: fonts.heavy, fontSize: 24, flex: 1 }}>{place.name}</Label></View>
        <Label style={{ fontSize: 12, lineHeight: 19, marginTop: 16 }}>{review.text}</Label>
        {review.image && <Image source={{ uri: review.image }} style={{ width: '100%', height: 120, borderRadius: 12, marginTop: 12 }} contentFit="cover" accessibilityLabel="Foto da avaliação" />}
        <View style={{ alignItems: 'flex-end', marginTop: 12 }}><Stars large rating={review.rating} /></View>
      </Pressable>;
    })}</View>{reviews.length === 0 && <Empty>{query || category !== 'Todos' ? 'Nenhuma avaliação corresponde à pesquisa e aos filtros.' : 'Você ainda não avaliou nenhum lugar. Explore os lugares e compartilhe sua experiência.'}</Empty>}
  </Page></View><PlaceFilterMenu visible={menu} anchor={anchor} sort={sort} category={category} onSort={setSort} onCategory={setCategory} onClose={close} /></View>;
}
const styles = StyleSheet.create({
  searchRow: { flexDirection: 'row', gap: 24, alignItems: 'center', marginBottom: 20 },
  sort: { flexDirection: 'row', gap: 5, alignItems: 'center', minHeight: 30 },
  card: { borderRadius: 16, padding: 16, minHeight: 180 },
  heading: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden' },
});
