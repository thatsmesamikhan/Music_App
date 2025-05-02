import { Image, StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import { SVG } from '../../assets'
const {height , width} = Dimensions.get('window')


const QueueScreenHeader = ({source , text1,text2}) => {
  return (
  <View style={styles.mainStyle}>
 <Image source={source} style={styles.imageStyle}/>
 <View style={styles.contentsMainView}>
 <View style={styles.arrowView}>
 <SVG.downArrow/>
 </View>
 <View style={styles.textMainView}>
 <Text style={styles.text1Style}>Now Playing:</Text>
 <Text style={styles.text2Style}>{text2}</Text>
 </View>
 
 </View>
 </View>
  )
}

export default QueueScreenHeader

const styles = StyleSheet.create({
    mainStyle: {
        height : height * 0.1,
        width : '100%',
    },
    imageStyle : {
        height : '100%', width : '100%'
    },
    contentsMainView : {
        height : height * 0.1, width : '100%',position : 'absolute',flexDirection : 'row'
    },
    arrowView : {
        height : height * 0.1, width : '20%',justifyContent : 'center',alignItems : 'center'
    },
    textMainView:  {
        height : height * 0.1, width : '80%',justifyContent : 'center'
    },
    text1Style : {
        color : '#FFFFFF80',marginLeft : '5%'
    },
    text2Style : {
        color : '#FFFFFFBF', fontSize : 15
    }
})