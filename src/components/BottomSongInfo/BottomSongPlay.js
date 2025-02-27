import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'
import { IMAGES } from '../../assets/images'
import { SVG } from '../../assets'

const BottomSongPlay = ({ song ,onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={ACTIVE_OPACITY} style={styles.mainStyle}>
        <View style={styles.secondView}>
          <Image source={song?.image} style={styles.imageStyle} />
          <View style={styles.textView}>
            <Text style={styles.text1}>{song?.text}</Text>
            <Text style={styles.text2}>The Chainsmokers, Charlee</Text>
          </View>
          <TouchableOpacity style={styles.buttonStyle}>
            <SVG.white_play_arrow />
          </TouchableOpacity>
        </View>
        <View style={styles.barMainStyle}>
          <View style={styles.whiteBar}></View>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default BottomSongPlay;

const styles = StyleSheet.create({
    mainStyle:  {
        height : 100,
        width : '100%',
        position : 'absolute',
        bottom : 0,
        marginBottom : '10%'
    },
secondView : {
    height : 80,
    width : '100%',
    backgroundColor : 'rgba(0, 0, 0, 0.7)',
    flexDirection : 'row',
    alignItems : 'center'
},
imageStyle : {
    height : '80%',width : '17%',marginLeft : '5%'
},
textView:  {
    marginLeft : '2%'
},
text1 : {
    color : '#FFFFFF'
},
text2 : {
    color : '#FFFFFF80'
},
buttonStyle: {
    marginLeft : '15%'
},
barMainStyle : {
    height : 3,
    width : '90%',
    backgroundColor : '#FFFFFF80',
    alignSelf :'center',
    marginTop : '2%',
    borderRadius : 15
},
whiteBar : {
    height : 3,
width : '30%',
backgroundColor : '#FFFFFF',
borderRadius : 15
}
})