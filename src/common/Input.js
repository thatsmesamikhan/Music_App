import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../assets'
import { ACTIVE_OPACITY } from '../enums/StyleGuide'

const Input = ({onChangeText,closePress}) => {
  return (
        <View style={styles.mainStyle}>
            <TouchableOpacity onPress={closePress} activeOpacity={ACTIVE_OPACITY}>
    <View style={styles.iconView}>
    <SVG.arrow_back/>
    </View>
    </TouchableOpacity>
    <View style={styles.textView}>
      <TextInput
      placeholder='Search songs, artist, album or pla...'
      placeholderTextColor={'#FFFFFF40'}
      style={styles.textInputStyle}
      onChangeText={onChangeText}
      />
    </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    mainStyle : {
        height : 55,
        width :'95%',
        borderRadius : 10,
        backgroundColor : '#0D0D0D',
        marginTop : '3%',
        justifyContent :'center',
        alignItems :'center',
        flexDirection :'row'
    },
    iconView:  {
        height : 55,
        width :'15%',
        justifyContent :'center',
        alignItems :'center',
        borderRadius : 10
    },
    textView : {
        height : 55,
        width :'85%',
        borderRadius : 10,
        justifyContent :'center'
    },
    textStyle : {
        fontSize : 17
    },
    textInputStyle : {
       height : 55,
        width : '100%',
        color : '#FFFFFF'
    }
})