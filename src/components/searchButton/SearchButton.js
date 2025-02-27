import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'

const SearchButton = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress} style={styles.mainStyle}>
<View style={styles.iconView}>
<SVG.search/>
</View>
<View style={styles.textView}>
<Text style={styles.textStyle}>Search songs, artist, album o...</Text>
</View>
    </TouchableOpacity>
  )
}

export default SearchButton

const styles = StyleSheet.create({
    mainStyle : {
        height : 55,
        width :'95%',
        borderRadius : 10,
        backgroundColor : '#FFFFFFBF',
        marginTop : '3%',
        justifyContent :'center',
        alignItems :'center',
        flexDirection :'row'
    },
    iconView:  {
        height : 55,
        width :'15%',
        justifyContent :'center',
        alignItems :'center',
        borderRadius : 10
    },
    textView : {
        height : 55,
        width :'85%',
        borderRadius : 10,
        justifyContent :'center'
    },
    textStyle : {
        fontSize : 17
    }
})