import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'

const SongInfoButton = ({mainPress,iconPress,MainStyle,ImageStyle,FirstTextStyle,SecondTextStyle,Text1,Text2,source,icon}) => {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={mainPress} style={[styles.mainStyle,MainStyle]}>
      <View style={styles.imageAndTextMainView}>
      <Image source={source} style={[styles.imageStyle,ImageStyle]}/>
      <View>
        <Text style={[styles.firstTextStyle,FirstTextStyle]}>{Text1}</Text>
      <Text style={[styles.secondTextStyle,SecondTextStyle]}>{Text2}</Text>
      </View>
      
      </View>
      <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={iconPress} style={styles.dotsView}>
      {icon}
      </TouchableOpacity>
      </TouchableOpacity>
  )
}

export default SongInfoButton

const styles = StyleSheet.create({
    mainStyle: {
        height : 45,
        width :'100%',
        flexDirection : 'row',
        marginTop : '5%'
    },
    imageAndTextMainView : {
        height : 45,
        width : '80%',
        flexDirection : 'row'
    },
    imageStyle : {
        margin : '2%',
        marginLeft :'6%'
    },
    firstTextStyle : {
        color : '#FFFFFF'
    },
    secondTextStyle: {
color : '#FFFFFF80'
    },
    dotsView:  {
        height : 45,
        width : '20%',
        justifyContent :'center',
        alignItems  :'center'
    }
})