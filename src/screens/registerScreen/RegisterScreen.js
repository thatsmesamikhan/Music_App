import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets/svgs'
import { Label } from '../../common'
import { hp } from '../../enums/StyleGuide'
import { GooglePress, SignUpPress } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { SCREEN, TAB } from '../../enums'

const RegisterScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.mainStyle}>
      <View style={styles.logoStyle}>
        <SVG.MusicLogo />
      </View>
      <Label text={'Just keep on vibin’'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SignUpPress
          onPress={() => navigation.navigate(SCREEN.SIGN_UP_SCREEN)}
          text={'Sign up'}
        />
        <GooglePress
          icon={<SVG.Mobile />}
          onPress={() => navigation.navigate(SCREEN.PHONE_NUMBER_SCREEN)}
          text={'Continue with Phone Number'}
        />
        <GooglePress
          icon={<SVG.Google />}
          text={'Continue with Google'}
          TextStyle={styles.googleText}
        />
        <SignUpPress
          text={'Log in'}
          onPress={() => navigation.navigate(SCREEN.LOGIN_SCREEN)}
          MainStyle={styles.loginView}
          TextStyle={styles.loginText}
        />
      </ScrollView>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D'
  },
  googleText: {
    paddingLeft: '10%'
  },
  loginText: {
    color: '#FFFFFFBF'
  },
  loginView: {
    marginTop: hp(2),
    backgroundColor: null
  },
  logoStyle:  {
    marginTop: hp(5) 
  }
})