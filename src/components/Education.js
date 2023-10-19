import React, { useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

const Education = () => {

  const [counter, setCounter] = useState(1)

  return (
    <View>
      <Text>This is education Page</Text>
      <Text>counetr: {counter}</Text>
      <TouchableHighlight onPress={()=>setCounter(counter+1)} underlayColor="lightblue">
        <View style={{padding: 10, backgroundColor: 'blue'}}>
          <Text style={{color: 'white'}}>Press Me</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default Education
