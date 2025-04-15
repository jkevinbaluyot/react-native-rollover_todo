import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '../ThemedView';
import { Button } from '../Button';
import { ListItem } from '@/models';
import useListItemHook from '@/hooks/data/useListItemHook';

interface ListItemPopupProps {
    updateItem: (item: Partial<ListItem>) => Promise<void>;
    data: ListItem,
    id: number | undefined;
    value: string;
    show: boolean;
    closeModal: () => void;
} 

export const ListItemPopup: React.FC<ListItemPopupProps> = ({ updateItem, data, id, value, show, closeModal }) => {
    const [valueText, setValueText] = useState(value);
    const backgroundColor = useThemeColor({}, 'background');
    const borderColor = useThemeColor({}, 'border');
    const color = useThemeColor({}, 'text');
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }, []);
  

    const handleSubmit = () => {
      const newValues = {...data, value: valueText}
      updateItem(newValues)
        .then(() => {
          closeModal();
        })
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Modal 
                    animationType="slide"
                    visible={show}
                    onRequestClose={() => {
                      closeModal();
                    }}
                    style={
                      [
                        { backgroundColor }
                      ]
                    }
                >
                    <ThemedView
                     className="flex h-screen relative"
                    >
                        <ThemedView
                          className='mb-4'
                        >
                          <ThemedText>Edit: </ThemedText>
                          <TextInput
                              value={valueText}
                              onChangeText={(text: string) => setValueText(text)}
                              style={[styles.input, { borderColor, color }]}
                              ref={inputRef}
                          />
                        </ThemedView>


                        <ThemedView
                          className='w-screen absolute bottom-0'
                        >
                          <Button 
                            type='error' 
                            title='Cancel'
                            className='w-1/2 ml-auto m-1'
                            onClick={closeModal}
                          />

                          <Button 
                            type='success' 
                            title='Save'
                            className='w-1/2 ml-auto m-1'
                            onClick={handleSubmit}
                          />
                        </ThemedView>
                          
                    </ThemedView>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
       
    );
};
export const styles = StyleSheet.create({
    modalView: {
      padding: 20
    },
    input: {
      height: 60,
      borderWidth: 4,
      fontFamily: 'PressStart2P',
      borderRadius: 6,
      padding: 10,
    }
  });