import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Asset, Button, Dialog, Field, Label, Link, Title } from '../components';
import { assets } from '../assets';
import { useAppearance } from '../appearance';
import { useStore } from '../store';
import { colors, fonts } from '../theme';
import { validateAuth } from '../domain';
import type { RootStack } from '../types';

export function WelcomeScreen({ navigation }: NativeStackScreenProps<RootStack, 'Welcome'>) {
  const { palette } = useAppearance();
  const { width } = useWindowDimensions();
  const scale = Math.min(width, 430) / 430;
  return <ScrollView style={{ backgroundColor: palette.canvas }} contentContainerStyle={{ paddingBottom: 16 }}>
    <View style={{ height: 665 * scale }}>
      <View style={{ height: 587 * scale, overflow: 'hidden', borderBottomLeftRadius: 64, borderBottomRightRadius: 64 }}>
        <Image source={assets['5fb84.png']} style={{ position: 'absolute', width: 548 * scale, height: 683 * scale, left: -59 * scale, top: -48 * scale }} contentFit="cover" />
        <Image source={assets['02333.png']} style={{ position: 'absolute', width: 494.694 * scale, height: 770.743 * scale, left: -36.347 * scale, top: -82 * scale }} />
      </View>
      <View style={{ position: 'absolute', top: 416 * scale, left: 90 * scale, width: 249 * scale, height: 249 * scale, overflow: 'hidden', borderRadius: 125 * scale }}>
        <Image source={assets['25d7a.png']} style={{ position: 'absolute', width: 263 * scale, height: 263 * scale, left: -7 * scale, top: -7 * scale }} contentFit="cover" accessibilityLabel="Logo Explorar, monumentos do mundo" />
      </View>
    </View>
    <View style={{ paddingHorizontal: 32, gap: 20 }}><Label accessibilityRole="header" style={styles.welcomeTitle}>VAMOS LÁ?</Label>
      <Button title="ENTRAR" onPress={() => navigation.navigate('Login')} />
      <Button title="CADASTRE-SE" onPress={() => navigation.navigate('Register')} />
    </View>
    <View style={{ alignItems: 'center', marginTop: 10 }}><Link title="pular" style={{ fontFamily: fonts.inter, textDecorationLine: 'underline' }} onPress={() => navigation.replace('Home')} /></View>
  </ScrollView>;
}

export function AuthScreen({ navigation, route }: NativeStackScreenProps<RootStack, 'Login' | 'Register'>) {
  const { palette } = useAppearance();
  const register = route.name === 'Register';
  const { signIn } = useStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [terms, setTerms] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [dialog, setDialog] = useState<'terms' | 'reset' | 'social' | null>(null);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const enter = () => {
    const validation = validateAuth(username, password, register ? confirmation : undefined, terms);
    setError(validation);
    if (!validation) { signIn(register ? username.trim() : undefined, remember); navigation.reset({ index: 0, routes: [{ name: 'Home' }] }); }
  };
  return <KeyboardAvoidingView style={{ flex: 1, backgroundColor: palette.canvas }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}><ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.auth}>
    <Title style={{ marginBottom: 0, marginHorizontal: register ? -5 : 4 }}>{register ? 'Olá, que bom\nter você aqui!' : 'Que bom ter você de volta!'}</Title>
    <View style={{ marginTop: register ? 58 : 165 }}>
      <Field label="Usuário/email" value={username} onChange={setUsername} placeholder={register ? 'Insira um nome de usuário' : 'Digite seu nome de usuário'} icon="26312.svg" />
      <Field label="Senha" value={password} onChange={setPassword} password placeholder={register ? 'Insira sua senha' : 'Digite sua senha'} icon="6c14f.svg" />
      {register ? <><Field label="Confirmação" value={confirmation} onChange={setConfirmation} password placeholder="Confirme sua senha" icon="6c14f.svg" />
        <View style={[styles.row, { justifyContent: 'center' }]}><Pressable accessibilityRole="checkbox" accessibilityLabel="Aceitar termos e condições" accessibilityState={{ checked: terms }} onPress={() => setTerms(!terms)} style={styles.check}><Label style={{ color: colors.blue }}>{terms ? '✓' : ''}</Label></Pressable><Label>Li e aceito os <Label onPress={() => setDialog('terms')} accessibilityRole="button" style={{ color: '#00b9ed' }}>termos e condições</Label></Label></View></> :
        <View style={[styles.row, { justifyContent: 'space-between', marginTop: -12 }]}><Pressable accessibilityRole="checkbox" accessibilityState={{ checked: remember }} onPress={() => setRemember(!remember)} style={styles.row}><Label>Lembre de mim</Label><View style={[styles.remember, remember && { backgroundColor: colors.blue }]} /></Pressable><Link title="Esqueceu a senha?" style={{ color: '#111', fontSize: 16 }} onPress={() => setDialog('reset')} /></View>}
    </View>
    {error ? <Label accessibilityRole="alert" style={{ color: '#b3261e', marginTop: 12 }}>{error}</Label> : null}
    <Button title={register ? 'CRIAR CONTA' : 'ENTRAR'} onPress={enter} style={{ marginTop: register ? 54 : 48 }} />
    <View style={[styles.row, { gap: 20, marginTop: 42, marginBottom: 30 }]}><View style={styles.line} /><Label style={{ fontFamily: fonts.inter }}>Ou continue com</Label><View style={styles.line} /></View>
    <View style={[styles.row, { justifyContent: 'space-around' }]}><Pressable accessibilityRole="button" onPress={() => setDialog('social')} style={styles.social}><Asset name="b42a0.svg" width={24} /><Label style={styles.socialLabel}>Google</Label></Pressable><Pressable accessibilityRole="button" onPress={() => setDialog('social')} style={styles.social}><Asset name="6d56b.svg" width={24} /><Label style={styles.socialLabel}>Instagram</Label></Pressable></View>
    <View style={{ alignItems: 'center', marginTop: 24 }}><Link title={register ? 'Já possui conta?' : 'Ainda não possui conta?'} style={{ textDecorationLine: 'underline', letterSpacing: 1 }} onPress={() => navigation.replace(register ? 'Login' : 'Register')} /></View>
    <Dialog visible={dialog !== null} title={dialog === 'terms' ? 'Termos e condições' : dialog === 'reset' ? 'Recuperar senha' : 'Continuar com sua conta'} onClose={() => setDialog(null)}>
      {dialog === 'terms' && <Label>Este protótipo permite explorar lugares, salvar favoritos e compartilhar experiências. Os dados ficam neste dispositivo. Use apenas informações fictícias para experimentar as telas.</Label>}
      {dialog === 'social' && <><Label style={{ marginBottom: 20 }}>A entrada nesta demonstração usa um perfil de exemplo.</Label><Button title="CONTINUAR" onPress={() => { signIn(); navigation.reset({ index: 0, routes: [{ name: 'Home' }] }); }} /></>}
      {dialog === 'reset' && <><Field label="Email" value={resetEmail} onChange={setResetEmail} placeholder="seu@email.com" /><Button title="ENVIAR" onPress={() => setResetMessage(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail) ? 'Solicitação simulada. Você já pode voltar e entrar com qualquer usuário e senha preenchidos.' : 'Informe um email válido.')} /><Label accessibilityLiveRegion="polite" style={{ marginTop: 12 }}>{resetMessage}</Label></>}
    </Dialog>
  </ScrollView></KeyboardAvoidingView>;
}
const styles = StyleSheet.create({
  welcomeTitle: { textAlign: 'center', color: colors.blue, fontFamily: fonts.heavy, fontSize: 32, marginTop: 8 },
  auth: { paddingTop: 40, paddingBottom: 30, paddingHorizontal: 32 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  check: { width: 22, height: 22, borderWidth: 0.6, borderColor: '#555', alignItems: 'center', justifyContent: 'center' },
  remember: { borderWidth: 1, borderColor: colors.blue, borderRadius: 10, width: 20, height: 20 },
  line: { flex: 1, height: 1, backgroundColor: colors.blue },
  social: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 20, backgroundColor: '#2500e9', height: 54, borderRadius: 16 },
  socialLabel: { color: '#fff', fontSize: 20, fontFamily: fonts.button, letterSpacing: 1 },
});
