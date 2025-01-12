import { Text, type ButtonProps, ViewStyle, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ButtonPropsTheme = ButtonProps & {
  style?: ViewStyle,
  lightColor?: string;
  darkColor?: string;
  title?: string;
  className?: string;
  size?: 'large' | 'default';
  type?: 'default' | 'success' | 'error' | 'primary';
};

const getButtonBackgroundColor = (button_type: any) => {
  
  switch(button_type) {
    case 'success':
      const success = useThemeColor({}, 'success');
      return  { backgroundColor:  success}
    case 'error':
      const error = useThemeColor({}, 'error');
      return  { backgroundColor:  error }
    case 'primary':
      const primary = useThemeColor({}, 'primary');
      return  { backgroundColor:  primary }
    default:
      return {}
    }
}

const getButtonColor = (button_type: any) => {
  
  switch(button_type) {
    case 'success':
    case 'error':
    case 'primary':
      return {color: 'white'};
    default:
      return {}
    }
}

export function Button({
  style,
  lightColor,
  darkColor,
  title = "",
  size = 'default',
  type = 'default',
  ...rest
}: ButtonPropsTheme) {
  const color = getButtonColor(type);
  const default_color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');
  const [buttonPressed, setButtonPressed] = useState(false);
  const boxShadow = buttonPressed ? '' : "0px 4px " + borderColor;

  return (
    <Pressable
      onPressIn={() => setButtonPressed(true)}
      onPressOut={() => setButtonPressed(false)}
      style={[
        border_styles.default,
        {borderColor},
        {boxShadow},
        getButtonBackgroundColor(type),
        size === 'large' ? styles.large : undefined,
        buttonPressed ?  undefined : border_styles.not_clicked, 
      ]}
      {...rest}
    >
        <Text 
            style={[
                styles.default,
                type === 'default' ? {color: default_color} : color,
            ]}>
                {title}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'PressStart2P', 
  },
  large:{
    height: 50,
    width: 50
  },
  success:{ 
  },
  error:{
  },
});

const border_styles = StyleSheet.create({
    default:{
        borderWidth: 4,
        borderRadius: 6,
        padding: 8,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    not_clicked:{
      transform: ' translateY(-4px)'
    }
});
