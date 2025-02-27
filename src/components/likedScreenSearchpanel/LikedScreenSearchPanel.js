import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets'

const {width , height} = Dimensions.get('window')


const LikedScreenSearchPanel = ({onChangeText,icon}) => {
  return (
   <View style={styles.mainStyle}>
    <View style={styles.searchMainView}>
    <View style={styles.seacrhIconView}>
   <SVG.search/>
    </View>
    <TextInput
    onChangeText={onChangeText}
    placeholder='Search'
    placeholderTextColor={'#000000BF'}
    style={styles.textInputStyle}
    />
    </View>
    <View style={styles.sortIconView}>
    {icon}
    </View>
   
   </View>
   
  )
}

export default LikedScreenSearchPanel

const styles = StyleSheet.create({
    mainStyle : {
        height : height * 0.07,
        width : '100%',
        flexDirection :'row',
        justifyContent :'center',
        alignItems :'center',
        marginTop : height *0.02,
        borderRadius : 10
    },
  searchMainView : {
    width : '85%',
    height : height * 0.07,
    borderRadius : 10,
    flexDirection :'row',
    justifyContent :'center',
    alignItems: 'center',
    backgroundColor :'#FFFFFFBF'
  },
  seacrhIconView : {
    width : '20%',
       justifyContent :'center',
       alignItems :'center'
  },
  textInputStyle : {
     width : '80%',
       color : '#000000BF'
  },
  sortIconView : {
    width : '15%',
    height : height * 0.07,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  }
})