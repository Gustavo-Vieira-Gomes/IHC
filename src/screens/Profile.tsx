import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { assets } from '../assets';
import { Asset, BottomNav, Button, Dialog, Field, Label, Link, PlaceCard, Section, Stars } from '../components';
import { useStore } from '../store';
import { colors, fonts } from '../theme';
import type { RootStack } from '../types';

export function ProfileScreen({ navigation }: NativeStackScreenProps<RootStack, 'Profile'>) {
  const { state, updateUser, signOut } = useStore();
  const [edit, setEdit] = useState(false);
  const [draft, setDraft] = useState(state.user);
  const [error, setError] = useState('');
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const reviews = state.reviews.filter(r => r.mine);
  const save = () => {
    if (!draft.name.trim()) { setError('Informe seu nome.'); return; }
    updateUser({ ...draft, name: draft.name.trim() }); setEdit(false); setError('');
  };
  return <View style={{ flex: 1, backgroundColor: '#fff' }}><ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
    <LinearGradient colors={[colors.blueEnd, colors.blue]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ height: 120 }} />
    <View style={{ backgroundColor: '#fff', marginTop: -47, borderTopLeftRadius: 210, paddingHorizontal: 20 }}>
      <View style={styles.hero}>
        <View style={styles.avatar}><Image source={assets['c3a50.png']} style={{ width: 252, height: 504, position: 'absolute', left: -41, top: -73 }} contentFit="cover" accessibilityLabel="Foto de João Pedro Neves" /></View>
        <Pressable accessibilityRole="button" accessibilityLabel="Editar meu perfil" onPress={() => { setDraft(state.user); setEdit(true); }} style={{ position: 'absolute', left: 10, top: 114 }}><Asset name="d16c5.svg" width={44} /></Pressable>
        <View style={{ flex: 1, marginTop: 42, alignItems: 'flex-end' }}><Label numberOfLines={2} style={{ fontFamily: fonts.heavy, fontSize: 24 }}>{state.user.name}</Label><View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 10 }}><Label style={{ color: colors.blue, fontSize: 24, fontFamily: fonts.medium }}>5.0</Label><Stars rating={5} large /></View><Button title="Favoritos ♥" onPress={() => navigation.navigate('Favorites')} style={{ alignSelf: 'stretch', marginLeft: 16 }} /></View>
      </View>
      <View style={styles.bio}><Label style={{ fontFamily: fonts.serif, fontSize: 12 }}>{state.user.bio}</Label></View>
      <View style={{ gap: 8, marginTop: 14, marginBottom: 14 }}><View style={styles.row}><Label style={{ color: colors.blue, fontSize: 24 }}>●</Label><Label style={{ fontSize: 20 }}>{state.user.location}</Label></View><View style={styles.row}><Asset name="21f10.svg" width={24} /><Label style={{ fontSize: 20 }}>{state.user.age}</Label></View><View style={styles.row}><Asset name="69987.svg" width={24} /><Label style={{ fontSize: 20 }}>{state.user.instagram}</Label></View></View>
      <Section title="Minhas avaliações:" action="todos" onPress={() => setReviewsOpen(true)} />
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 22 }}>{reviews.map(review => <Pressable key={review.id} accessibilityRole="button" accessibilityLabel={`Avaliação de ${state.places.find(p => p.id === review.placeId)?.name}`} onPress={() => navigation.navigate('Detail', { id: review.placeId })} style={styles.review}>
      <View style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}><View style={{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden' }}><Image source={assets['c3a50.png']} style={{ width: 56, height: 113, left: -9, top: -16 }} /></View><View><Stars rating={review.rating} large /><Label style={{ fontFamily: fonts.bold, fontSize: 12 }}>{state.places.find(p => p.id === review.placeId)?.name}</Label></View></View><Label style={{ fontSize: 12, marginTop: 12, lineHeight: 19 }}>{review.text}</Label>
    </Pressable>)}</ScrollView>
    <View style={{ paddingHorizontal: 20 }}><Section title="Meus pontos de interesse:" action="todos" onPress={() => navigation.navigate('MyPoints')} /></View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20, gap: 24 }}>{state.places.filter(p => ['pastel', 'museu'].includes(p.id)).map(place => <PlaceCard key={place.id} small width={226} place={place} onPress={() => navigation.navigate('Detail', { id: place.id })} />)}</ScrollView>
    <View style={{ paddingHorizontal: 20 }}><Link title="Configurações" onPress={() => setSettingsOpen(true)} /></View>
  </ScrollView><BottomNav active="user" />
    <Dialog visible={edit} title="Editar perfil" onClose={() => setEdit(false)}><Field label="Nome" value={draft.name} onChange={name => setDraft({ ...draft, name })} /><Field label="Cidade e país" value={draft.location} onChange={location => setDraft({ ...draft, location })} /><Field label="Idade" value={draft.age} onChange={age => setDraft({ ...draft, age })} /><Field label="Instagram" value={draft.instagram} onChange={instagram => setDraft({ ...draft, instagram })} /><Field label="Sobre mim" value={draft.bio} onChange={bio => setDraft({ ...draft, bio })} multiline />{error ? <Label accessibilityRole="alert" style={{ color: '#b3261e' }}>{error}</Label> : null}<Button title="SALVAR PERFIL" onPress={save} /></Dialog>
    <Dialog visible={reviewsOpen} title="Minhas avaliações" onClose={() => setReviewsOpen(false)}>{reviews.map(review => <Pressable key={review.id} accessibilityRole="button" onPress={() => { setReviewsOpen(false); navigation.navigate('Detail', { id: review.placeId }); }} style={[styles.review, { width: '100%', marginBottom: 12 }]}><Stars rating={review.rating} large /><Label style={{ fontFamily: fonts.bold }}>{state.places.find(p => p.id === review.placeId)?.name}</Label><Label>{review.text}</Label></Pressable>)}</Dialog>
    <Dialog visible={settingsOpen} title="Conta" onClose={() => setSettingsOpen(false)}><Label style={{ marginBottom: 20 }}>Você está usando um perfil de demonstração.</Label><Button title="SAIR DA CONTA" onPress={() => { setSettingsOpen(false); signOut(); navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] }); }} /></Dialog>
  </View>;
}
const styles = StyleSheet.create({
  hero: { flexDirection: 'row', minHeight: 177, gap: 8 },
  avatar: { width: 178, height: 178, borderRadius: 89, overflow: 'hidden', marginTop: -25 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  bio: { borderRadius: 8, backgroundColor: colors.gray, padding: 12, minHeight: 62 },
  review: { width: 226, minHeight: 126, borderRadius: 16, padding: 16, backgroundColor: colors.gray },
});
