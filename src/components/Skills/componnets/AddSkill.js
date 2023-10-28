import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, inputTheme } from '../../../constants'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { initSkillForm, updateIsAddSkill, updateSkillForm, updateSkills } from '../../../store/skillSlice'

export const AddSkill = () => {

    const dispatch = useDispatch()

    const { isAddSkill, skills, skillForm } = useSelector((state) => state.skill)

    const handleAdd = () => {
        if (isAddSkill) {
            dispatch(updateSkills([...skills, skillForm]))
            dispatch(updateSkillForm(initSkillForm))
            dispatch(updateIsAddSkill(false))
        } else {
            dispatch(updateIsAddSkill(true))
        }
    }

    const handleDiscard = () => {
        dispatch(updateIsAddSkill(false))
        dispatch(updateSkillForm(initSkillForm))
    }
    return (
        <View>
            <View style={styles.addEducationView}>

                <TextInput
                    mode='flat'
                    label={'Skill name'}
                    placeholder='Enter skill name'
                    value={skillForm?.projectName}
                    onChangeText={(value) => dispatch(updateSkillForm({ ...skillForm, title: value }))}
                    style={styles.inputStyle}
                    theme={inputTheme}
                />

                <TextInput
                    mode='flat'
                    label={'Skill Proficiency'}
                    placeholder='Enter Skill Proficiency'
                    value={skillForm?.proficiency}
                    onChangeText={(value) => dispatch(updateSkillForm({ ...skillForm, proficiency: value }))}
                    style={styles.inputStyle}
                    theme={inputTheme}
                />

                <TextInput
                    mode='flat'
                    label={'Image URL'}
                    placeholder='Enter Image URL'
                    value={skillForm?.imageUrl}
                    onChangeText={(value) => dispatch(updateSkillForm({ ...skillForm, imageUrl: value }))}
                    style={styles.inputStyle}
                    theme={inputTheme}
                />
            </View>

            <View style={styles.addBtnView}>
                <Button
                    mode="contained"
                    onPress={handleAdd}
                    style={styles.btnStye}
                >
                    <Text style={styles.btnText}>{isAddSkill ? 'Save' : 'Add New'}</Text>
                </Button>

                <Button
                    mode="contained"
                    onPress={handleDiscard}
                    style={styles.btnStye}
                >
                    <Text style={styles.btnText}>Discard</Text>
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
    },
    btnText:{
        color: COLORS.secondary,
        fontSize: 18,
        fontWeight: '800'
    },
    btnStye:{
        backgroundColor: COLORS.primaryLight,
        width: '40%'
    }
})
