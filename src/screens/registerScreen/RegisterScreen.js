import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets/svgs'
import { Label } from '../../common'
import {  hp, wp } from '../../enums/StyleGuide'
import { GooglePress, SignUpPress } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { SCREEN, TAB } from '../../enums'

const RegisterScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.mainStyle}>
      <View style={{marginTop : hp(5)}}>
      <SVG.MusicLogo />
      </View>
    <Label text={'Just keep on vibin’'}/>
   <SignUpPress
   onPress={() => navigation.navigate(TAB.BOTTOM)}
   text={'Sign up'}
   />
    <GooglePress
    icon={<SVG.Mobile/>}
    text={'Continue with Phone Number'}
    />
       <GooglePress
    icon={<SVG.Google/>}
    text={'Continue with Google'}
    TextStyle={styles.googleText}
    />
    <SignUpPress
   text={'Log in'}
   MainStyle={styles.loginView}
   TextStyle={styles.loginText}
   />
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    mainStyle : {
        flex :1,
        alignItems :'center',
        backgroundColor :'#0D0D0D'
    },
    googleText : {
      paddingLeft : '10%'
    },
    loginText : {
      color : '#FFFFFFBF'
    },
    loginView : {
      marginTop : hp(2), 
      backgroundColor :null
    }
})