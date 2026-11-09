import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { Asset, Label, Link } from './components';
import { useAppearance } from './appearance';
import { fonts, shadow } from './theme';

export function FormHeading({ children, first }: React.PropsWithChildren<{ first?: boolean }>) {
  return <Label accessibilityRole="header" style={{ fontFamily: fonts.heavy, fontSize: 24, lineHeight: 34, marginTop: first ? 0 : 24, marginBottom: 8 }}>{children}</Label>;
}
export function OpinionField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  const { palette, fontScale } = useAppearance();
  return <TextInput accessibilityLabel={label} multiline value={value} onChangeText={onChange} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit," placeholderTextColor={palette.muted} textAlignVertical="top" style={[styles.opinion, { borderColor: palette.border, color: palette.text, backgroundColor: palette.surface, fontSize: 20 * fontScale, lineHeight: 32 * fontScale }]} />;
}
export function PhotoTile({ value, onChange, label = 'Adicionar foto' }: { value?: string; onChange: (value?: string) => void; label?: string }) {
  const { palette } = useAppearance();
  const [error, setError] = useState('');
  const choose = async () => {
    setError('');
    try {
      const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], allowsEditing: true, aspect: [4, 3], quality: 0.6, base64: true });
      if (result.canceled || !result.assets[0]) return;
      const image = result.assets[0];
      // A data URI keeps mock photos available after reloading, including on web.
      onChange(image.base64 ? `data:${image.mimeType ?? 'image/jpeg'};base64,${image.base64}` : image.uri);
    } catch { setError('Não foi possível abrir a galeria. Verifique as permissões e tente novamente.'); }
  };
  return <View><Pressable accessibilityRole="button" accessibilityLabel={value ? 'Trocar foto' : label} onPress={choose} style={[styles.photo, { backgroundColor: palette.surface }]}>
    {value ? <Image source={{ uri: value }} style={StyleSheet.absoluteFill} contentFit="cover" accessibilityLabel="Foto selecionada" /> : <><Asset name="bfebc.svg" width={60} /><Label style={{ color: palette.accent, fontSize: 20, marginTop: 8 }}>Adicione uma foto</Label></>}
  </Pressable>{value && <View style={{ alignItems: 'flex-end', marginTop: 8 }}><Link title="Remover foto" onPress={() => onChange(undefined)} /></View>}{error ? <Label accessibilityRole="alert" style={{ color: palette.danger, marginTop: 8 }}>{error}</Label> : null}</View>;
}
export function FormError({ message }: { message: string }) {
  const { palette } = useAppearance();
  return message ? <Label accessibilityRole="alert" style={{ color: palette.danger, marginTop: 16 }}>{message}</Label> : null;
}
const styles = StyleSheet.create({
  opinion: { minHeight: 146, padding: 20, borderWidth: 0.8, borderRadius: 28, fontFamily: fonts.regular },
  photo: { height: 176, borderRadius: 24, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', ...shadow },
});
