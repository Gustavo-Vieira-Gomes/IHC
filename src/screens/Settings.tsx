import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Dialog, Label, Page, Title } from '../components';
import { FormHeading } from '../FormControls';
import { useStore } from '../store';
import { useAppearance } from '../appearance';
import type { Preferences, RootStack } from '../types';

const icons = {
  text: require('../../assets/ui/text.svg'), contrast: require('../../assets/ui/contrast.svg'),
  bell: require('../../assets/ui/bell.svg'), location: require('../../assets/figma/e6cbd.svg'),
  shield: require('../../assets/ui/shield.svg'), help: require('../../assets/ui/help.svg'),
  logout: require('../../assets/ui/logout.svg'), check: require('../../assets/ui/check.svg'), chevron: require('../../assets/ui/chevron.svg'),
};
function Icon({ name }: { name: keyof typeof icons }) {
  return <Image source={icons[name]} style={{ width: 24, height: 24 }} contentFit="contain" />;
}
function Toggle({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return <Pressable accessibilityRole="switch" accessibilityLabel={label} accessibilityState={{ checked }} onPress={onChange} hitSlop={8} style={[styles.toggle, { backgroundColor: checked ? '#5d8dff' : '#a1a1a1' }]}><View style={[styles.thumb, { alignSelf: checked ? 'flex-end' : 'flex-start' }]} /></Pressable>;
}
function Row({ icon, title, value, onPress, children, last }: React.PropsWithChildren<{ icon: keyof typeof icons; title: string; value?: string; onPress?: () => void; last?: boolean }>) {
  const { palette } = useAppearance();
  const content = <><Icon name={icon} /><Label style={{ flex: 1, fontSize: 16 }}>{title}</Label>{value && <Label style={{ fontSize: 14, color: palette.muted }}>{value}</Label>}{children ?? <Icon name="chevron" />}</>;
  const style = [styles.row, { borderBottomColor: palette.divider, borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth }];
  return onPress ? <Pressable accessibilityRole="button" onPress={onPress} style={style}>{content}</Pressable> : <View style={style}>{content}</View>;
}
const textSizes: { label: string; value: Preferences['textSize'] }[] = [{ label: 'Padrão', value: 'standard' }, { label: 'Médio', value: 'medium' }, { label: 'Grande', value: 'large' }];
export function SettingsScreen({ navigation }: NativeStackScreenProps<RootStack, 'Settings'>) {
  const { state, updatePreferences, signOut } = useStore();
  const { palette } = useAppearance();
  const settings = state.preferences;
  const [dialog, setDialog] = useState<'text' | 'notifications' | 'location' | 'privacy' | 'help' | 'logout' | null>(null);
  const title = dialog === 'text' ? 'Tamanho do texto' : dialog === 'notifications' ? 'Notificações' : dialog === 'location' ? 'Localização' : dialog === 'privacy' ? 'Privacidade' : dialog === 'logout' ? 'Sair da conta?' : 'Ajuda e suporte';
  return <Page active="user"><Title style={{ marginBottom: 20, fontSize: 44 }}>Configurações</Title>
    <FormHeading first>Aparência</FormHeading>
    <View accessibilityRole="radiogroup" accessibilityLabel="Aparência do aplicativo" style={[styles.appearance, { borderColor: palette.border }]}>{([{ label: 'Claro', value: 'light' }, { label: 'Escuro', value: 'dark' }, { label: 'Sistema', value: 'system' }] as const).map((option, index) => <Pressable key={option.value} accessibilityRole="radio" accessibilityLabel={option.label} accessibilityState={{ checked: settings.appearance === option.value }} onPress={() => updatePreferences({ appearance: option.value })} style={[styles.appearanceOption, { borderLeftWidth: index ? StyleSheet.hairlineWidth : 0, borderLeftColor: palette.divider }]}><Label style={{ fontSize: 16, color: settings.appearance === option.value ? palette.accent : palette.text }}>{option.label}</Label>{settings.appearance === option.value && <Icon name="check" />}</Pressable>)}</View>
    <View style={{ marginTop: 8 }}><FormHeading>Acessibilidade</FormHeading></View>
    <View style={[styles.group, { backgroundColor: palette.field }]}><Row icon="text" title="Tamanho do texto" value={textSizes.find(option => option.value === settings.textSize)?.label} onPress={() => setDialog('text')} /><Row icon="contrast" title="Alto Contraste" last><Toggle label="Alto Contraste" checked={settings.highContrast} onChange={() => updatePreferences({ highContrast: !settings.highContrast })} /></Row></View>
    <FormHeading>Preferências</FormHeading><View style={[styles.group, { backgroundColor: palette.field }]}><Row icon="bell" title="Notificações" onPress={() => setDialog('notifications')} /><Row icon="location" title="Localização" onPress={() => setDialog('location')} last /></View>
    <FormHeading>Conta e suporte</FormHeading><View style={[styles.group, { backgroundColor: palette.field }]}><Row icon="shield" title="Privacidade" onPress={() => setDialog('privacy')} /><Row icon="help" title="Ajuda e suporte" onPress={() => setDialog('help')} last /></View>
    <Pressable accessibilityRole="button" onPress={() => setDialog('logout')} style={styles.logout}><Icon name="logout" /><Label style={{ color: palette.danger, fontSize: 20 }}>Sair da conta</Label></Pressable>
    <Dialog visible={dialog !== null} title={title} onClose={() => setDialog(null)}>
      {dialog === 'text' && textSizes.map(option => <Pressable key={option.value} accessibilityRole="radio" accessibilityState={{ checked: settings.textSize === option.value }} onPress={() => updatePreferences({ textSize: option.value })} style={styles.choice}><Label>{option.label}</Label>{settings.textSize === option.value && <Icon name="check" />}</Pressable>)}
      {dialog === 'notifications' && <><Label style={{ marginBottom: 16 }}>Escolha se deseja receber avisos sobre seus lugares favoritos. Nesta demonstração, a preferência fica salva no dispositivo.</Label><Row icon="bell" title="Ativar notificações" last><Toggle label="Ativar notificações" checked={settings.notifications} onChange={() => updatePreferences({ notifications: !settings.notifications })} /></Row></>}
      {dialog === 'location' && <><Label style={{ marginBottom: 16 }}>Use a localização para personalizar as sugestões. A cidade de exemplo é São Paulo, Brasil.</Label><Row icon="location" title="Usar localização" last><Toggle label="Usar localização" checked={settings.location} onChange={() => updatePreferences({ location: !settings.location })} /></Row></>}
      {dialog === 'privacy' && <Label>Seu perfil, preferências, lugares e avaliações ficam armazenados neste dispositivo. Suas fotos não são enviadas automaticamente a serviços externos. Evite usar dados pessoais reais nesta demonstração.</Label>}
      {dialog === 'help' && <Label>Explore os lugares pela busca ou pelo mapa. Toque na estrela de um lugar para salvá-lo nos favoritos. Use o botão + no mapa para adicionar um ponto e “Avaliar lugar” para compartilhar sua opinião. No perfil, consulte e edite suas avaliações.</Label>}
      {dialog === 'logout' && <><Label style={{ marginBottom: 20 }}>Seus lugares, favoritos e avaliações continuarão salvos neste dispositivo.</Label><Button title="SAIR DA CONTA" onPress={() => { setDialog(null); signOut(); navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] }); }} /></>}
    </Dialog>
  </Page>;
}
const styles = StyleSheet.create({
  appearance: { flexDirection: 'row', borderWidth: 0.8, borderRadius: 28, marginHorizontal: 42, overflow: 'hidden', minHeight: 55 },
  appearanceOption: { flex: 1, flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, flexWrap: 'wrap' },
  group: { borderRadius: 16, paddingHorizontal: 12 },
  row: { flexDirection: 'row', gap: 10, alignItems: 'center', minHeight: 46, paddingVertical: 8 },
  toggle: { width: 40, height: 22, borderRadius: 11, padding: 2 },
  thumb: { width: 18, height: 18, borderRadius: 9, backgroundColor: '#fff' },
  logout: { flexDirection: 'row', gap: 6, alignItems: 'center', alignSelf: 'flex-start', marginTop: 28, paddingVertical: 6 },
  choice: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: 48, padding: 10 },
});
