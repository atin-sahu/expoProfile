import { Drawer } from 'expo-router/drawer';
import About from '../../components/about';
import Education from '../../components/education';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Layout() {
    const Drawer =  createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Education" component={Education} />
            </Drawer.Navigator>
        </NavigationContainer>        
    );
}