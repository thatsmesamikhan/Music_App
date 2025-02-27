import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY, hp, wp } from '../../enums/StyleGuide'

const GooglePress = ({MainStyle,onPress,icon,IconViewStyle,TextViewStyle,TextStyle,text}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={ACTIVE_OPACITY} style={[styles.mainStyle,MainStyle]}>
         <View style={[styles.iconViewStyle,IconViewStyle]}>
         {icon}
         </View>
         <View style={[styles.textViewStyle,TextViewStyle]}>
           <Text style={[styles.textStyle,TextStyle]}>{text}</Text>
         </View>
         </TouchableOpacity>
  )
}

export default GooglePress

const styles = StyleSheet.create({
    mainStyle : {
        borderWidth :1,
        borderColor :'#FFFFFFBF',
        height : hp(7),
        width : wp(90),
        borderRadius : 30,
        marginTop : hp(2),
        justifyContent :'center',
        alignItems :'center',
        flexDirection :'row'
       },
       iconViewStyle : {
        height : hp(7),
        width : wp(15) ,
        justifyContent :'center',
        alignItems :'center',
        borderRadius : 30
       },
       textViewStyle : {
        height : hp(7),
        width : wp(75) ,
        justifyContent :'center',
        paddingLeft :'5%',
        borderRadius : 30
       },
    textStyle : {
        fontSize : 16,
        fontWeight :'bold',
        color :'#FFFFFFBF'
    }
})