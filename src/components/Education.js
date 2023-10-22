import React, { useState } from 'react'
import {  ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants'
import { Button } from 'react-native-paper'

const Education = () => {

  const [isAdd,setIsAdd] = useState(false)

  return (
    <View style={styles.main}>
      <ScrollView style={styles.scrollViewStyles}>
        {/* <Text style={styles.boldText}>My qualifications</Text> */}

        <View style={styles.instituteView}>
          <Text style={styles.instituteText}>Msai School</Text>
          <Text style={styles.courseText}>Full Stack Web-Development</Text>
          <Text style={styles.dateText}>01-06-2022 - 01-06-2023</Text>
          <Text style={styles.dateText}>{'\n'}here i have lear about this this this</Text>
        </View>

        <View style={styles.instituteView}>
          <Text style={styles.instituteText}>Msai School</Text>
          <Text style={styles.courseText}>Full Stack Web-Development</Text>
          <Text style={styles.dateText}>01-06-2022 - 01-06-2023</Text>
          <Text style={styles.dateText}>{'\n'}here i have lear about this this this</Text>
        </View>

        <View style={styles.addBtnView}>
          <Button 
            icon="" 
            mode="contained" 
            onPress={() => setIsAdd(true)}
            style={{backgroundColor:COLORS.primaryLight, width:'40%'}}
          >
            <Text style={{color:COLORS.secondary, fontSize:18, fontWeight:'800'}}>Add New</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

export default Education

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:COLORS.secondary,
  },
  scrollViewStyles:{
    padding:10
  },
  normalText:{
    fontSize:20,
    color:COLORS.primaryLight,
  },
  boldText:{
    fontSize:20,
    color:COLORS.primaryLight,
    fontWeight:'500'
  },
  instituteText:{
    fontSize:24,
    fontStyle:'italic',
    fontWeight:'500'
  },
  courseText:{
    fontSize:20,
    fontWeight:'500'
  },
  dateText:{
    fontSize:16,
    fontWeight:'500'
  },
  instituteView:{
    marginVertical:5,
    backgroundColor:COLORS.primaryLight,
    padding:10,
    borderRadius:15
  },
  addBtnView:{
    marginTop:10
  }
})
