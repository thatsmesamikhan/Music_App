import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { SVG } from '../../assets'
import { HeaderLabel } from '../../common'
import EmailInput from '../../common/EmailInput'
import { ForgotPasswordModal, RecentlySeeMore } from '../../components'
import LoginButton from '../../common/LoginButton'
import { useNavigation } from '@react-navigation/native'
import { TAB } from '../../enums'

const { height } = Dimensions.get('window')
const SignUpScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
     const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
      const [forgotEmail, setForgotEmail] = useState('');
    
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
                        <HeaderLabel text={'Hello create your new account!'} textStyle={styles.headerLabel} />

                        <EmailInput label={'Email'} placeholder={'Email'} onChangeText={setEmail} />
                        <EmailInput label={'Password'} placeholder={'Password'} onChangeText={setPassword} />
                        <EmailInput label={'Confirm Password'} placeholder={'Confirm Password'} onChangeText={setConfirmPassword} />


            <RecentlySeeMore onPress={() => setForgotPasswordVisible(true)} text2={'Forgot Password?'} />
                        <LoginButton onPress={() => navigation.navigate(TAB.BOTTOM)} text={'Sign up'} />
                    </ScrollView>
            </View>
            <ForgotPasswordModal
            email={forgotEmail}
            setEmail={setForgotEmail}
            forgotPasswordVisible={forgotPasswordVisible}
            setForgotPasswordVisible={setForgotPasswordVisible}
            />
        </View>
    )
}

export default SignUpScreen

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
        marginTop: height * 0.05
    },

    headerLabel: {
        fontSize: 18, marginTop: height * 0.03
    },
    textInputStyle: {
        height: height * 0.06,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFFBF',
        paddingLeft: '5%',
        color: '#FFFFFFBF',
        marginTop: height * 0.02
    },
    scrollViewStyle : {
        width: '100%', flex: 1
    },
    contentContainerStyle : {
        alignItems: 'center',paddingBottom : 20
    }

})