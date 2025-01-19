import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function Layout() {
  const color = useThemeColor({}, 'text');
 
  return <Tabs 
                screenOptions={{ 
                        tabBarActiveTintColor: color, 
                        tabBarLabelStyle: {
                                fontFamily: 'PressStart2P', // Set your custom font family here
                        },
                        headerShown: false 
                }}>
        <Tabs.Screen
                name="index"
                options={{
                        title: 'Home',
                        headerTitleStyle: tab_style.default,
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
        />
        <Tabs.Screen
                name="calendar"
                options={{
                        title: 'Calendar',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
                }}
        />
        <Tabs.Screen
                name="settings"
                options={{
                title: 'Settings',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
        />
        </Tabs>
}

const tab_style = StyleSheet.create({
        default: {
                fontFamily: 'PressStart2P',
        }
});
