import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS, inputTheme } from '../constants'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import {updateInstitutes} from '../store/educationSlice'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const form = { 
  institute:'',
  course:'',
  startDate:'',
  endDate:'',
  description:'',
}

const Education = () => {

  const [isAdd, setIsAdd] = useState(false)
  const [education,setEducation] = useState(form)

  const dispatch = useDispatch();
  const {institutes} = useSelector((state) => state.education )

  const handleAdd = () =>{
    if(isAdd){
      dispatch(updateInstitutes([...institutes, education]))
      setEducation(form)
      setIsAdd(false)
    }else{
      setIsAdd(true)
    }
  }

  const handleDiscard = () =>{
    setIsAdd(false)
    setEducation(form)
  }  

  const handleDelete = (edu) =>{
    let filteredInstitutes = institutes.filter((ins) => ins?.institute !== edu?.institute)
    dispatch(updateInstitutes(filteredInstitutes))
  }  

  const handleEdit = (edu) =>{
    let filteredInstitutes = institutes.filter((ins) => ins?.institute !== edu?.institute)
    dispatch(updateInstitutes(filteredInstitutes))
    setIsAdd(true)
    setEducation(edu)
  }

  return (
    <View style={styles.main}>
      <ScrollView style={styles.scrollViewStyles} keyboardShouldPersistTaps={'handled'}>
        {institutes?.length ? 
          institutes?.map((edu,index) => {
            return (
              <View key={index} style={styles.instituteView}>
                <Text style={styles.instituteText}>{edu?.institute}</Text>
                <Text style={styles.courseText}>{edu?.course}</Text>
                <Text style={styles.dateText}>{edu?.startDate ? edu?.startDate : '01-06-2022'} - {edu?.endDate ? edu?.endDate : '01-06-2023'}</Text>
                <Text style={styles.dateText}>{'\n'}{edu?.description}</Text>
                <View style={styles.deleteView}>
                    <MaterialCommunityIcons name="delete" size={20} color={COLORS.error} onPress={()=>handleDelete(edu)}/>
                    <AntDesign name="edit" size={20} color={COLORS.secondary} onPress={()=>handleEdit(edu)}/>
                  </View>
              </View>
            )
          })
          : null
        }

        {isAdd ?
          <View style={styles.addEducationView}>
            <TextInput
              mode='flat'
              label={'Institute name'}
              placeholder='Enter Institute name'
              value={education?.institute}
              onChangeText={(value) => setEducation({...education, institute:value})}
              style={styles.inputStyle}
              theme={inputTheme}
            />
            <TextInput
              mode='flat'
              label={'Course name'}
              placeholder='Enter Course name'
              value={education?.course}
              onChangeText={(value) => setEducation({...education, course:value})}
              style={styles.inputStyle}
              theme={inputTheme}
            />
            <TextInput
              mode='flat'
              label={'Description'}
              placeholder='Enter Description'
              value={education?.description}
              onChangeText={(value) => setEducation({...education, description:value})}
              multiline={true}
              numberOfLines={5}
              style={styles.inputStyle}
              theme={inputTheme}
            />
          </View>
          : null
        }

        <View style={styles.addBtnView}>
          <Button
            icon=""
            mode="contained"
            onPress={handleAdd}
            style={{ backgroundColor: COLORS.primaryLight, width: '40%' }}
          >
            <Text style={{ color: COLORS.secondary, fontSize: 18, fontWeight: '800' }}>{isAdd ? 'Save' :'Add New'}</Text>
          </Button>
          {isAdd ? 
            <Button
              icon=""
              mode="contained"
              onPress={handleDiscard}
              style={{ backgroundColor: COLORS.primaryLight, width: '40%' }}
            >
              <Text style={{ color: COLORS.secondary, fontSize: 18, fontWeight: '800' }}>Discard</Text>
            </Button>
            : null
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Education

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  scrollViewStyles: {
    padding: 10
  },
  normalText: {
    fontSize: 20,
    color: COLORS.primaryLight,
  },
  instituteText: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '500',
    color: COLORS.secondary,
  },
  courseText: {
    fontSize: 20,
    fontWeight: '500',
    // color: COLORS.secondary,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    // color: COLORS.secondary,
  },
  instituteView: {
    marginVertical: 5,
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 20,
    paddingVertical:10,
    borderRadius: 15
  },
  addEducationView: {
    marginVertical: 10,
    backgroundColor: COLORS.primaryLight,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    gap: 10
  },
  deleteView:{
    flexDirection:'row',
    justifyContent:'flex-end',
    gap:5,
    marginTop:4
  },
  inputStyle: {
    backgroundColor: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  addBtnView: {
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  }
})
