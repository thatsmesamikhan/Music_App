import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../enums/StyleGuide'
import { SVG } from '../../assets'
import { IMAGES } from '../../assets/images'

const HomeScreenHeader = () => {
  return (
    <View style={styles.mainStyle}>
       <View style={styles.firstView}>
      <SVG.HiLogan/>
      <Text style={styles.textStyle}>Good Evening</Text>
       </View>
       <View style={styles.secondView}>
    <SVG.notification/>
    <Image source={IMAGES.USER}/>
       </View>
      </View>
  )
}

export default HomeScreenHeader

const styles = StyleSheet.create({
    mainStyle : {
        height : hp(8),
        width : wp(90),
        marginTop : hp(3),
        flexDirection :'row'
    },
    firstView : {
        height : hp(8),
        width : wp(55),
        justifyContent :'center'
    },
    textStyle : {
        color : '#FFFFFFBF',
        fontSize : 20
    },
    secondView : {
        height : hp(8),
        width : wp(35),
        alignItems :'center',
        justifyContent :'flex-end',
        flexDirection :'row'
    }
})