import { TextInput } from 'react-native';
import { Button } from '../Button';
import { StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useState } from 'react';

type ListInputProps = {
  id?: number | null;
  addItem: (value: string, list_id: number) => Promise<void>;
};

export function ListInput({
  id,
  addItem
}: ListInputProps){
  const [text, setText] = useState('')
  const border_color = useThemeColor({}, 'border');
  const color = useThemeColor({}, 'text');

  const handleSubmit = () => {
    if (id !== null && id !== undefined) {
      addItem(text, id)
        ?.then(() => setText(''))
        .catch((error) => console.error('Error adding item:', error));

    } else {
      console.error('Invalid id: id must be a number');
    }
  }
     
  return(
    <ThemedView
      className='flex-row absolute bottom-0'
    >
      <TextInput 
        style={[styles.input, {borderColor: border_color, color: color}]} 
        className='flex-1 mr-2'
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button 
        type='success' 
        title='+' 
        size="large"
        onClick={handleSubmit}
      />
    </ThemedView>

  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 4,
    fontFamily: 'PressStart2P',
    borderRadius: 6,
    padding: 10,
    width: 100% - 50 // 50 is the width of the button
  },
});