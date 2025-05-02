import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import HeaderLabel from './HeaderLabel'

const {height} = Dimensions.get('window')
const EmailInput = ({placeholder,onChangeText,label}) => {
  return (
    <>
    <HeaderLabel text={label} textStyle={styles.labelTextStyle}/>
   <TextInput
       placeholder= {placeholder}
       onChangeText={onChangeText}
       placeholderTextColor={'#FFFFFFBF'}
       style={styles.style}
       />
   </>
  )
}

export default EmailInput

const styles = StyleSheet.create({
    style : {
        height : height * 0.06,
        width : '100%',
        borderRadius : 10,
        borderWidth : 1,
        borderColor : '#FFFFFFBF',
        paddingLeft : '5%',
        color : '#FFFFFFBF',
        marginTop : height * 0.02
    },
    labelTextStyle : {
        marginTop : height * 0.03,
        fontSize : 17
       },
})