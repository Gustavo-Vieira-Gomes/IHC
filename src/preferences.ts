import type { Preferences } from './types';

export const defaultPreferences: Preferences = {
  appearance: 'system', textSize: 'standard', highContrast: false, notifications: true, location: true,
};
export function restorePreferences(value?: Partial<Preferences> | null): Preferences {
  return {
    appearance: ['light', 'dark', 'system'].includes(value?.appearance ?? '') ? value!.appearance! : 'system',
    textSize: ['standard', 'medium', 'large'].includes(value?.textSize ?? '') ? value!.textSize! : 'standard',
    highContrast: typeof value?.highContrast === 'boolean' ? value.highContrast : false,
    notifications: typeof value?.notifications === 'boolean' ? value.notifications : true,
    location: typeof value?.location === 'boolean' ? value.location : true,
  };
}
export function appearanceFor(preferences: Preferences, systemScheme: 'light' | 'dark' | null | undefined) {
  const dark = preferences.appearance === 'dark' || (preferences.appearance === 'system' && systemScheme === 'dark');
  return {
    dark,
    fontScale: preferences.textSize === 'large' ? 1.3 : preferences.textSize === 'medium' ? 1.15 : 1,
    palette: {
      canvas: dark ? '#101722' : '#ffffff', surface: dark ? '#1c2737' : '#ffffff',
      field: dark ? '#303c50' : '#e3e3e3', review: dark ? '#303c50' : '#d9d9d9',
      text: dark ? '#f7f9ff' : '#090909', muted: dark ? '#bdc7d8' : preferences.highContrast ? '#424242' : '#777777',
      accent: dark ? '#91b8ff' : '#4d91ff', border: preferences.highContrast ? (dark ? '#d6e5ff' : '#23549b') : (dark ? '#91b8ff' : '#4d91ff'),
      divider: dark ? '#59677b' : preferences.highContrast ? '#777777' : '#c7c7c7',
      danger: dark ? '#ff9b96' : '#ff3b30',
    },
  };
}
