import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet } from 'react-native';

export function HomePageHeader (props: any) {
  return(
    <Link
      href="/"
    >
      <ThemedText type="title">To Do</ThemedText>
    </Link>
  ) 
}

export default function Layout() {

  return <Stack>
          <Stack.Screen
              name="[id]"
              options={{ 
                title: 'To Do',
                headerTitle: (props) => <HomePageHeader {...props} />,
                headerTitleStyle: tab_style.default
             }}
          />
          <Stack.Screen
             name="index"
             options={{
                title: 'Home'
               // Hide the header for this route
             }}
           />
         </Stack>;
}


const tab_style = StyleSheet.create({
  default: {
    fontFamily: 'PressStart2P',
  }
});