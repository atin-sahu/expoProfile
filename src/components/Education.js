import React, { useState } from 'react'
import {  ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS, inputTheme } from '../constants'
import { Button, TextInput } from 'react-native-paper'

const Education = () => {

  const [isAdd,setIsAdd] = useState(false)

  const [institute, setInstitute] = useState('')
  const [course, setCourse] = useState('')
  const [description, setDescription] = useState('')

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

        <View style={styles.addEducationView}>
          <TextInput 
            mode='flat'
            label={'Institute name'}
            placeholder='Enter Institute name'
            value={institute}
            onChangeText={(value)=>setInstitute(value)}
            style={styles.inputStyle}
            theme={inputTheme}
          />
          <TextInput 
            mode='flat'
            label={'Course name'}
            placeholder='Enter Course name'
            value={course}
            onChangeText={(value)=>setCourse(value)}
            style={styles.inputStyle}
            theme={inputTheme}
          />

          <TextInput
            mode='flat'
            label={'Description'}
            placeholder='Enter Description'
            value={course}
            onChangeText={(value)=>setDescription(value)}
            multiline={true}
            numberOfLines={5}
            style={styles.inputStyle}
            theme={inputTheme}
          />

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
  addEducationView:{
    marginVertical:10,
    backgroundColor:COLORS.primaryLight,
    paddingVertical:20,
    paddingHorizontal:10,
    borderRadius:15,
    gap:10
  },
  inputStyle:{
    backgroundColor:'white',
    fontSize:18,
    fontWeight:'500'
  },
  addBtnView:{
    marginTop:10
  }
})
