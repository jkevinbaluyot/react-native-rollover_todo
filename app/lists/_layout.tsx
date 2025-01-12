import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Layout() {
  return <Stack>
          <Stack.Screen
              name="[id]"
              options={{ 
                title: 'To Do',
                headerTitleStyle: {
                  fontFamily: 'PressStart2P',
                },
                headerRight: () => (
                  <Link href={"/"}>Home</Link>
                ),
             }}
          />
          <Stack.Screen
             name="index"
             options={{
               // Hide the header for this route
             }}
           />
         </Stack>;
}


const checkbox_text_style = StyleSheet.create({
  default: {
    width: '100%'
  },
  checked: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  }
});