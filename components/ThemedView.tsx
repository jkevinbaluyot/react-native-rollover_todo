import { View, type ViewProps, StyleSheet } from 'react-native';
import { isMediumScreen } from '../utils/isMediumScreen';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style, default_styles.default]} {...otherProps} />;
}

const default_styles = StyleSheet.create({
  default:{
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
    width: '100%'
  }
});
