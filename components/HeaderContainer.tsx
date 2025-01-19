import { View, type ViewProps, StyleSheet, useColorScheme  } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function HeaderContainer({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');
    const boxShadow = "0px 4px " + borderColor 

  return <View style={[{ backgroundColor }, style, default_styles.default, {borderColor}, {boxShadow}]} {...otherProps} />;
}

const default_styles = StyleSheet.create({
  default:{
    borderWidth: 4,
    borderStyle: 'solid',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 16,
    padding: 18,
    borderRadius: 6,
    width: '100%'
  },
});
