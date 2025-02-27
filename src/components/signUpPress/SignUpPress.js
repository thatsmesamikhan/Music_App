import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY, hp, wp } from '../../enums/StyleGuide'

const SignUpPress = ({MainStyle,TextStyle,text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={ACTIVE_OPACITY} style={[styles.mainStyle,MainStyle]}>
     <Text style={[styles.textStyle,TextStyle]}>{text}</Text>
        </TouchableOpacity>
  )
}

export default SignUpPress

const styles = StyleSheet.create({
    mainStyle : {
        height : hp(7),
        width :wp(90),
        backgroundColor :'#FFFFFFBF',
        borderRadius : 30,
        marginTop : hp(45),
        justifyContent :'center',
        alignItems :'center'
    },
    textStyle : {
        fontWeight :'bold',
        fontSize : 20
    }
})