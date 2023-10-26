import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';
import { AddProject } from './components/AddProject';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsAdd } from '../../store/projectSlice';

// const form = { 
//     projectName:'',
//     startDate:'',
//     endDate:'',
//     gitUrl:'',
//     liveUrl:'',
//     techStack:[],
//     description:'',
//   }

const Projects = () => {

    // const [isAdd, setIsAdd] = useState(false)
    const dispatch = useDispatch()
    const { projects, isAdd } = useSelector((state) => state.projects)
    console.log("projects--", projects)
    console.log("isAdd--", isAdd)

    // const handleAdd = () => {
    //     if (isAdd) {
    //         //   dispatch(updateInstitutes([...institutes, education]))
    //         //   setEducation(form)
    //         //   setIsAdd(false)
    //     } else {
    //         setIsAdd(true)
    //     }
    // }

    const handleDiscard = () => {
        setIsAdd(false)
        // setEducation(form)
    }

    return (
        <View style={styles.main}>
            <ScrollView style={styles.scrollViewStyles} keyboardShouldPersistTaps='handled'>
                <View style={styles.projectView}>
                    <Text style={styles.projectName}>Project Name</Text>
                    <Text style={styles.dateText}>{'01-06-2022'} - {'01-06-2023'}</Text>
                    <View style={styles.gitView}>
                        <MaterialCommunityIcons name="github" size={20} color={COLORS.black} />
                        <View>
                            <Link href={'https://github.com/atin-sahu'} style={styles.linkText}>https://github.com/atin-sahu</Link>
                        </View>
                    </View>
                    <View style={styles.gitView}>
                        <MaterialCommunityIcons name="web" size={20} color={COLORS.black} />
                        <View>
                            <Link href={''} style={styles.linkText}>live url</Link>
                        </View>
                    </View>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>Tech Used : </Text>
                        <View style={styles.techView}>
                            <Text style={styles.techText}>1. CSS</Text>
                            <Text style={styles.techText}>2. JS</Text>
                            <Text style={styles.techText}>3. HTML</Text>
                        </View>
                    </View>

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
                        <Text style={styles.descriptionText}>         hello i this is good project </Text>
                    </View>

                    <View style={styles.titleView}>
                        <Text style={[styles.linkText, { textAlign: 'right' }]}>View more...</Text>
                    </View>

                </View>

                {!isAdd ?
                    <Button
                        icon=""
                        mode="contained"
                        onPress={() => dispatch(updateIsAdd(true))}
                        style={{ backgroundColor: COLORS.primaryLight, width: '40%' }}
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
    addBtnView: {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})