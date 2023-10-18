import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../constants'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../components/About';
import Education from '../components/Education';
import Profile from '../components/Profile';

const Home = () => {
  const Drawer =  createDrawerNavigator();
  return (
    <View style={styles.main}>
      <NavigationContainer>
            <Drawer.Navigator initialRouteName=''>
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Education" component={Education} />
            </Drawer.Navigator>
        </NavigationContainer>   
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    main:{
        marginTop:40,
        backgroundColor:COLORS.lemonLight,
        justifyContent:"center",
        flex:1
    },
    imageView:{
        alignItems:"center",
        marginVertical:30,
    },
    profileIMage:{
        height:500,
        width:'90%',
        borderRadius:20,
    },
    titleView:{
        alignItems:"center",
    },
    name:{
        fontSize:32,
        fontWeight:'500'
    },
    designation:{
        fontSize:24
    }
})