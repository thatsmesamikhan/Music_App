import { Dimensions, ScrollView, StyleSheet, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { SVG } from '../../assets';
import { HeaderLabel } from '../../common';
import EmailInput from '../../common/EmailInput';
import { ForgotPasswordModal, RecentlySeeMore } from '../../components';
import LoginButton from '../../common/LoginButton';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fireBase/FireBase';
import { TAB } from '../../enums';

const { height } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill all fields.');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (!user.emailVerified) {
                Alert.alert('Email Not Verified', 'Please verify your email first.');
                return;
            }

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: TAB.BOTTOM }]  // or your home/main screen route name
                })
            );
        } catch (error) {
            console.log('Login Error:', error);
            if (error.code === 'auth/user-not-found') {
                Alert.alert('Error', 'User not found. Please sign up.');
            } else if (error.code === 'auth/wrong-password') {
                Alert.alert('Error', 'Incorrect password.');
            } else if (error.code === 'auth/invalid-email') {
                Alert.alert('Error', 'Invalid email format.');
            } else {
                Alert.alert('Error', error.message);
            }
        }
    };

    return (
        <View style={styles.mainStyle}>
            <View style={styles.secondView}>
                <SVG.MusicLogo />
                <HeaderLabel text={'Welcome Back!'} textStyle={styles.headerLabel} />

                <ScrollView
                    style={styles.scrollViewStyle}
                    contentContainerStyle={styles.contentContainerStyle}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <EmailInput label={'Email'} placeholder={'Email'} onChangeText={setEmail} />
                    <EmailInput label={'Password'} placeholder={'Password'} onChangeText={setPassword} />

                    <RecentlySeeMore onPress={() => setForgotPasswordVisible(true)} text2={'Forgot Password?'} />

                    <LoginButton text={'Login'} onPress={handleLogin} />
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

export default LoginScreen;

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
