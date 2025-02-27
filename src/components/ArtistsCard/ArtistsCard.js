import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'

const ArtistsCard = ({item}) => {
  return (
    <TouchableOpacity
    activeOpacity={ACTIVE_OPACITY} 
    style={styles.mainStyle}
>
    {item.svg}
    <Text style={styles.textStyle}>{item.text}</Text>
</TouchableOpacity>
  )
}

export default ArtistsCard

const styles = StyleSheet.create({
    mainStyle : {
        height: 95,
        width: 75, 
        alignItems: 'center',
        marginHorizontal: 5,
    },
    textStyle : {
        fontSize: 10, color: '#FFFFFFBF', textAlign: 'center'
    }
})