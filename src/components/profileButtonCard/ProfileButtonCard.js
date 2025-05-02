import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'

const {width ,height} = Dimensions.get('window')
const ProfileButtonCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.mainStyle}>
        <View style={{marginLeft : '10%'}}>
     {item?.svg}
    <Text style={styles.textStyle}>{item?.text}</Text>
    </View>
    </TouchableOpacity>
        )
  }

export default ProfileButtonCard

const styles = StyleSheet.create({
    mainStyle : {
        height : height * 0.1,
        width : width * 0.28,
        borderRadius : 10,
        backgroundColor :'rgba(128, 128, 128, 0.12)',
        justifyContent : 'center',
        marginHorizontal : '1.5%'
    },
    textStyle : {
        color : '#FFFFFF80',marginTop : height * 0.015
    }
})
