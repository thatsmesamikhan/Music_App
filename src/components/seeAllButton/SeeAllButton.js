import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY, hp, wp } from '../../enums/StyleGuide'

const SeeAllButton = ({text}) => {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.mainStyle}>
            <Text>{text}</Text>
          </TouchableOpacity>
  )
}

export default SeeAllButton

const styles = StyleSheet.create({
    mainStyle : {
        position: "absolute",
        top: 400 + hp(2), 
        right: wp(5), 
        height: hp(5),
        width: wp(30),
        borderRadius: 20,
        backgroundColor: "#FFFFFFBF",
        justifyContent: "center",
        alignItems: "center",
    }
})