import React, { useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { assets } from '../assets';
import { useAppearance } from '../appearance';
import { PhotoTile } from '../FormControls';
import { validateHours } from '../domain';
import { Asset, BottomNav, Button, Categories, CategoryBadge, Dialog, Empty, HoursTable, IconButton, Label, Link, Page, PlaceCard, Section, Stars, Title } from '../components';
import { useStore } from '../store';
import { colors, fonts, shadow } from '../theme';
import type { RootStack } from '../types';

export function DetailScreen({ navigation, route }: NativeStackScreenProps<RootStack, 'Detail'>) {
  const { state, toggleFavorite } = useStore();
  const { palette } = useAppearance();
  const place = state.places.find(p => p.id === route.params.id);
  const [notice, setNotice] = useState('');
  const [showReviews, setShowReviews] = useState(false);
  const { width } = useWindowDimensions();
  const scale = Math.min(width, 430) / 430;
  if (!place) return <Page><Title>Lugar não encontrado</Title><Button title="EXPLORAR" onPress={() => navigation.navigate('Explore')} /></Page>;
  const reviews = state.reviews.filter(r => r.placeId === place.id);
  const favorite = state.favorites.includes(place.id);
  const contact = async (url: string) => { try { await Linking.openURL(url); } catch { setNotice('Não foi possível abrir este contato neste dispositivo.'); } };
  return <View style={{ flex: 1, backgroundColor: palette.canvas }}><ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
    <View style={{ height: 400 * scale, borderBottomLeftRadius: 38, borderBottomRightRadius: 38, overflow: 'hidden' }}><Image source={place.image.startsWith('file:') || place.image.startsWith('data:') ? { uri: place.image } : assets[place.image]} style={{ width: '100%', height: '100%' }} contentFit="cover" accessibilityLabel={place.name} /></View>
    <View style={{ position: 'absolute', top: 25, right: 15, gap: 15 }}><Pressable accessibilityRole="button" accessibilityLabel="Editar informações do lugar" onPress={() => navigation.navigate('MoreInfo', { id: place.id })} style={styles.round}><Asset name="8f521.svg" width={19.9} height={19.9005} /></Pressable><Pressable accessibilityRole="button" accessibilityLabel={favorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'} accessibilityState={{ selected: favorite }} onPress={() => toggleFavorite(place.id)} style={styles.round}><Asset name="5c9a7.svg" width={24} /><Label style={{ color: colors.blue, position: 'absolute', right: -2, bottom: -6 }}>{favorite ? '✓' : '+'}</Label></Pressable></View>
    <View style={{ paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', gap: 26, alignItems: 'center', marginTop: -28 }}><CategoryBadge large category={place.category} /><View style={{ flex: 1, paddingTop: 30 }}><Label accessibilityRole="header" style={{ fontFamily: fonts.bold, fontSize: 40, lineHeight: 46 }}>{place.name}</Label><View style={styles.row}><Stars large rating={place.rating} /><Label style={{ color: colors.blue }}>{place.rating}</Label></View></View></View>
      <Section title="Contatos:" /><View style={[styles.row, { gap: 15 }]}><IconButton name="a4972.svg" label="Contato no WhatsApp" onPress={() => setNotice('Contato demonstrativo: (17) 99999-0000.')} /><IconButton name="71455.svg" label="Perfil do Instagram" onPress={() => setNotice(`Perfil demonstrativo: ${place.instagram}`)} /><IconButton name="654d3.svg" label="Telefone do lugar" onPress={() => contact(`tel:${place.phone.replace(/\D/g, '')}`)} /></View>
      <Section title="Quanto você pagou?" /><PriceSelector value={place.price} />
      <Section title="Horário de Funcionamento" /><HoursTable hours={place.hours} />
      <Section title="Categorias:" /><Categories showAll={false} selected={place.categories} onSelect={() => navigation.navigate('Explore')} />
      <Section title="Outros locais próximos:" action="todos" onPress={() => navigation.navigate('Explore')} />
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 14, gap: 24 }}>{state.places.filter(p => p.id !== place.id && ['pastel', 'museu'].includes(p.id)).map(p => <PlaceCard key={p.id} small width={226} place={p} onPress={() => navigation.push('Detail', { id: p.id })} />)}</ScrollView>
    <View style={{ paddingHorizontal: 20 }}><Section title="Últimas Avaliações:" action="todos" onPress={() => setShowReviews(true)} />{reviews.slice(0, 2).map(review => <View key={review.id} style={[styles.review, { backgroundColor: palette.review }]}><View style={styles.row}><Asset name="955b6.svg" width={44} /><View><Label>{review.author}</Label><Stars rating={review.rating} /></View></View><Label style={{ marginTop: 18, fontSize: 12, lineHeight: 19 }}>{review.text}</Label>{review.image && <Image source={{ uri: review.image }} style={{ width: '100%', height: 160, borderRadius: 12, marginTop: 12 }} contentFit="cover" accessibilityLabel="Foto da avaliação" />}</View>)}{!reviews.length && <Empty>Este lugar ainda não recebeu avaliações.</Empty>}<Button title="AVALIAR LUGAR" style={{ marginTop: 16 }} onPress={() => navigation.navigate('Review', { id: place.id })} /></View>
  </ScrollView><BottomNav /><Dialog visible={!!notice} title="Informação" onClose={() => setNotice('')}><Label>{notice}</Label></Dialog><Dialog visible={showReviews} title="Avaliações" onClose={() => setShowReviews(false)}>{reviews.map(r => <View key={r.id} style={[styles.review, { backgroundColor: palette.review }]}><Label>{r.author}</Label><Stars rating={r.rating} /><Label>{r.text}</Label></View>)}{!reviews.length && <Empty>Nenhuma avaliação ainda.</Empty>}</Dialog></View>;
}

export function PriceSelector({ value, onChange }: { value: number; onChange?: (value: number) => void }) {
  const { palette } = useAppearance();
  return <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'space-between' }}>{['R$ 0-30', 'R$ 30-60', 'R$ 60+'].map((title, i) => <Pressable key={title} accessibilityRole="button" accessibilityState={{ selected: value === i, disabled: !onChange }} disabled={!onChange} onPress={() => onChange?.(i)} style={[styles.price, { backgroundColor: palette.field }, value === i && { backgroundColor: colors.blue }]}><Label style={{ fontFamily: fonts.bold, color: value === i ? '#fff' : '#555' }}>{title}</Label></Pressable>)}</View>;
}
export function MoreInfoScreen({ navigation, route }: NativeStackScreenProps<RootStack, 'MoreInfo'>) {
  const { state, updatePlace } = useStore();
  const original = state.places.find(p => p.id === route.params.id);
  const [draft, setDraft] = useState(original);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  if (!draft) return <Page><Title>Lugar não encontrado</Title></Page>;
  const submit = () => {
    const hoursError = validateHours(draft.hours);
    if (hoursError) { setError(hoursError); return; }
    if (!draft.categories.length) { setError('Selecione ao menos uma categoria.'); return; }
    updatePlace(draft); setSaved(true); setError('');
  };
  return <Page><Title style={{ marginBottom: 20 }}>Mais:</Title><Section title="Adicionar fotos" /><PhotoTile value={draft.image !== original?.image ? draft.image : undefined} onChange={image => setDraft({ ...draft, image: image ?? original!.image })} label="Adicionar foto do lugar" />
    <Section title="Quanto você pagou?" /><PriceSelector value={draft.price} onChange={price => setDraft({ ...draft, price })} />
    <Section title="Horário de Funcionamento" /><HoursTable hours={draft.hours} onChange={hours => setDraft({ ...draft, hours })} />
    <Section title="Categorias:" /><Categories selected={draft.categories} onSelect={category => { if (category === 'Todos') setDraft({ ...draft, categories: ['Parques', 'Restaurantes', 'Natureza', 'Esportes', 'Cultura'] }); else setDraft({ ...draft, categories: draft.categories.includes(category) ? draft.categories.filter(c => c !== category) : [...draft.categories, category] }); }} more={() => setDraft({ ...draft, categories: [...new Set([...draft.categories, 'Cultura' as const])] })} />
    {error ? <Label accessibilityRole="alert" style={{ color: '#b3261e', marginTop: 16 }}>{error}</Label> : null}<Button title="ENVIAR ALTERAÇÃO" style={{ marginTop: 26 }} onPress={submit} />
    <Dialog visible={saved} title="Alterações salvas" onClose={() => { setSaved(false); navigation.goBack(); }}><Label>As informações do lugar foram atualizadas neste dispositivo.</Label></Dialog>
  </Page>;
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  round: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', ...shadow },
  price: { minHeight: 49, paddingHorizontal: 18, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: colors.gray },
  review: { backgroundColor: colors.gray, borderRadius: 16, padding: 16, marginBottom: 16, ...shadow },
  photo: { height: 176, alignItems: 'center', justifyContent: 'center', borderRadius: 24, backgroundColor: '#fff', ...shadow },
});
