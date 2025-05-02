import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeaderLabel } from '../../common'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'

const RecentlySeeMore = ({MainStyle,text1Style,text1,text2,text2Style,onPress}) => {
  return (
    <View style={[styles.mainStyle,MainStyle]}>
           <HeaderLabel textStyle={[styles.text1Style,text1Style]} text= {text1} />
           <TouchableOpacity onPress={onPress} activeOpacity={ACTIVE_OPACITY}>
             <Text style={[styles.text2Style,text2Style]}>{text2}</Text>
           </TouchableOpacity>
         </View>
  )
}

export default RecentlySeeMore

const styles = StyleSheet.create({
    mainStyle : {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop: '5%'
    },
    text1Style : {
        marginLeft : 0
    },
    text2Style : {
        color: 'white', fontSize: 18 
    }
})