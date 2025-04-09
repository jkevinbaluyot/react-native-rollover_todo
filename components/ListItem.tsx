import CheckBox from 'react-native-check-box';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { styles } from './ThemedText';
import { Button } from './Button';
import { ThemedText } from './ThemedText';
import { ListItemPopup } from './list/ListItemPopup';

type ItemProps = {
  id?: string;
  text?: string; 
  done?: number;
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

  const [toggleCheckBox, setToggleCheckBox] = useState(done === 1);
  const [showModal, setShowModal] = useState(false);
  const updateCheckbox = (value: any) => {
    setToggleCheckBox(prevState => !prevState)
  }

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const border_color = useThemeColor({ light: lightColor, dark: darkColor }, 'border');
  const toggle_style = toggleCheckBox ? checkbox_text_style.checked : undefined;

  const handleRightTextClick = () => {
    setShowModal(true)
  }
  
  const closeModal = () => {
    setShowModal(false)
  }

  return <View 
            className='flex-initial justify-between align-middle flex-row items-center my-3 items-baseline '
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
                      rightTextView={
                        <TouchableOpacity 
                          onPress={handleRightTextClick}
                        >
                          <ThemedText
                          className='mx-2'
                          style={{textAlignVertical: 'center', lineHeight: 16}}
                          >
                            {text}
                          </ThemedText>
                        </TouchableOpacity>
                      }
                      onClick={updateCheckbox}
                      isChecked={toggleCheckBox}
                      checkBoxColor={border_color}
                  />

                  {
                    showModal && 
                    <ListItemPopup 
                      id={id ? parseInt(id, 10) : undefined} 
                      value={text || ''} 
                      show={showModal}
                      closeModal={closeModal}
                    />
                  }
                  
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
    //width: 100% - 24 // 24 is the width of checkbox
  },
  checked: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
});