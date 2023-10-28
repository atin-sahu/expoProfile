import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';
import { AntDesign } from '@expo/vector-icons';
import { updateIsAdd, updateProjectForm, updateProjects } from '../../../store/projectSlice';

export const Project = ({ index, project }) => {

    const dispatch = useDispatch()
    const { projects } = useSelector((state) => state.projects)

    const handleDelete = (project) => {
        let filteredProjects = projects.filter((proj) => proj?.projectName !== project?.projectName)
        dispatch(updateProjects(filteredProjects))
    }

    const handleEdit = (project) => {
        let filteredProjects = projects.filter((proj) => proj?.projectName !== project?.projectName)
        dispatch(updateProjects(filteredProjects))
        dispatch(updateIsAdd(true))
        dispatch(updateProjectForm(project))
    }
    return (
        <View style={styles.projectView}>
            <View style={styles.projectTitleView}>
                <Text style={styles.projectName}>{project?.projectName}</Text>
                <View style={styles.deleteView}>
                    <MaterialCommunityIcons name="delete" size={20} color={COLORS.error} onPress={() => handleDelete(project)} />
                    <AntDesign name="edit" size={20} color={COLORS.secondary} onPress={() => handleEdit(project)} />
                </View>
            </View>
            <Text style={styles.dateText}>{project?.startDate ? project?.startDate : '01-06-2022'} - {project?.endDate ? project?.endDate : '01-06-2023'}</Text>
            <View style={styles.gitView}>
                <MaterialCommunityIcons name="github" size={20} color={COLORS.black} />
                <View>
                    <Link href={project?.gitUrl} style={styles.linkText}>{project?.gitUrl}</Link>
                </View>
            </View>
            <View style={styles.gitView}>
                <MaterialCommunityIcons name="web" size={20} color={COLORS.black} />
                <View>
                    <Link href={project?.liveUrl} style={styles.linkText}>{project?.liveUrl}</Link>
                </View>
            </View>
            {/* <View style={styles.titleView}>
                <Text style={styles.titleText}>Tech Used : </Text>
                <View style={styles.techView}>
                    <Text style={styles.techText}>1. CSS</Text>
                    <Text style={styles.techText}>2. JS</Text>
                    <Text style={styles.techText}>3. HTML</Text>
                </View>
            </View> */}

            {/* <View style={styles.titleView}>
                <Text style={styles.titleText}>Features : </Text>
                <View style={styles.techView}>
                    <Text style={styles.techText}>1. Home Page</Text>
                    <Text style={styles.techText}>2. Navigation</Text>
                    <Text style={styles.techText}>3. Add Ietm</Text>
                </View>
            </View> */}

            <View style={styles.titleView}>
                <Text style={styles.titleText}>Description : </Text>
                <Text style={styles.descriptionText}>         {project?.description} </Text>
            </View>

            <View style={styles.titleView}>
                <Text style={[styles.linkText, { textAlign: 'right' }]}>View more...</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    descriptionText: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 5,
    },
    projectTitleView:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
