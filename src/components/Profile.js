import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

const Profile = () => {

  const { institutes } = useSelector((state) => state.education)

  return (
    <View style={styles.main}>
      <ScrollView style={styles.scrollStyle}>


        <View style={styles.imageView}>
          <Image style={styles.profileIMage} source={require('../../assets/profile.jpg')}></Image>
        </View>

        <View style={styles.personalData}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline'}}>
            <Text style={styles.titleText}>Personal Details :</Text>
            <AntDesign name="edit" size={20} color={COLORS.error}  />
          </View>
          <Text style={styles.name}>Atin Sahu</Text>
          <Text style={styles.designation}>Frontend Developer </Text>
          <Text style={styles.dateOfBirth}>06/03/2002</Text>
          <Text style={styles.dateOfBirth}>Male</Text>
          <Text style={styles.dateOfBirth}>Unmarried</Text>
          <Text style={styles.dateOfBirth}>Narayan Kheda, Bani, Banthra, Sarojani Nagar, Lucknow, U.P. India </Text>

          {institutes?.length
            ? <Text style={styles.titleText}>Education Details :</Text>
            : null
          }

          {institutes?.length
            ? institutes?.map((ins, ind) => {
              return (
                <View key={ind} style={{ marginTop: 6 }}>
                  <Text style={styles.educationName}>{ins?.institute}</Text>
                  <Text style={styles.educationStyle}>{ins?.course}</Text>
                  <Text style={styles.educationStyle}>{ins?.startDate ? ins?.startDate : '01-06-2022'} - {ins?.endDate ? ins?.endDate : '01-06-2023'}</Text>
                </View>
              )
            })
            : null
          }

          <Text style={styles.titleText}>Contact Details :</Text>

          <View style={styles.emailView}>
            <MaterialCommunityIcons name="phone" size={22} color={COLORS.secondary} style={{ marginTop: 6 }} />
            <Text style={styles.dateOfBirth}>+91 63919 771771</Text>
          </View>

          <View style={styles.emailView}>
            <MaterialCommunityIcons name="gmail" size={22} color={COLORS.secondary} style={{ marginTop: 6 }} />
            <Text style={styles.dateOfBirth}>jayshiv7171@gmail.com</Text>
          </View>

          <View style={styles.emailView}>
            <MaterialCommunityIcons name="gmail" size={22} color={COLORS.secondary} style={{ marginTop: 6 }} />
            <Text style={styles.dateOfBirth}>atinsahu71@gmail.com</Text>
          </View>

          <Text style={styles.titleText}>Social Accounts :</Text>
          <View style={{flexDirection:'row', gap:10, justifyContent:'center', marginTop:10 }}>
            <MaterialCommunityIcons name="twitter" size={50} color={COLORS.secondary} />
            <MaterialCommunityIcons name="linkedin" size={50} color={COLORS.secondary} />
            <MaterialCommunityIcons name="facebook" size={50} color={COLORS.secondary} />
            <MaterialCommunityIcons name="instagram" size={50} color={COLORS.secondary} />
          </View>
          <Text style={{ marginBottom: 20 }}></Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.secondary,
    flex: 1
  },
  scrollStyle: {
    paddingHorizontal: 10,
  },
  imageView: {
    alignItems: "center",
    marginVertical: 30,
  },
  profileIMage: {
    height: 230,
    width: '60%',
    borderRadius: 20,
  },
  personalData: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
    marginBottom: 40
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'italic',
    marginTop: 30
  },
  name: {
    fontSize: 26,
    fontWeight: '500',
    color: COLORS.secondary,
    marginTop: 6,
  },
  designation: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.secondary,
    fontStyle: "italic",
  },
  dateOfBirth: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.secondary,
    marginTop: 6
  },
  emailView: {
    flexDirection: 'row',
    gap: 20,
    alignItems: "center",
  },
  educationName: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.secondary,
  },
  educationStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.secondary,
    fontStyle: "italic",
  },
})