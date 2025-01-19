import CheckBox from 'react-native-check-box';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, View } from 'react-native';
import { styles } from './ThemedText';
import { Button } from './Button';
import { ThemedText } from './ThemedText';

type ItemProps = {
  id?: string;
  text?: string; 
  done?: boolean;
  lightColor?: string;
  darkColor?: string;
};

export function ListItem({
  id,
  lightColor,
  darkColor, 
  text, 
  done,
}: ItemProps){

  const [toggleCheckBox, setToggleCheckBox] = useState(done);
  const updateCheckbox = (value: any) => {
    setToggleCheckBox(prevState => !prevState)
  }

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const border_color = useThemeColor({ light: lightColor, dark: darkColor }, 'border');
  const toggle_style = toggleCheckBox ? checkbox_text_style.checked : undefined;

  return <View 
            className='flex-initial justify-between flex-row items-center my-3 items-baseline'
          >
              <View
                  className="w-5/6"
              >
                  <CheckBox
                      rightTextStyle={
                        {
                         ...styles.default,
                         color, 
                         ...checkbox_text_style.default,
                         ...toggle_style,
                        }
                      }
                      rightText={text}
                      onClick={updateCheckbox}
                      isChecked={toggleCheckBox}
                      checkBoxColor={border_color}
                  />
              </View>

              <View
                  className="items-end w-1/6"
              >
                <View
                  className='w-12 items-baseline'
                >
                  <Button
                      title="X"
                      type="error"   
                  />
                </View>
              </View>
        </View>
}

const checkbox_text_style = StyleSheet.create({
  default: {
    width: 100% - 24 // 24 is the width of checkbox
  },
  checked: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  }
});