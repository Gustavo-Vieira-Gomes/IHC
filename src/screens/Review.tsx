import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Dialog, Label, Page, Title } from '../components';
import { FormError, FormHeading, OpinionField, PhotoTile } from '../FormControls';
import { useStore } from '../store';
import { useAppearance } from '../appearance';
import { validateReview } from '../domain';
import type { RootStack } from '../types';

export function ReviewScreen({ navigation, route }: NativeStackScreenProps<RootStack, 'Review'>) {
  const { state, saveReview } = useStore();
  const { palette } = useAppearance();
  const previous = state.reviews.find(r => r.id === route.params.reviewId && r.mine && r.placeId === route.params.id);
  const place = state.places.find(p => p.id === route.params.id);
  const [rating, setRating] = useState(previous?.rating ?? 0);
  const [text, setText] = useState(previous?.text ?? '');
  const [image, setImage] = useState(previous?.image);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const submitted = useRef(false);
  if (!place || (route.params.reviewId && !previous)) return <Page><Title>Avaliação não encontrada</Title><Button title="VOLTAR AO PERFIL" onPress={() => navigation.navigate('Profile')} /></Page>;
  const submit = () => {
    const validation = validateReview(rating, text);
    setError(validation);
    if (validation || submitted.current) return;
    submitted.current = true;
    saveReview({ id: previous?.id, placeId: place.id, rating, text, image });
    setSaved(true);
  };
  return <Page style={{ flexGrow: 1 }}><Title style={{ marginBottom: 24 }}>Avalie:</Title>
    <View accessibilityRole="radiogroup" accessibilityLabel="Nota do lugar" style={styles.stars}>{[1, 2, 3, 4, 5].map(star => <Pressable key={star} accessibilityRole="radio" accessibilityLabel={`${star} ${star === 1 ? 'estrela' : 'estrelas'}`} accessibilityState={{ checked: star === rating }} onPress={() => { setRating(star); setError(''); }} style={styles.star}><Text accessible={false} allowFontScaling={false} style={{ fontSize: 68, lineHeight: 80, color: rating >= star ? '#ffbf00' : '#808080' }}>★</Text></Pressable>)}</View>
    <FormHeading>Deixe sua opinião:</FormHeading><OpinionField label="Sua opinião sobre o lugar" value={text} onChange={setText} />
    <FormHeading>Mostre o que viu</FormHeading><PhotoTile value={image} onChange={setImage} label="Adicionar foto da avaliação" />
    <View style={{ flex: 1, minHeight: 72 }} /><FormError message={error} /><Button title="AVALIE" onPress={submit} style={{ marginTop: 24 }} />
    <Dialog visible={saved} title={previous ? 'Avaliação atualizada' : 'Avaliação publicada'} onClose={() => { setSaved(false); navigation.replace('Detail', { id: place.id }); }}><Label>Sua opinião sobre {place.name} foi salva. Você pode consultá-la em Minhas avaliações.</Label></Dialog>
  </Page>;
}
const styles = StyleSheet.create({
  stars: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  star: { flex: 1, alignItems: 'center', minHeight: 80 },
});
