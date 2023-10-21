import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Contact = () => {
    return (
        <View style={styles.main}>
            <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.imageView}>
                    <Image style={styles.profileIMage} source={require('../../assets/profile.jpg')}></Image>
                </View>

                <View style={styles.emailView}>
                    <MaterialCommunityIcons name="gmail" size={30} color={COLORS.primaryLight} />
                    <View>
                        <Text style={styles.normalText}>jayshiv7171@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.emailView}>
                    <MaterialCommunityIcons name="phone" size={30} color={COLORS.primaryLight} />
                    <View>
                        <Text style={styles.normalText}>+91 63919 771771</Text>
                    </View>
                </View>

                <View style={styles.emailView}>
                    <MaterialCommunityIcons name="github" size={30} color={COLORS.primaryLight} />
                    <View>
                        <Text style={styles.normalText}>https://github.com/atin-sahu</Text>
                    </View>
                </View>

                <View style={styles.emailView}>
                    <MaterialCommunityIcons name="linkedin" size={30} color={COLORS.primaryLight} />
                    <View>
                        <Text style={styles.normalText}>www.linkedin.com/in/atin-sahu/</Text>
                    </View>
                </View>

                <View style={styles.emailView}>
                    <MaterialCommunityIcons name="instagram" size={30} color={COLORS.primaryLight} />
                    <View>
                        <Text style={styles.normalText}>Instagram</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        paddingTop: 20,
    },
    scrollViewStyle: {
        padding: 10,
    },
    normalText: {
        fontSize: 20,
        color: COLORS.primaryLight,
    },
    imageView: {
        alignItems: "center",
        marginVertical: 30,
    },
    profileIMage: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    emailView:{
        flexDirection:'row',
        gap:20,
        justifyContent:'center',
        marginTop:10,
    }
})
