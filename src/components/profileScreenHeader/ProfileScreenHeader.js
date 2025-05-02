import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'
 
const { height } = Dimensions.get('window')

const ProfileScreenHeader = ({buttonPress}) => {
  return (
    <View style={styles.mainStyle}> 
    <Text style = {styles.textStyle}>My Profile</Text>
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={buttonPress} style={styles.buttonStyle}>
    <SVG.pencil/>
    <Text>Edit</Text>
    </TouchableOpacity>
       </View>
    
  )
}

export default ProfileScreenHeader

const styles = StyleSheet.create({
    mainStyle : {
        height : height * 0.055,
        width : '100%',
        justifyContent : 'space-between',
        alignItems :'center',
        flexDirection :'row',
        marginTop : height * 0.025
    },
  textStyle : {
    color : '#FFFFFFBF' ,fontWeight : 'bold',fontSize : 22
  },
  buttonStyle : {
    height : height * 0.04,
    width : '20%',
    backgroundColor :'#FFFFFFBF',
    borderRadius : 15,
    justifyContent : 'space-evenly',
    alignItems :'center',
    flexDirection : 'row'
  }
})