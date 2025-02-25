import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets/svgs'
import { Label } from '../../common'

const RegisterScreen = () => {
  return (
    <View style={styles.mainStyle}>
      <SVG.MusicLogo/>
    <Label text={'Just keep on vibin’'}/>
    

    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    mainStyle : {
        flex :1,
        justifyContent :'center',
        alignItems :'center',
        backgroundColor :'#0D0D0D'
    }
})