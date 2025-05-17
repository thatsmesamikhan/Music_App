import { Dimensions, ScrollView, StyleSheet, View, Alert, Text } from 'react-native';
import React, { useState } from 'react';
import { SVG } from '../../assets';
import { HeaderLabel } from '../../common';
import EmailInput from '../../common/EmailInput';
import { ForgotPasswordModal, RecentlySeeMore } from '../../components';
import LoginButton from '../../common/LoginButton';
import { useNavigation } from '@react-navigation/native';
import { SCREEN, TAB } from '../../enums';
import { auth } from '../fireBase/FireBase';
import { createUserWithEmailAndPassword, sendEmailVerification, reload } from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

const { height } = Dimensions.get('window');

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const saveUserData = async (email, name) => {
    try {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userName', name);
    } catch (error) {
      console.log('Error saving user data', error);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword || !name) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password should be at least 6 characters.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      setVerificationSent(true);
      setIsSignUpComplete(true);

      await saveUserData(email, name);

      Alert.alert('Verification Email Sent', 'Please check your email inbox to verify your account.');
    } catch (error) {
      console.log('Sign Up Error:', error);
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'This email is already in use.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'Invalid email format.');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  const handleNext = async () => {
    const user = auth.currentUser;
    if (user) {
      await reload(user);
      if (user.emailVerified) {
        setIsEmailVerified(true);
        navigation.navigate(SCREEN.LOGIN_SCREEN);
      } else {
        setIsEmailVerified(false);
        Alert.alert('Not Verified', 'You are not verified yet!');
      }
    } else {
      Alert.alert('Error', 'No user found. Please sign up.');
    }
  };

  const resendVerificationEmail = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        Alert.alert('Verification Email Sent Again', 'Check your inbox.');
      } else {
        Alert.alert('Error', 'Please sign up first.');
      }
    } catch (error) {
      console.log('Resend Email Error:', error);
      Alert.alert('Error', 'Failed to resend verification email.');
    }
  };

  return (
    <View style={styles.mainStyle}>
      <View style={styles.secondView}>
        <SVG.MusicLogo />
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.contentContainerStyle}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <HeaderLabel text={'Hello, create your new account!'} textStyle={styles.headerLabel} />

          <EmailInput label={'Email'} placeholder={'Email'} onChangeText={setEmail} />
          <EmailInput label={'Name'} placeholder={'Name'} onChangeText={setName} />
          <EmailInput label={'Password'} placeholder={'Password'} onChangeText={setPassword} />
          <EmailInput label={'Confirm Password'} placeholder={'Confirm Password'} onChangeText={setConfirmPassword} />

          <RecentlySeeMore onPress={() => setForgotPasswordVisible(true)} text2={'Forgot Password?'} />

          <LoginButton
            onPress={isSignUpComplete ? handleNext : handleSignUp}
            text={isSignUpComplete ? 'Next' : 'Sign up'}
          />

          {verificationSent && (
            <RecentlySeeMore onPress={resendVerificationEmail} text2={'Resend Verification Email'} />
          )}

          {isEmailVerified && (
            <Text style={styles.verifiedText}>Email Verified ✔️</Text>
          )}
        </ScrollView>
      </View>

      <ForgotPasswordModal
        email={forgotEmail}
        setEmail={setForgotEmail}
        forgotPasswordVisible={forgotPasswordVisible}
        setForgotPasswordVisible={setForgotPasswordVisible}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  secondView: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  headerLabel: {
    fontSize: 18,
    marginTop: height * 0.03,
  },
  scrollViewStyle: {
    width: '100%',
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  verifiedText: {
    color: 'lightgreen',
    fontSize: 16,
    marginTop: 10,
  },
});
