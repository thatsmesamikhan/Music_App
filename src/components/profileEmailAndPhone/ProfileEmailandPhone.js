import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {height} = Dimensions.get('window')
const ProfileEmailandPhone = ({text,info}) => {
  return (
    <>
      <Text style={styles.textStyle1}>
       {text}
      </Text>
      <Text style={styles.textStyle2}>
       {info}
      </Text>
      </>
  )
}

export default ProfileEmailandPhone

const styles = StyleSheet.create({
    textStyle1 : {
        color : '#FFFFFF',
        fontSize : 19,
        fontWeight : 'bold',
        marginTop : height * 0.03,
        alignSelf : 'flex-start'
    },
    textStyle2 : {
        color : '#FFFFFF80',
        fontSize : 15,
        fontWeight : 'bold',
        marginTop : height * 0.01,
        alignSelf : 'flex-start'
    }
})