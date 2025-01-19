import { ScrollView, type ViewProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedScrollViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedScrollView({ style, lightColor, darkColor, ...otherProps }: ThemedScrollViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <ScrollView style={[{ backgroundColor }, style, default_styles.default]} {...otherProps} />;
}

const default_styles = StyleSheet.create({
  default:{
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
    width: '100%'
  }
});
