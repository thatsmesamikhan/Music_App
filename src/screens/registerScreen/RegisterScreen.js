import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { SVG } from '../../assets/svgs';
import { Label } from '../../common';
import { hp } from '../../enums/StyleGuide';
import { GooglePress, SignUpPress } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { SCREEN, TAB } from '../../enums';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { auth } from '../fireBase/FireBase';

const RegisterScreen = () => {
  const navigation = useNavigation();

   useEffect(() => {
    GoogleSignin.configure({
      webClientId: '71085906968-d41lca2h2peeesc0acci93i21h981tta.apps.googleusercontent.com', // Paste your Web Client ID here
    });
  }, []);
  

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      console.log("userinfo", userInfo);
  
      const idToken = userInfo?.data?.idToken; 
  
      if (idToken) {
        // Create Firebase credential using the extracted idToken
        const googleCredential = GoogleAuthProvider.credential(idToken);
  
        // Sign in with Firebase
        const userCredential = await signInWithCredential(auth, googleCredential);
        console.log("Firebase User:", userCredential.user);
        navigation.navigate(TAB.BOTTOM)
      } else {
        console.log("No idToken found in userInfo");
      }
  
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login process.");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign in is already in progress.");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available or outdated.");
      } else {
        console.log("Google Sign-In Error:", error);
      }
    }
  };

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
          onPress={googleLogin}
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
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  googleText: {
    paddingLeft: '10%',
  },
  loginText: {
    color: '#FFFFFFBF',
  },
  loginView: {
    marginTop: hp(2),
    backgroundColor: null,
  },
  logoStyle: {
    marginTop: hp(5),
  },
});
