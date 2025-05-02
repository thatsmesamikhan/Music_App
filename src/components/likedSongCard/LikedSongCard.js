import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import { SVG } from '../../assets'

const {height} = Dimensions.get('window')

const LikedSongCard = ({source, text1, text2, equalTo, linesIcon, downloadIcon}) => {
    return (
      <View style={styles.mainStyle}>
        <View style={styles.songInfoView}>
          {/* Directly render equalTo */}
          {equalTo}
          <Image source={source} />
          <View style={styles.textView}>
            <Text style={styles.text1Style}>{text1}</Text>
            <Text style={styles.text2Style}>{text2}</Text>
          </View>
        </View>
        <View style={styles.svgView}>
          {/* Directly render linesIcon */}
          {linesIcon}
          {downloadIcon}
          <SVG.Three_dots />
        </View>
      </View>
    );
  };
  

export default LikedSongCard
const styles = StyleSheet.create({
    mainStyle : {
        height : height * 0.06,
        width : '100%',
        marginTop : height * 0.02,
        flexDirection : 'row',
        justifyContent :'center',
        alignItems :'center'
    },
    songInfoView : {
         width : '80%',
        flexDirection :'row'
    },
    textView : {
         marginLeft : '3%'
    },
    text1Style : {
        color : '#FFFFFF',fontSize : 13
    },
    text2Style : {
        color : '#FFFFFF80',fontSize : 11
    },
    svgView : {
        width : '20%',
        justifyContent :'center',
        alignItems :'center',
        flexDirection :'row',
        justifyContent :'space-evenly'
    }
})