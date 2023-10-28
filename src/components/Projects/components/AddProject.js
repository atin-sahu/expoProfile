import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, inputTheme } from '../../../constants'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { initProjectForm, updateIsAdd, updateProjectForm, updateProjects } from '../../../store/projectSlice'

export const AddProject = () => {

    const dispatch = useDispatch()

    const { isAdd, projects, projectForm } = useSelector((state) => state.projects)

    const handleAdd = () => {
        if (isAdd) {
            dispatch(updateProjects([...projects, projectForm]))
            dispatch(updateProjectForm(initProjectForm))
            dispatch(updateIsAdd(false))
        } else {
            dispatch(updateIsAdd(true))
        }
    }

    const handleDiscard = () => {
        dispatch(updateIsAdd(false))
        dispatch(updateProjectForm(initProjectForm))
    }

    return (
        <View>
            <View style={styles.addEducationView}>

                <TextInput
                    mode='flat'
                    label={'Project name'}
                    placeholder='Enter Project name'
                    value={projectForm?.projectName}
                    onChangeText={(value) => dispatch(updateProjectForm({ ...projectForm, projectName: value }))}
                    style={styles.inputStyle}
                    theme={inputTheme}
                />

                <TextInput
                    mode='flat'
                    label={'Github URL'}
                    placeholder='Enter Github URL'
                    value={projectForm?.gitUrl}
                    onChangeText={(value) => dispatch(updateProjectForm({ ...projectForm, gitUrl: value }))}
                    style={styles.inputStyle}
                    theme={inputTheme}
                />

                <TextInput
                    mode='flat'
                    label={'Live URL'}
                    placeholder='Enter Live URL'
                    value={projectForm?.liveUrl}
                    onChangeText={(value) => dispatch(updateProjectForm({ ...projectForm, liveUrl: value }))}
                    style={styles.inputStyle}
                    theme={inputTheme}
                />

                <TextInput
                    mode='flat'
                    label={'Description'}
                    placeholder='Enter Description'
                    value={projectForm?.description}
                    onChangeText={(value) => dispatch(updateProjectForm({ ...projectForm, description: value }))}
                    multiline={true}
                    numberOfLines={5}
                    style={styles.inputStyle}
                    theme={inputTheme}
                />
            </View>

            <View style={styles.addBtnView}>
                <Button
                    mode="contained"
                    onPress={handleAdd}
                    style={{ backgroundColor: COLORS.primaryLight, width: '40%'}}
                >
                    <Text style={{ color: COLORS.secondary, fontSize: 18, fontWeight: '800' }}>{isAdd ? 'Save' : 'Add New'}</Text>
                </Button>

                <Button
                    mode="contained"
                    onPress={handleDiscard}
                    style={{ backgroundColor: COLORS.primaryLight, width: '40%'}}
                >
                    <Text style={{ color: COLORS.secondary, fontSize: 18, fontWeight: '800' }}>Discard</Text>
                </Button>    
            </View>
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
    addBtnView: {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
