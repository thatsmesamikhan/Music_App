import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderLabel = ({textStyle,text}) => {
  return (
   <Text style={[styles.textStyle,textStyle]}>{text}</Text>
  )
}

export default HeaderLabel

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 25,
        fontWeight :'bold',
        color :'#FFFFFFBF',
        alignSelf :'flex-start',
         marginLeft :'5%'
    }
})