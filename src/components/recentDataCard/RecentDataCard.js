import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY, hp, wp } from '../../enums/StyleGuide';
import { SVG } from '../../assets';

const RecentDataCard = ({item,setSelectedSong,setBottomSongPlay}) => {
  return (

         <TouchableOpacity onPress={() => {
           setSelectedSong(item); 
           setBottomSongPlay(true)}} activeOpacity={ACTIVE_OPACITY} style={styles.btnStyle}>
           <View style={styles.imageView}>
             <Image source={item?.image} style={styles.imageStyle} />
             <View style={styles.svgView}>
               <SVG.play_arrow />
             </View>
           </View>
           <Text style={styles.textStyle}>{item?.text}</Text>
         </TouchableOpacity>
       );
     };
  

export default RecentDataCard

const styles = StyleSheet.create({
    btnStyle : { 
   height: hp(12),
          width: wp(22),
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: wp(2),
          marginTop: hp(2),
    },
    imageView : {
        height: hp(10),
        width: wp(22),
        borderRadius: 15,
    },
    imageStyle : {
        height: hp(10), width: wp(22), borderRadius: 15
    },
    svgView : {
        position: 'absolute', right: 5, bottom: 5 
    },
    textStyle : {
        fontSize: 12, color: 'white', marginTop: 5 
    }
})