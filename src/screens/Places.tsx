import React, { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { assets } from '../assets';
import { useAppearance } from '../appearance';
import { Asset, BottomNav, Categories, Dialog, Empty, IconButton, Label, Page, PlaceCard, SearchField, Title } from '../components';
import { PlaceFilterMenu, placeSortOptions, type FilterAnchor } from '../PlaceFilterMenu';
import { useStore } from '../store';
import { colors, fonts } from '../theme';
import { selectPlaces, type Sort } from '../domain';
import type { Category, RootStack } from '../types';

export function HomeScreen({ navigation }: NativeStackScreenProps<RootStack, 'Home'>) {
  const { state } = useStore();
  const [favorites, setFavorites] = useState(false);
  const { palette } = useAppearance();
  const { width } = useWindowDimensions();
  const scale = Math.min(width, 430) / 430;
  const recommended = state.places.filter(p => favorites ? state.favorites.includes(p.id) : ['lanche', 'pastel'].includes(p.id));
  return <View style={{ flex: 1, backgroundColor: palette.canvas }}><ScrollView contentContainerStyle={{ paddingBottom: 126, minHeight: 932 * scale }}>
    <Image source={assets['02333.png']} style={{ position: 'absolute', width: 494.694 * scale, height: 770.743 * scale, left: -36.347 * scale, top: -82 * scale }} />
    <View style={{ height: 575 * scale }}>
      <View style={{ position: 'absolute', right: 20, top: 23 }}><IconButton name="83e9e.svg" size={60} label="Adicionar ponto de interesse" onPress={() => navigation.navigate('AddPlace')} /></View>
      <Pressable accessibilityRole="button" accessibilityLabel="Conhecer Kartódromo no mapa" onPress={() => navigation.navigate('Detail', { id: 'kartodromo' })} style={{ position: 'absolute', left: '43%', top: '67%', width: 80, height: 100 }} />
      <Pressable accessibilityRole="button" accessibilityLabel="Conhecer Lanche Gostoso no mapa" onPress={() => navigation.navigate('Detail', { id: 'lanche' })} style={{ position: 'absolute', left: 5, top: '34%', width: 75, height: 90 }} />
      <Pressable accessibilityRole="button" accessibilityLabel="Conhecer Parque Ibirapuera no mapa" onPress={() => navigation.navigate('Detail', { id: 'ibirapuera' })} style={{ position: 'absolute', right: 10, top: '52%', width: 80, height: 90 }} />
    </View>
    <View style={[styles.tabs, { backgroundColor: palette.surface }]}>{['Mais próximos', 'Favoritos'].map((title, index) => <Pressable key={title} accessibilityRole="button" accessibilityState={{ selected: favorites === !!index }} onPress={() => setFavorites(!!index)} style={[styles.tab, (favorites === !!index) && { backgroundColor: colors.blue }]}><Label style={{ fontFamily: fonts.inter, fontSize: 12, color: favorites === !!index ? '#fff' : colors.blue }}>{title}</Label></Pressable>)}</View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 21, paddingTop: 14, gap: 24 }}>{recommended.map(place => <PlaceCard key={place.id} small width={183} place={place} onPress={() => navigation.navigate('Detail', { id: place.id })} />)}{recommended.length === 0 && <Empty>Você ainda não tem lugares favoritos.</Empty>}</ScrollView>
  </ScrollView><BottomNav active="home" /></View>;
}

export function ExploreScreen({ navigation }: NativeStackScreenProps<RootStack, 'Explore'>) {
  const { state } = useStore();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | 'Todos'>('Todos');
  const [more, setMore] = useState(false);
  const places = selectPlaces(state.places, query, category);
  return <Page active="search"><Title>Explorar</Title><SearchField value={query} onChange={setQuery} expanded /><View style={{ marginTop: -10 }}><Categories selected={category} onSelect={setCategory} more={() => setMore(true)} /></View>
    <Label accessibilityRole="header" style={{ fontFamily: fonts.heavy, fontSize: 24, marginTop: 20, marginBottom: 10 }}>Lugares para conhecer</Label>
    <View style={{ gap: 25 }}>{places.map(place => <PlaceCard key={place.id} place={place} onPress={() => navigation.navigate('Detail', { id: place.id })} />)}</View>
    {!places.length && <Empty>Nenhum lugar encontrado. Experimente outra pesquisa ou categoria.</Empty>}
    <Dialog visible={more} title="Mais categorias" onClose={() => setMore(false)}><Categories showAll={false} selected={category} onSelect={value => { setCategory(value); setMore(false); }} /></Dialog>
  </Page>;
}

export function PlaceListScreen({ navigation, route }: NativeStackScreenProps<RootStack, 'MyPoints' | 'Favorites'>) {
  const { state } = useStore();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<Sort>('newest');
  const [category, setCategory] = useState<Category | 'Todos'>('Todos');
  const [menu, setMenu] = useState(false);
  const [anchor, setAnchor] = useState<FilterAnchor | null>(null);
  const trigger = useRef<View>(null);
  const selectedSort = placeSortOptions.find(option => option.value === sort)!;
  const openMenu = () => trigger.current?.measureInWindow((x, y, width, height) => { setAnchor({ x, y, width, height }); setMenu(true); });
  const closeMenu = () => { setMenu(false); requestAnimationFrame(() => trigger.current?.focus()); };
  const favorites = route.name === 'Favorites';
  const places = selectPlaces(state.places.filter(p => favorites ? state.favorites.includes(p.id) : p.mine), query, category, sort);
  return <View style={{ flex: 1 }}><View style={{ flex: 1, filter: menu ? 'blur(1px)' : undefined }}><Page><Title>{favorites ? 'Meus favoritos' : 'Meus pontos'}</Title><View style={{ flexDirection: 'row', gap: 24, alignItems: 'center', marginBottom: 20 }}><View style={{ flex: 1 }}><SearchField value={query} onChange={setQuery} /></View><Pressable ref={trigger} collapsable={false} accessibilityRole="button" accessibilityLabel={`Ordenar e filtrar: ${selectedSort.title}${category !== 'Todos' ? `, ${category}` : ''}`} accessibilityState={{ expanded: menu }} onPress={openMenu} style={styles.sortTrigger}><Label style={styles.sortTitle}>{selectedSort.title}</Label><Asset name={selectedSort.arrow} width={selectedSort.arrowWidth} height={5.7735} style={{ transform: [{ rotate: '-90deg' }] }} /></Pressable></View>
    <View style={{ gap: 25 }}>{places.map(place => <PlaceCard key={place.id} place={place} onPress={() => navigation.navigate('Detail', { id: place.id })} />)}</View>
    {!places.length && <Empty>{query || category !== 'Todos' ? 'Nenhum lugar corresponde aos filtros.' : favorites ? 'Seus lugares favoritos aparecerão aqui. Toque na estrela de um lugar para salvar.' : 'Seus pontos de interesse aparecerão aqui.'}</Empty>}
  </Page></View><PlaceFilterMenu visible={menu} anchor={anchor} sort={sort} category={category} onSort={setSort} onCategory={setCategory} onClose={closeMenu} /></View>;
}
const styles = StyleSheet.create({
  tabs: { flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 21, borderWidth: 1, borderColor: colors.blue, borderRadius: 16, overflow: 'hidden', backgroundColor: '#fff' },
  tab: { padding: 10, minHeight: 36, justifyContent: 'center' },
  sortTrigger: { flexDirection: 'row', alignItems: 'center', gap: 5, minHeight: 26 },
  sortTitle: { fontFamily: fonts.medium, color: colors.blue, textDecorationLine: 'underline' },
});
