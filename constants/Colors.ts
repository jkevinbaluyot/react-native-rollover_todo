/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const primary = '#209cee';
const success = '#92cc41';
const error = '#e76e55';

export const Colors = {
  light: {
    text: '#11181C',
    background: 'white',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    border: 'black',
    primary: primary,
    success: success,
    error: error,
  },
  dark: {
    text: 'white',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    border: 'white',
    primary: primary,
    success: success,
    error: error,
  },
};
