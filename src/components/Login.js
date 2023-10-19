import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { COLORS } from '../constants'
import { Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setNumber } from '../store/authSlice'

const Login = () => {

    const dispatch = useDispatch();
    const [mobile, setMobile] = useState()
    const { phone } = useSelector((state)=> state.auth )

    console.log("phone--",phone)

    return (
        <View style={styles.main}>
            <TextInput
                style={styles.numberInput}
                inputMode='tel'
                placeholder='Enter Mobile--'
                value={mobile}
                onChangeText={(e) => {
                    setMobile(e)
                }}
            />
            <View style={styles.btnView}>
                <Button 
                    title='Login / Regietr'
                    onPress={()=>{
                        dispatch(setNumber(mobile))
                    }}
                    color={COLORS.primary}
                />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberInput:{
        borderBottomWidth:1,
        paddingHorizontal:10,
        height:40,
        width:"90%",
        fontSize:18,
        borderBottomColor:COLORS.primary
    },
    btnView:{
        marginTop:20
    }
})
