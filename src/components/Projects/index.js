import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';
import { AddProject } from './components/AddProject';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsAdd } from '../../store/projectSlice';
import { Project } from './components/Project';

const Projects = () => {

    const dispatch = useDispatch()
    const { projects, isAdd } = useSelector((state) => state.projects)
    return (
        <View style={styles.main}>
            <ScrollView style={styles.scrollViewStyles} keyboardShouldPersistTaps='handled'>
                
                {projects?.length ? 
                    projects?.map((project, index) => {
                        return (
                            <Project key={index} index={index} project={project} />
                        )
                    })
                    : null
                }

                {!isAdd ?
                    <Button
                        icon=""
                        mode="contained"
                        onPress={() => dispatch(updateIsAdd(true))}
                        style={{ backgroundColor: COLORS.primaryLight, width: '40%', marginVertical:10 }}
                    >
                        <Text style={{ color: COLORS.secondary, fontSize: 18, fontWeight: '800' }}>{'Add New'}</Text>
                    </Button>
                    : null
                }

                {isAdd ?
                    <AddProject />
                    : null
                }
            </ScrollView>
        </View>
    )
}

export default Projects

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    scrollViewStyles: {
        paddingHorizontal: 10,
    },
    projectView: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: COLORS.primaryLight
    },
    titleText: {
        fontSize: 18,
        color: COLORS.secondary,
        fontStyle: 'italic',
        fontWeight: '600'
    },
    linkText: {
        fontSize: 14,
        color: COLORS.blue,
        fontStyle: 'italic'
    },
    dateText: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    projectName: {
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: '500',
        color: COLORS.secondary,
    },
    gitView: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        marginTop: 5,
    },
    titleView: {
        marginTop: 5
    },
    techView: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    techText: {
        fontSize: 14,
        fontWeight: '500',
        // textTransform:'uppercase'
    },
    descriptionText: {
        fontSize: 16,
        fontStyle: 'italic',
    },
})