import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Skill } from './componnets/Skill'
import { COLORS } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import { updateIsAddSkill } from '../../store/skillSlice'
import { AddSkill } from './componnets/AddSkill'

const Skills = () => {

    const dispatch = useDispatch()
    const { skills, isAddSkill } = useSelector((state) => state.skill)
    
    return (
        <View style={styles.main}>
            <ScrollView style={styles.scrollViewStyles} keyboardShouldPersistTaps='handled'>

                {skills?.length ?
                    skills?.map((skill, index) => {
                        return (
                            <Skill key={index} index={index} skill={skill} />
                        )
                    })
                    : null
                }

                {!isAddSkill ?
                    <Button
                        icon=""
                        mode="contained"
                        onPress={() => dispatch(updateIsAddSkill(true))}
                        style={{ backgroundColor: COLORS.primaryLight, width: '40%', marginVertical: 10 }}
                    >
                        <Text style={{ color: COLORS.secondary, fontSize: 18, fontWeight: '800' }}>Add New</Text>
                    </Button>
                    : null
                }

                {isAddSkill ?
                    <AddSkill />
                    : null
                }
            </ScrollView>
        </View>
    )
}

export default Skills

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.secondary
    },
    scrollViewStyles: {
        paddingHorizontal: 10,
    },
})