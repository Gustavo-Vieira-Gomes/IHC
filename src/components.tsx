import React from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { assets } from './assets';
import { colors, fonts, shadow } from './theme';
import type { Category, Hours, Place, RootStack } from './types';
import { useAppearance } from './appearance';
import { useStore } from './store';

export function Label({ children, style, ...rest }: React.ComponentProps<typeof Text>) {
  const { palette, fontScale } = useAppearance();
  const flattened: TextStyle = StyleSheet.flatten([styles.text, style]);
  const original = flattened.color;
  const color = original === colors.blue ? palette.accent : ['#090909', '#111', '#000', '#000000', '#090909'].includes(String(original)) ? palette.text : ['#777', '#777777', '#555'].includes(String(original)) ? palette.muted : original;
  return <Text {...rest} style={[styles.text, { color: palette.text }, style, { color, fontSize: (flattened.fontSize ?? 16) * fontScale }, flattened.lineHeight ? { lineHeight: flattened.lineHeight * fontScale } : undefined]}>{children}</Text>;
}
export function Asset({ name, width, height = width, style, label }: { name: string; width: number; height?: number; style?: StyleProp<ViewStyle>; label?: string }) {
  return <View style={[{ width, height }, style]}><Image source={assets[name]} style={{ width, height }} contentFit="contain" accessibilityLabel={label} /></View>;
}
export const iconFiles = {
  search: '0192b.svg', home: '1bbc8.svg', user: '3f8cc.svg', plus: '83e9e.svg',
  Natureza: '2884d.svg', Parques: 'cf7f4.svg', Restaurantes: '5fd39.svg', Esportes: '5843e.svg', Cultura: '3a016.svg',
} as const;
export function Button({ title, onPress, secondary, style, disabled, testID, icon, labelStyle }: { title: string; onPress: () => void; secondary?: boolean; style?: StyleProp<ViewStyle>; disabled?: boolean; testID?: string; icon?: React.ReactNode; labelStyle?: StyleProp<TextStyle> }) {
  const { palette } = useAppearance();
  return <Pressable testID={testID} accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={onPress} style={({ pressed }) => [style, { opacity: disabled ? 0.5 : pressed ? 0.75 : 1 }]}>
    <LinearGradient colors={secondary ? [palette.surface, palette.surface] : [colors.blue, colors.blueEnd]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.button, secondary && { borderWidth: 1, borderColor: palette.border }]}>
      <Label style={[styles.buttonText, secondary && { color: colors.blue }, labelStyle]}>{title}</Label>{icon}
    </LinearGradient>
  </Pressable>;
}
export function Link({ title, onPress, style }: { title: string; onPress: () => void; style?: StyleProp<TextStyle> }) {
  return <Pressable accessibilityRole="button" onPress={onPress} hitSlop={8}><Label style={[{ color: colors.blue }, style]}>{title}</Label></Pressable>;
}
export function IconButton({ name, label, onPress, size = 36 }: { name: string; label: string; onPress: () => void; size?: number }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} hitSlop={4} style={styles.iconButton}><Asset name={name} width={size} /></Pressable>;
}
export function Title({ children, style }: React.PropsWithChildren<{ style?: StyleProp<TextStyle> }>) {
  return <Label accessibilityRole="header" style={[styles.title, style]}>{children}</Label>;
}
export function Section({ title, action, onPress }: { title: string; action?: string; onPress?: () => void }) {
  return <View style={styles.section}><Label accessibilityRole="header" style={styles.sectionTitle}>{title}</Label>{action && onPress && <Link title={action} onPress={onPress} />}</View>;
}
export function Field({ label, value, onChange, placeholder, password, icon, multiline }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; password?: boolean; icon?: string; multiline?: boolean }) {
  const { palette, fontScale } = useAppearance();
  return <View style={styles.fieldGroup}><Label style={styles.fieldLabel}>{label}</Label><View style={[styles.field, { backgroundColor: palette.field }, multiline && { minHeight: 110, alignItems: 'flex-start' }]}>
    <TextInput accessibilityLabel={label} value={value} onChangeText={onChange} placeholder={placeholder} placeholderTextColor={palette.muted} secureTextEntry={password} autoCapitalize={password ? 'none' : 'sentences'} autoCorrect={!password} multiline={multiline} style={[styles.input, { color: palette.text, fontSize: 20 * fontScale }, multiline && { minHeight: 90, textAlignVertical: 'top' }]} />
    {icon && <Asset name={icon} width={icon === '26312.svg' ? 30 : 25} />}
  </View></View>;
}
export function SearchField({ value, onChange, expanded }: { value: string; onChange: (value: string) => void; expanded?: boolean }) {
  const { palette, fontScale } = useAppearance();
  const { state } = useStore();
  return <View style={[styles.searchBox, { backgroundColor: palette.surface, borderColor: palette.border }, expanded && { minHeight: 122, alignItems: 'stretch', flexDirection: 'column', paddingVertical: 10, gap: 22 }]}>
    <View style={styles.row}><Asset name="0192b.svg" width={24} /><TextInput accessibilityLabel="Pesquisar lugares" value={value} onChangeText={onChange} placeholder="Pesquisar" placeholderTextColor={palette.accent} style={[styles.input, { fontSize: 16 * fontScale, color: palette.accent }]} />{value.length > 0 && <Link title="×" onPress={() => onChange('')} />}</View>
    {expanded && <View style={styles.row}><Asset name="e6cbd.svg" width={17} height={22} /><Label style={{ fontSize: 20 }}>{state.preferences.location ? 'São Paulo, Brasil' : 'Localização desativada'}</Label></View>}
  </View>;
}
export function Stars({ rating = 4.5, large = false }: { rating?: number; large?: boolean }) {
  const size = large ? 24 : 12;
  return <View accessibilityLabel={`${rating} de 5 estrelas`} style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>{[0, 1, 2, 3, 4].map(i => <Asset key={i} name={rating >= i + 1 ? (large ? 'd2e39.svg' : '2a046.svg') : rating > i ? '1c4fb.svg' : '273b7.svg'} width={size} />)}</View>;
}
export function CategoryBadge({ category, large = false, compact = false }: { category: Category; large?: boolean; compact?: boolean }) {
  return <View style={[styles.badge, compact && { width: 33, height: 33 }, large && { width: 120, height: 120, borderRadius: 60 }]}><Asset name={iconFiles[category]} width={large ? 72 : 24} /></View>;
}
export function Categories({ selected, onSelect, showAll = true, more }: { selected: string | string[]; onSelect: (value: Category | 'Todos') => void; showAll?: boolean; more?: () => void }) {
  const { palette } = useAppearance();
  const categories: (Category | 'Todos')[] = showAll ? ['Todos', 'Parques', 'Restaurantes', 'Natureza', 'Esportes'] : ['Natureza', 'Esportes', 'Parques', 'Cultura'];
  const allSelected = Array.isArray(selected) && ['Parques', 'Restaurantes', 'Natureza', 'Esportes', 'Cultura'].every(value => selected.includes(value));
  return <View style={styles.categories}>{categories.map(category => {
    const active = typeof selected === 'string' ? selected === category : category === 'Todos' ? allSelected : !allSelected && selected.includes(category);
    return <Pressable key={category} accessibilityRole="button" accessibilityState={{ selected: active }} onPress={() => onSelect(category)} style={[styles.chip, { backgroundColor: palette.surface, borderColor: palette.border }, active && { backgroundColor: colors.blue }]}><Label style={[styles.chipText, active && { color: '#fff' }]}>{category}</Label>{category !== 'Todos' && <Asset name={iconFiles[category]} width={24} />}</Pressable>;
  })}{showAll && more && <Pressable accessibilityRole="button" onPress={more} style={[styles.chip, { backgroundColor: colors.blue }]}><Label style={[styles.chipText, { color: '#fff' }]}>Mais</Label></Pressable>}</View>;
}
export function PlaceCard({ place, small, width, onPress }: { place: Place; small?: boolean; width?: number; onPress: () => void }) {
  const { palette } = useAppearance();
  return <Pressable onPress={onPress} accessibilityRole="button" accessibilityLabel={`Ver ${place.name}`} style={[styles.card, { backgroundColor: palette.surface }, width !== undefined && { width }]}>
    <View style={{ height: small ? 95 : 131, overflow: 'hidden' }}><Image source={place.image.startsWith('file:') || place.image.startsWith('data:') ? { uri: place.image } : assets[place.image]} style={{ width: '100%', height: '100%' }} contentFit="cover" /></View>
    <View style={{ paddingHorizontal: small ? 16 : 16, paddingBottom: 12 }}>
      <View style={[styles.row, { gap: 9, marginTop: -12, minHeight: small ? 33 : 46 }]}><CategoryBadge compact={small} category={place.category} /><Label numberOfLines={1} style={{ flex: 1, fontFamily: fonts.medium, fontSize: 16, paddingTop: 13 }}>{place.name}</Label>{!small && <Stars rating={place.rating} />}</View>
      {small && <View style={{ marginLeft: 37, flexDirection: 'row', alignItems: 'center', gap: 4 }}><Stars rating={place.rating} /><Label style={{ color: colors.blue, fontSize: 10 }}>{place.rating}</Label></View>}
      <Label numberOfLines={small ? 2 : 3} style={{ fontSize: 12, lineHeight: 19, marginTop: small ? 0 : 7 }}>{place.description}</Label>
    </View>
  </Pressable>;
}
export function HoursTable({ hours, onChange }: { hours: Hours; onChange?: (value: Hours) => void }) {
  const { palette, fontScale } = useAppearance();
  const update = (i: number, changes: Partial<Hours[number]>) => onChange?.(hours.map((h, index) => index === i ? { ...h, ...changes } : h));
  return <View style={{ gap: 8 }}>{hours.map((hour, i) => <View key={hour.day} style={[styles.row, { minHeight: 30, justifyContent: 'space-between' }]}>
    <Label style={{ width: 42, fontFamily: fonts.medium }}>{hour.day}</Label>
    <Pressable accessibilityRole="switch" accessibilityLabel={`Aberto ${hour.day}`} accessibilityState={{ checked: hour.open, disabled: !onChange }} disabled={!onChange} onPress={() => update(i, { open: !hour.open })} hitSlop={6} style={[styles.switch, { backgroundColor: hour.open ? colors.blue : '#fff' }]}><View style={[styles.switchThumb, { alignSelf: hour.open ? 'flex-end' : 'flex-start', borderColor: colors.blue }]} /></Pressable>
    {hour.open ? <><TextInput accessibilityLabel={`Abertura ${hour.day}`} editable={!!onChange} value={hour.from} onChangeText={from => update(i, { from })} style={[styles.time, { backgroundColor: palette.field, color: palette.text, fontSize: 16 * fontScale }]} /><Label>-</Label><TextInput accessibilityLabel={`Fechamento ${hour.day}`} editable={!!onChange} value={hour.until} onChangeText={until => update(i, { until })} style={[styles.time, { backgroundColor: palette.field, color: palette.text, fontSize: 16 * fontScale }]} /></> : <Label style={[styles.time, { flex: 1, marginLeft: 20, backgroundColor: palette.field }]}>Fechado</Label>}
  </View>)}</View>;
}
export function BottomNav({ active }: { active?: 'home' | 'search' | 'user' }) {
  const { palette, dark, fontScale } = useAppearance();
  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();
  const insets = useSafeAreaInsets();
  return <View style={[styles.nav, { paddingBottom: Math.max(24, insets.bottom), backgroundColor: dark ? '#101722f0' : '#fffffff0' }]}>
    <IconButton name="1bbc8.svg" label="Início" onPress={() => navigation.navigate('Home')} />
    <Pressable accessibilityRole="button" accessibilityLabel="Explorar lugares" onPress={() => navigation.navigate('Explore')} style={[styles.navSearch, { backgroundColor: palette.surface, height: fontScale > 1 ? 62 : 38 }, active === 'search' && { backgroundColor: colors.blue }]}><Asset name="0192b.svg" width={24} /><Label style={[styles.navLabel, active === 'search' && { color: '#fff' }]}>Onde você quer conhecer?</Label></Pressable>
    <IconButton name="3f8cc.svg" label="Meu perfil" onPress={() => navigation.navigate('Profile')} />
  </View>;
}
export function Page({ children, nav = true, active, style }: React.PropsWithChildren<{ nav?: boolean; active?: 'home' | 'search' | 'user'; style?: StyleProp<ViewStyle> }>) {
  const { palette } = useAppearance();
  return <View style={[styles.page, { backgroundColor: palette.canvas }]}><ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={[styles.pageContent, style]}>{children}</ScrollView>{nav && <BottomNav active={active} />}</View>;
}
export function Dialog({ visible, title, children, onClose }: React.PropsWithChildren<{ visible: boolean; title: string; onClose: () => void }>) {
  const { palette } = useAppearance();
  return <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}><View style={styles.scrim}><View accessibilityViewIsModal style={[styles.dialog, { backgroundColor: palette.surface }]}><Title style={{ fontSize: 28, lineHeight: 34, marginBottom: 20 }}>{title}</Title><ScrollView keyboardShouldPersistTaps="handled">{children}</ScrollView><Button style={{ marginTop: 20 }} title="FECHAR" onPress={onClose} /></View></View></Modal>;
}
export function Empty({ children }: React.PropsWithChildren) { return <Label style={{ padding: 30, textAlign: 'center', color: colors.muted }}>{children}</Label>; }

const styles = StyleSheet.create({
  text: { fontFamily: fonts.regular, fontSize: 16, color: colors.text },
  button: { height: 61, borderRadius: 16, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18, flexDirection: 'row', gap: 10 },
  buttonText: { fontFamily: fonts.button, fontSize: 24, letterSpacing: 1.2, color: '#fff' },
  title: { color: colors.blue, fontFamily: fonts.heavy, fontSize: 48, lineHeight: 52, marginBottom: 36 },
  section: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, marginTop: 24, marginBottom: 12 },
  sectionTitle: { fontSize: 24, fontFamily: fonts.heavy, flexShrink: 1 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconButton: { minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  fieldGroup: { gap: 7, marginBottom: 20 }, fieldLabel: { fontFamily: fonts.medium, fontSize: 20 },
  field: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.field, borderRadius: 16, paddingHorizontal: 20, minHeight: 52, gap: 12 },
  input: { fontFamily: fonts.medium, fontSize: 20, color: colors.text, flex: 1, paddingVertical: 8, minWidth: 0 },
  searchBox: { borderWidth: 1, borderColor: colors.blue, borderRadius: 32, paddingHorizontal: 20, minHeight: 46, justifyContent: 'center' },
  categories: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  chip: { borderWidth: 1, borderColor: colors.blue, borderRadius: 16, flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', gap: 8, minHeight: 37 },
  chipText: { fontFamily: fonts.regular, fontSize: 20 },
  card: { backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', ...shadow },
  badge: { borderRadius: 24, backgroundColor: '#fff', width: 46, height: 46, alignItems: 'center', justifyContent: 'center', borderWidth: 0.6, borderColor: colors.blue },
  switch: { width: 40, height: 22, borderRadius: 11, padding: 1 }, switchThumb: { width: 20, height: 20, borderRadius: 10, borderWidth: 0.5, backgroundColor: '#fff' },
  time: { width: 94, minHeight: 30, paddingVertical: 3, backgroundColor: '#e5e5e5', borderRadius: 8, textAlign: 'center', fontFamily: fonts.inter, fontSize: 16, color: colors.text },
  nav: { position: 'absolute', bottom: 0, left: 0, right: 0, paddingTop: 16, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10, backgroundColor: '#fffffff0' },
  navSearch: { ...shadow, backgroundColor: '#fff', borderRadius: 64, paddingHorizontal: 10, height: 38, flex: 1, maxWidth: 242, flexDirection: 'row', alignItems: 'center', gap: 10 },
  navLabel: { fontFamily: fonts.button, fontSize: 16, color: colors.blue, flexShrink: 1 },
  page: { flex: 1, backgroundColor: '#fff' }, pageContent: { paddingHorizontal: 20, paddingTop: 40, paddingBottom: 124 },
  scrim: { flex: 1, backgroundColor: '#0006', alignItems: 'center', justifyContent: 'center', padding: 24 },
  dialog: { backgroundColor: '#fff', borderRadius: 24, padding: 24, width: '100%', maxWidth: 430, maxHeight: '85%', ...shadow },
});
