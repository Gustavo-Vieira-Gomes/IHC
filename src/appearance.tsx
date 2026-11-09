import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { useStore } from './store';
import { appearanceFor, defaultPreferences } from './preferences';

const Appearance = createContext(appearanceFor(defaultPreferences, 'light'));
export function AppearanceProvider({ children }: React.PropsWithChildren) {
  const { state } = useStore();
  const scheme = useColorScheme();
  return <Appearance.Provider value={appearanceFor(state.preferences, scheme)}>{children}</Appearance.Provider>;
}
export const useAppearance = () => useContext(Appearance);
