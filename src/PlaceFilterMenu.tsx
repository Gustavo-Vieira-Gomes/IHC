import React, { useRef } from 'react';
import { Modal, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Asset, iconFiles, Label } from './components';
import type { Sort } from './domain';
import { colors, fonts, shadow } from './theme';
import type { Category } from './types';
import { useAppearance } from './appearance';

export type FilterAnchor = { x: number; y: number; width: number; height: number };
export const placeSortOptions: { title: string; value: Sort; arrow: string; arrowWidth: number }[] = [
  { title: 'Mais recentes', value: 'newest', arrow: '2694a.svg', arrowWidth: 12 },
  { title: 'Mais recentes', value: 'oldest', arrow: 'eb5fa.svg', arrowWidth: 12.5 },
  { title: 'Alfabética', value: 'az', arrow: 'eb5fa.svg', arrowWidth: 12.5 },
  { title: 'Alfabética', value: 'za', arrow: 'eb5fa.svg', arrowWidth: 12.5 },
];
const categories: { title: string; value: Category }[] = [
  { title: 'Natureza', value: 'Natureza' }, { title: 'Comida', value: 'Restaurantes' },
  { title: 'Parques', value: 'Parques' }, { title: 'Esportes', value: 'Esportes' },
];

// Figma 91:215: floating 144 × 262 menu, below the list's sorting control.
export function PlaceFilterMenu({ visible, anchor, sort, category, onSort, onCategory, onClose }: {
  visible: boolean; anchor: FilterAnchor | null; sort: Sort; category: Category | 'Todos';
  onSort: (sort: Sort) => void; onCategory: (category: Category | 'Todos') => void; onClose: () => void;
}) {
  const window = useWindowDimensions();
  const { palette, fontScale } = useAppearance();
  const menuWidth = 144 * fontScale;
  const menuHeight = 232 * fontScale + 30;
  const firstOption = useRef<View>(null);
  const left = Math.max(12, Math.min((anchor?.x ?? window.width - 129) + (anchor?.width ?? 109) - menuWidth, window.width - menuWidth - 12));
  const top = Math.max(12, Math.min((anchor?.y ?? 134) + (anchor?.height ?? 26) + 9, window.height - menuHeight - 12));
  return <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose} onShow={() => firstOption.current?.focus()}>
    <View style={styles.overlay}>
      <Pressable accessibilityRole="button" accessibilityLabel="Fechar filtros" onPress={onClose} style={StyleSheet.absoluteFill} />
      <View accessibilityViewIsModal accessibilityLabel="Ordenar e filtrar lugares" style={[styles.menu, { left, top, width: menuWidth, height: menuHeight, backgroundColor: palette.surface }]}>
        <Asset name="5469b.svg" width={75} height={3} style={styles.sortIndicator} />
        {placeSortOptions.map((option, index) => <Pressable key={option.value} ref={index === 0 ? firstOption : undefined} accessibilityRole="menuitem" accessibilityLabel={`${option.title}, ${option.value === 'newest' ? 'mais novos primeiro' : option.value === 'oldest' ? 'mais antigos primeiro' : option.value === 'az' ? 'A a Z' : 'Z a A'}`} accessibilityState={{ selected: sort === option.value }} onPress={() => { onSort(option.value); onClose(); }} style={[styles.option, { height: 29 * fontScale }]}>
          <Label style={[styles.label, sort === option.value && styles.selected]}>{option.title}</Label>
          <Asset name={option.arrow} width={option.arrowWidth} height={5.7735} style={{ transform: [{ rotate: '-90deg' }] }} />
        </Pressable>)}
        {categories.map(option => <Pressable key={option.value} accessibilityRole="menuitem" accessibilityLabel={category === option.value ? `Remover filtro ${option.title}` : `Filtrar por ${option.title}`} accessibilityState={{ selected: category === option.value }} onPress={() => { onCategory(category === option.value ? 'Todos' : option.value); onClose(); }} style={[styles.option, { height: 29 * fontScale }]}>
          <Label style={[styles.label, category === option.value && styles.selected]}>{option.title}</Label>
          <Asset name={iconFiles[option.value]} width={24} />
        </Pressable>)}
      </View>
    </View>
  </Modal>;
}
const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: '#ffffff18' },
  menu: { position: 'absolute', width: 144, height: 262, paddingTop: 20, paddingBottom: 10, paddingLeft: 17, paddingRight: 9, borderRadius: 16, backgroundColor: '#fff', ...shadow },
  option: { height: 29, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { fontSize: 16, fontFamily: fonts.medium, color: colors.blue },
  selected: { textDecorationLine: 'underline' },
  sortIndicator: { position: 'absolute', left: -28.5, top: 60, transform: [{ rotate: '-90deg' }] },
});
