import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.normalText}>
        My eagerness was to become a Web Developer. 
        I am looking forward to being a good Web Developer one day, 
        So I pursued my Bachelor's in Computer Application.
        It was my college place where I was first introduced to coding and now my keenness became passion.{'\n'} {'\n'}
        I really wanted to be trained in all the skillset, 
        so I joined Masai School and Masai has made me a Full-Stack Web Developer 
        with all the technical skill that one is required. {'\n'} {'\n'}
        I can do coding in Back-End  and Front-End, 
        I am very good in HTML, CSS, Bootstrap, JavaScript, React, Chakra UI, Tailwind, Express, Node.js, MongoDB.{'\n'} {'\n'}
        Now, I am looking forward to a job opportunity in a fast moving and reputed organization. 
        Where I could prove my technical skills, leadership's skill, creativity, teamwork.{'\n'} {'\n'}
        You can take a look at my work here -{'\n'}
      </Text>
      <Link style={styles.normalText} href={'https://github.com/atin-sahu'}>https://github.com/atin-sahu</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:COLORS.secondary,
    padding:10,
    paddingTop:20,
  },
  normalText:{
    fontSize:20,
    color:COLORS.primaryLight,
    textAlign:'center'
  }
})
