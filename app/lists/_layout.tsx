import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack
            >
          <Stack.Screen
              name="[id]"
              options={{
               // Hide the header for this route
               headerShown: false,
             }}
          />
          <Stack.Screen
             name="index"
             options={{
               // Hide the header for this route
               headerShown: false,
             }}
           />
         </Stack>;
}
