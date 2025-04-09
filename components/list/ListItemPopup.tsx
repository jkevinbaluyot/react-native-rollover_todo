import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '../ThemedView';
import { Button } from '../Button';

interface ListItemPopupProps {
    id: number | undefined;
    value: string;
    show: boolean;
    closeModal: () => void;
} 

export const ListItemPopup: React.FC<ListItemPopupProps> = ({ id, value, show, closeModal }) => {
    const [valueText, setValueText] = useState(value);
    const backgroundColor = useThemeColor({}, 'background');
    const borderColor = useThemeColor({}, 'border');
    const color = useThemeColor({}, 'text');


    const handleSubmit = () => {
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
                     className="flex h-screen justify-center w-100 relative"
                    >
                        <ThemedText>Edit: </ThemedText>
                        <TextInput
                            value={valueText}
                            onChangeText={(text: string) => setValueText(text)}
                            style={[styles.input, { borderColor, color }]}
                            className='mb-4'
                        />

                        <ThemedView
                          className='flex-row justify-between bottom-0 w-100'
                        >
                          <Button 
                            type='error' 
                            title='Cancel'
                            className='w-1/2 m-1'
                            onClick={closeModal}
                          />

                          <Button 
                            type='success' 
                            title='Save'
                            className='w-1/2 m-1'
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
      height: 60,
      borderWidth: 4,
      fontFamily: 'PressStart2P',
      borderRadius: 6,
      padding: 10,
    }
  });