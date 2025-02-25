import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '../enums/StyleGuide'

const Label = ({text,textStyle}) => {
  return (
      <Text style={[styles.textStyle,textStyle]}>{text}</Text>
  )
}

export default Label

const styles = StyleSheet.create({
    textStyle : {
        color : '#FFFFFF80',
        fontSize : 19,
        marginTop : hp(2)
    }
})