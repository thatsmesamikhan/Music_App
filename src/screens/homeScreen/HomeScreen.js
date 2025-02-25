import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.mainStyle}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainStyle : {
        flex :1,
        justifyContent : 'center',
        alignItems:'center'
    }
})