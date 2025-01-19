import { Stack } from 'expo-router';
import { HomePageHeader } from './_layout.web';

export default function Layout() {
  return <Stack>
          <Stack.Screen
              name="[id]"
              options={{ 
                title: 'To Do',
                headerTitleStyle: {
                  fontFamily: 'PressStart2P',
                },
                headerTitle: (props) => <HomePageHeader {...props} />,
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