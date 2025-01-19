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