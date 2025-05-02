import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY } from '../enums/StyleGuide'

const {height} = Dimensions.get('window')
const LoginButton = ({mainStyle,textStyle,text,onPress}) => {
  return (
   <TouchableOpacity onPress={onPress} activeOpacity={ACTIVE_OPACITY} style={[styles.mainStyle,mainStyle]}>
   <Text style={[styles.textStyle,textStyle]}>{text}</Text>
       </TouchableOpacity>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    mainStyle:  {
        height : height * 0.06,
        width : '100%',
        marginTop : height * 0.05,
       backgroundColor :'#FFFFFFBF',
              borderRadius : 30,
              justifyContent :'center',
              alignItems :'center'
    },
    textStyle : {
        fontSize : 20,fontWeight : 'bold'
    }
})