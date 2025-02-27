import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'

const {width , height} = Dimensions.get('window')

const LikedScreenHeader = ({header,leftArrowPress}) => {
  return (
    <View style={styles.mainStyle}>
        <TouchableOpacity onPress={leftArrowPress} activeOpacity={ACTIVE_OPACITY}>
    <SVG.leftArrow/>
    </TouchableOpacity>
    <Text style={styles.textStyle}>{header}</Text>
        </View>
  )
}

export default LikedScreenHeader

const styles = StyleSheet.create({
    mainStyle : {
        height : height* 0.06,
        width: '100%',
        flexDirection : 'row',
        alignItems :'center',
        marginTop : height *0.02
    },
    textStyle : {
        color : '#FFFFFFBF',
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : '10%'
    }
})