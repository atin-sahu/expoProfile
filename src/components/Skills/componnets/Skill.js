import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsAddSkill, updateSkillForm, updateSkills } from '../../../store/skillSlice'
import { COLORS } from '../../../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export const Skill = ({ index, skill }) => {

    const dispatch = useDispatch()
    const { skills } = useSelector((state) => state.skill)

    const handleDelete = (skill) => {
        let filteredSkills = skills.filter((skl) => skl?.title !== skill?.title)
        dispatch(updateSkills(filteredSkills))
    }

    const handleEdit = (skill) => {
        let filteredSkills = skills.filter((skl) => skl?.title !== skill?.title)
        dispatch(updateSkills(filteredSkills))
        dispatch(updateIsAddSkill(true))
        dispatch(updateSkillForm(skill))
    }
    return (
        <View style={styles.skillView}>

            <View style={styles.deleteView}>
                <MaterialCommunityIcons name="delete" size={20} color={COLORS.error} onPress={() => handleDelete(skill)} />
                <AntDesign name="edit" size={20} color={COLORS.secondary} onPress={() => handleEdit(skill)} />
            </View>

            <View style={styles.imageView}>
                <Image style={styles.profileImage} source={require('../../../../assets/profile.jpg')} />
                <View>
                    <Text style={styles.titleStyle}>{skill.title}</Text>
                    <Text style={styles.prficientStyle}>Proficiency : {skill.proficiency}%</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    skillView: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: COLORS.primaryLight
    },
    imageView: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        marginVertical: 10,
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: '500',
        color: COLORS.secondary,
    },
    prficientStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.secondary,
    },
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 5,
    },
})
