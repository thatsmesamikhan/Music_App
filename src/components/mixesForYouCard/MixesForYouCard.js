import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {height , width} = Dimensions.get('window')
const MixesForYouCard = ({item}) => {
  return (
    <View style={styles.mainStyle}>
      <Image source={item?.image} />
      <Text style={styles.textStyle}>{item.text}</Text>
      </View>
  )
}

export default MixesForYouCard

const styles = StyleSheet.create({
    mainStyle : {
        height : height * 0.1,
        marginLeft : width * 0.02,
    },
    textStyle : {
       color : '#FFFFFFBF',
       position :'absolute',
       alignSelf :'flex-end',
       marginTop :'100%'
    }
})