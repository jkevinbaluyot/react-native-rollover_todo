import { TextInput } from 'react-native';
import { Button } from './Button';
import { StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

type ListInputProps = {
  id?: number | null;
};

export function ListInput({
  id
}: ListInputProps){

    const border_color = useThemeColor({}, 'border');
     

  return(
    <ThemedView
      className='flex-row absolute bottom-0'
    >
      <TextInput style={[styles.input, {borderColor: border_color}]} className='flex-1 mr-2'/>
      <Button type='success' title='+' size="large"/>
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