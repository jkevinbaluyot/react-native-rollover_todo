import { Text, ViewStyle, StyleSheet, Switch, View } from 'react-native';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import CustomSwitch from 'react-native-custom-switch-new';

export type SwitchProps = {
  container_style?: ViewStyle;
  lightColor?: string;
  darkColor?: string;
  text?: string;
  className?: string;
};


export function ThemedSwitch({
  container_style,
  lightColor,
  darkColor,
  text = "",
  ...rest
}: SwitchProps) {
  const default_color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');
  const success_color = useThemeColor({}, 'success');
  const error_color = useThemeColor({}, 'error');
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  
  return (
    <View
      style={[container_style]}
      className='items-center flex-row my-2'
    >
      <CustomSwitch
          onSwitch={() => toggleSwitch()}
          buttonWidth={20}
          buttonPadding={2}
          switchBorderWidth={4}
          switchBorderColor={borderColor}
          startOnLeft={isEnabled}
          switchBackgroundColor={error_color}
          onSwitchBackgroundColor={success_color}
      />

      <Text 
        style={[
          text_style.default,
          { color: default_color }
        ]}
        className='ml-4'
      >
        {text}
      </Text>
    </View>
  );
}

const text_style = StyleSheet.create({
  default: {
    fontFamily: 'PressStart2P', 
  },
});

