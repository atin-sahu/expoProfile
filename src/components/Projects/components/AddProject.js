import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, inputTheme } from '../../../constants'
import { TextInput } from 'react-native-paper'

const form = { 
    projectName:'',
    startDate:'',
    endDate:'',
    gitUrl:'',
    liveUrl:'',
    techStack:[],
    description:'',
  }

export const AddProject = () => {

    const [project,setProject] = useState(form)

    return (
        <View style={styles.addEducationView}>
            <TextInput
                mode='flat'
                label={'Project name'}
                placeholder='Enter Project name'
                value={project?.projectName}
                onChangeText={(value) => setProject({ ...project, projectName: value })}
                style={styles.inputStyle}
                theme={inputTheme}
            />

            <TextInput
                mode='flat'
                label={'Github URL'}
                placeholder='Enter Github URL'
                value={project?.gitUrl}
                onChangeText={(value) => setProject({ ...project, gitUrl: value })}
                style={styles.inputStyle}
                theme={inputTheme}
            />

            <TextInput
                mode='flat'
                label={'Live URL'}
                placeholder='Enter Live URL'
                value={project?.liveUrl}
                onChangeText={(value) => setProject({ ...project, liveUrl: value })}
                style={styles.inputStyle}
                theme={inputTheme}
            />
            
            <TextInput
                mode='flat'
                label={'Description'}
                placeholder='Enter Description'
                value={project?.description}
                onChangeText={(value) => setProject({ ...project, description: value })}
                multiline={true}
                numberOfLines={5}
                style={styles.inputStyle}
                theme={inputTheme}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addEducationView: {
        marginVertical: 10,
        backgroundColor: COLORS.primaryLight,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        gap: 10
    },
    inputStyle: {
        backgroundColor: 'white',
        fontSize: 18,
        fontWeight: '500',
      },
})
