import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide';
import { SVG } from '../../assets';
const { width, height } = Dimensions.get('window'); 


const MadnessScreenBtns = ({favPress,downloadPress,sharePress,playPress}) => {
  return (
    <View style={styles.mainView}>
    <View style = {styles.textView}>
    <Text style={styles.textStyle}>1.2L likes . 15 songs</Text>
    </View>
    <View style={styles.secondMainView}>
     <View style={styles.btnsView}>
        <TouchableOpacity onPress={favPress} activeOpacity={ACTIVE_OPACITY}>
    <SVG.favorite/>
    </TouchableOpacity>
    <TouchableOpacity onPress={downloadPress} activeOpacity={ACTIVE_OPACITY}>
    <SVG.download/>
    </TouchableOpacity>
    <TouchableOpacity onPress={sharePress} activeOpacity={ACTIVE_OPACITY}>
    <SVG.share/>
    </TouchableOpacity>
     </View>
    <View style={styles.playBtnView}>
    <TouchableOpacity onPress={playPress} activeOpacity={ACTIVE_OPACITY}>
    <SVG.play_arrow_big/>
    </TouchableOpacity>
    </View>
    
    </View>
    
    </View>
  )
}

export default MadnessScreenBtns

const styles = StyleSheet.create({
mainView : {
    height : height * 0.09,
    width : '100%',
},
textView : {
    height : height * 0.03,
    width  :'100%',
    justifyContent :'center'
},
textStyle : {
    color : '#FFFFFFBF',fontSize : 15,marginLeft : '5%'
},
secondMainView : {
    height : height * 0.06,
    width :'100%',
   flexDirection :'row',
    justifyContent : 'space-between'
},
btnsView : {
    height : height * 0.06,
    width :'50%',
    flexDirection :'row',
    alignItems :'center',
    justifyContent :'space-evenly'
},
playBtnView : {
    height  : height * 0.06,
    width  : '20%',
    justifyContent :'center',
    alignItems:'center'
}
})