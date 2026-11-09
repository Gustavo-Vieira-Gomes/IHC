import React from 'react';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';
import { NavigationContainer, type LinkingOptions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Khula_400Regular, Khula_600SemiBold, Khula_700Bold, Khula_800ExtraBold } from '@expo-google-fonts/khula';
import { Jaldi_700Bold } from '@expo-google-fonts/jaldi';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { IBMPlexSerif_400Regular } from '@expo-google-fonts/ibm-plex-serif';
import { StoreProvider, useStore } from './src/store';
import { Label } from './src/components';
import { AuthScreen, WelcomeScreen } from './src/screens/Auth';
import { ExploreScreen, HomeScreen, PlaceListScreen } from './src/screens/Places';
import { DetailScreen, MoreInfoScreen } from './src/screens/Detail';
import { ProfileScreen } from './src/screens/Profile';
import type { RootStack } from './src/types';

const Stack = createNativeStackNavigator<RootStack>();
const linking: LinkingOptions<RootStack> = {
  prefixes: ['explorar://'], config: { screens: {
    Welcome: '', Login: 'entrar', Register: 'cadastro', Home: 'inicio', Explore: 'explorar',
    Profile: 'perfil', MyPoints: 'meus-pontos', Favorites: 'favoritos', Detail: 'lugar/:id', MoreInfo: 'lugar/:id/editar',
  } },
};
function Navigation() {
  const { ready, state, storageError } = useStore();
  if (!ready) return <View style={styles.loading}><ActivityIndicator color="#4d91ff" accessibilityLabel="Carregando seus lugares" /></View>;
  return <><NavigationContainer linking={linking}><Stack.Navigator initialRouteName={state.signedIn ? 'Home' : 'Welcome'} screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' }, animation: 'slide_from_right' }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Explorar — Vamos lá?' }} />
    <Stack.Screen name="Login" component={AuthScreen} options={{ title: 'Entrar' }} />
    <Stack.Screen name="Register" component={AuthScreen} options={{ title: 'Criar conta' }} />
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Explorar — Início' }} />
    <Stack.Screen name="Explore" component={ExploreScreen} options={{ title: 'Explorar lugares' }} />
    <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Ponto de interesse' }} />
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Meu perfil' }} />
    <Stack.Screen name="MyPoints" component={PlaceListScreen} options={{ title: 'Meus pontos' }} />
    <Stack.Screen name="Favorites" component={PlaceListScreen} options={{ title: 'Meus favoritos' }} />
    <Stack.Screen name="MoreInfo" component={MoreInfoScreen} options={{ title: 'Mais informações' }} />
  </Stack.Navigator></NavigationContainer>{storageError ? <View accessibilityRole="alert" style={styles.error}><Label>{storageError}</Label></View> : null}</>;
}
export default function App() {
  const [loaded, error] = useFonts({ Khula_400Regular, Khula_600SemiBold, Khula_700Bold, Khula_800ExtraBold, Jaldi_700Bold, Inter_400Regular, IBMPlexSerif_400Regular });
  return <SafeAreaProvider><StatusBar style="dark" /><SafeAreaView edges={['top', 'left', 'right']} style={styles.desktop}><View style={styles.app}>
    {!loaded && !error ? <View style={styles.loading}><ActivityIndicator accessibilityLabel="Carregando fontes" color="#4d91ff" /></View> : <StoreProvider><Navigation /></StoreProvider>}
  </View></SafeAreaView></SafeAreaProvider>;
}
const styles = StyleSheet.create({
  desktop: { flex: 1, backgroundColor: Platform.OS === 'web' ? '#eef1f6' : '#fff', alignItems: 'center' },
  app: { flex: 1, width: '100%', maxWidth: 430, backgroundColor: '#fff' },
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  error: { position: 'absolute', left: 16, right: 16, top: 12, padding: 12, borderRadius: 12, backgroundColor: '#fff0cf' },
});
