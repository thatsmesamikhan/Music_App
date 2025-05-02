import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY, hp} from '../../enums/StyleGuide'
import { SVG } from '../../assets'
import { IMAGES } from '../../assets/images'

const HomeScreenHeader = ({imagePress}) => {
  return (
    <View style={styles.mainStyle}>
       <View style={styles.firstView}>
      <SVG.HiLogan/>
      <Text style={styles.textStyle}>Good Evening</Text>
       </View>
       <View style={styles.secondView}>
    <SVG.notification/>
    <TouchableOpacity onPress={imagePress} activeOpacity={ACTIVE_OPACITY}>
    <Image source={IMAGES.USER}/>
    </TouchableOpacity>
       </View>
      </View>
  )
}

export default HomeScreenHeader

const styles = StyleSheet.create({
    mainStyle : {
        height : hp(8),
        width : '100%',
        marginTop : hp(3),
        flexDirection :'row'
    },
    firstView : {
        height : hp(8),
        width : '60%',
        justifyContent :'center'
    },
    textStyle : {
        color : '#FFFFFFBF',
        fontSize : 20
    },
    secondView : {
        height : hp(8),
        width : '40%',
        alignItems :'center',
        justifyContent :'flex-end',
        flexDirection :'row'
    }
})