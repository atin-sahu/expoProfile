import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../constants'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../components/About';
import Education from '../components/Education';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { Contact } from '../components/Contact';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
    const Drawer = createDrawerNavigator();
    return (
        <View style={styles.main}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='Profile'>
                    <Drawer.Screen
                        name="Login"
                        component={Login}
                        options={
                            {
                                headerStyle:{backgroundColor:COLORS.primaryLight},
                                drawerIcon:()=>{
                                    return (
                                        <MaterialCommunityIcons
                                            name='login'
                                            size={25}
                                        />
                                    )
                                }
                            }
                        }
                    />
                    <Drawer.Screen
                        name="Profile"
                        component={Profile}
                        options={
                            {
                                headerStyle:{backgroundColor:COLORS.primaryLight},
                                headerRight: () => {
                                    const navigation = useNavigation();
                                    return (
                                        <MaterialCommunityIcons
                                            name='home'
                                            size={30}
                                            onPress={() => navigation.navigate("Profile")}
                                            style={{ marginRight: 15 }}
                                        />
                                    )
                                },
                                drawerIcon:()=>{
                                    return (
                                        <MaterialCommunityIcons
                                            name='face-man'
                                            size={25}
                                        />
                                    )
                                }
                            }
                        }
                    />
                    <Drawer.Screen
                        name="Education"
                        component={Education}
                        options={
                            {
                                headerStyle:{backgroundColor:COLORS.primaryLight},
                                headerRight: () => {
                                    const navigation = useNavigation();
                                    return (
                                        <MaterialCommunityIcons
                                            name='home'
                                            size={30}
                                            onPress={() => navigation.navigate("Profile")}
                                            style={{ marginRight: 15 }}
                                        />
                                    )
                                },
                                drawerIcon:()=>{
                                    return (
                                        <MaterialCommunityIcons
                                            name='book-education-outline'
                                            size={25}
                                        />
                                    )
                                }
                            }
                        }
                    />
                    <Drawer.Screen
                        name="Projects"
                        component={Projects}
                        options={
                            {
                                headerStyle:{backgroundColor:COLORS.primaryLight},
                                headerRight: () => {
                                    const navigation = useNavigation();
                                    return (
                                        <MaterialCommunityIcons
                                            name='home'
                                            size={30}
                                            onPress={() => navigation.navigate("Profile")}
                                            style={{ marginRight: 15 }}
                                        />
                                    )
                                },
                                drawerIcon:()=>{
                                    return (
                                        <MaterialCommunityIcons
                                            name='assistant'
                                            size={25}
                                        />
                                    )
                                }
                            }
                        }
                    />
                    <Drawer.Screen
                        name="Skills"
                        component={Skills}
                        options={
                            {
                                headerStyle:{backgroundColor:COLORS.primaryLight},
                                headerRight: () => {
                                    const navigation = useNavigation();
                                    return (
                                        <MaterialCommunityIcons
                                            name='home'
                                            size={30}
                                            onPress={() => navigation.navigate("Profile")}
                                            style={{ marginRight: 15 }}
                                        />
                                    )
                                },
                                drawerIcon:()=>{
                                    return (
                                        <MaterialCommunityIcons
                                            name='pen'
                                            size={25}
                                        />
                                    )
                                }
                            }
                        }
                    />
                    <Drawer.Screen
                        name="Contact"
                        component={Contact}
                        options={
                            {
                                headerStyle:{backgroundColor:COLORS.primaryLight},
                                headerRight: () => {
                                    const navigation = useNavigation();
                                    return (
                                        <MaterialCommunityIcons
                                            name='home'
                                            size={30}
                                            onPress={() => navigation.navigate("Profile")}
                                            style={{ marginRight: 15 }}
                                        />
                                    )
                                },
                                drawerIcon:()=>{
                                    return (
                                        <MaterialCommunityIcons
                                            name='contacts-outline'
                                            size={25}
                                        />
                                    )
                                }
                            }
                        }
                    />
                    <Drawer.Screen
                        name="About"
                        component={About}
                        options={
                            {
                                headerStyle:{backgroundColor:COLORS.primaryLight},
                                headerRight: () => {
                                    const navigation = useNavigation();
                                    return (
                                        <MaterialCommunityIcons
                                            name='home'
                                            size={30}
                                            onPress={() => navigation.navigate("Profile")}
                                            style={{ marginRight: 15 }}
                                        />
                                    )
                                },
                                drawerIcon:()=>{
                                    return (
                                        <MaterialCommunityIcons
                                            name='information'
                                            size={25}
                                        />
                                    )
                                }
                            }
                        }
                    />
                    <Drawer.Screen
                        name="Logout"
                        component={Logout}
                        options={
                            {
                                headerStyle:{backgroundColor:COLORS.primaryLight},
                                drawerIcon:()=>{
                                    return (
                                        <MaterialCommunityIcons
                                            name='logout'
                                            size={25}
                                        />
                                    )
                                }
                            }
                        }
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    imageView: {
        alignItems: "center",
        marginVertical: 30,
    },
    profileIMage: {
        height: 500,
        width: '90%',
        borderRadius: 20,
    },
    titleView: {
        alignItems: "center",
    },
    name: {
        fontSize: 32,
        fontWeight: '500'
    },
    designation: {
        fontSize: 24
    }
})