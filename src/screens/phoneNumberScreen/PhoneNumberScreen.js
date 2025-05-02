import { Dimensions, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { SVG } from '../../assets';
import { HeaderLabel } from '../../common';
import EmailInput from '../../common/EmailInput';
import { ForgotPasswordModal, RecentlySeeMore } from '../../components';
import LoginButton from '../../common/LoginButton';

const { height } = Dimensions.get('window');

const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <View style={styles.mainStyle}>
      <View style={styles.secondView}>
        <SVG.MusicLogo />
        <HeaderLabel text={'Continue with a Phone Number!'} textStyle={styles.headerLabel} />
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.contentContainerStyle}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <EmailInput label={'Phone Number'} placeholder={'Phone Number'} onChangeText={setPhoneNumber} />
          <EmailInput label={'Password'} placeholder={'Password'} onChangeText={setPhoneNumber} />

          {/* Forgot Password Button */}
            <RecentlySeeMore onPress={() => setForgotPasswordVisible(true)} text2={'Forgot Password?'} />

          <LoginButton text={'Sign up'} />
        </ScrollView>
      </View>
     <ForgotPasswordModal
     email={email}
     setEmail={setEmail}
     forgotPasswordVisible={forgotPasswordVisible}
     setForgotPasswordVisible={setForgotPasswordVisible}
     />
     
    </View>
  );
};

export default PhoneNumberScreen;

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


});
