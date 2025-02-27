import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets';
import { ACTIVE_OPACITY } from '../../enums/StyleGuide';
const { width, height } = Dimensions.get('window'); 

const ArtistsScreenHeader = ({source,arrowPress,mainText,secondText}) => {
  return (
    <View style={styles.mainView}>
           <Image source={source} style={styles.imageStyle} resizeMode="cover" />
   
           <TouchableOpacity 
             onPress={arrowPress}
             activeOpacity={ACTIVE_OPACITY} 
             style={styles.arrowStyle}
           >
             <SVG.leftArrow />
           </TouchableOpacity>
   
           <View style={styles.mainTextView}>
             <Text style={styles.artistName}>{mainText}</Text>
           </View>
   
           <View style={styles.secondTextView}>
             <Text style={styles.artistLabel}>{secondText}</Text>
           </View>
         </View>
  )
}

export default ArtistsScreenHeader

const styles = StyleSheet.create({
    mainView : {
         height: height * 0.30, width: '100%'
    },
    imageStyle : {
        height: '100%', width: '100%' 
    },
    arrowStyle:  {
        position: 'absolute', top: height * 0.05, left: width * 0.05
    },
    mainTextView : {
         position: 'absolute', top: height * 0.20, alignSelf: 'center'
    },
    secondTextView : {
        position: 'absolute', top: height * 0.25, left: width * 0.05
    },
    artistName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFFBF',
      },
      artistLabel: {
        color: '#FFFFFFBF',
        fontWeight: 'bold',
      },
})