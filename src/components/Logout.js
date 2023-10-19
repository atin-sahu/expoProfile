import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setNumber } from '../store/authSlice'

const Logout = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setNumber(''))
    })

    return null
}

export default Logout
