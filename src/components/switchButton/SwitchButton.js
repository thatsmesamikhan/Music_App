import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SwitchButton = ({toggleSwitch,isSwitchOn}) => {
  return (
    <TouchableOpacity
                         style={[
                             styles.switchStyle,
                             { backgroundColor: isSwitchOn ? '#4A90E2' : '#FFFFFF30' } // Dynamic color change
                         ]}
                         onPress={toggleSwitch}
                     >
                         <View
                             style={[
                                 styles.switchCircle,
                                 { alignSelf: isSwitchOn ? 'flex-end' : 'flex-start' } // Move circle
                             ]}
                         />
                     </TouchableOpacity>
  )
}

export default SwitchButton

const styles = StyleSheet.create({
    switchStyle: {
        width: 40,
        height: 20,
        borderRadius: 20,
        padding: 2,
        justifyContent: 'center',
        marginLeft: 10, 
    },
    switchCircle: {
        width: 16,
        height: 16,
        borderRadius: 16,
        backgroundColor: '#FFF',
    }
})