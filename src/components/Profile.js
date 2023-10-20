import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants'

const Profile = () => {
  return (
    <View style={styles.main}>
      <View style={styles.imageView}>
        <Image style={styles.profileIMage} source={require('../../assets/profile.jpg')}></Image>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.name}>Atin Sahu</Text>
        <Text style={styles.designation}>Frontend Developer</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
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
    fontWeight: '500',
    color:COLORS.primaryLight
  },
  designation: {
    fontSize: 24,
    color:COLORS.primaryLight
  }
})