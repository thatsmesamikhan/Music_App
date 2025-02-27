import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LikedScreenHeader, LikedScreenSearchPanel } from '../../components'
import { Label } from '../../common'
import { SVG } from '../../assets'
import { IMAGES } from '../../assets/images'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'

const {height , width} = Dimensions.get('window')

const ArtistsScreen = () => {
    const navigation = useNavigation()
 
    const ArtistsDetails = [
        {text : 'One Republic' , image : IMAGES.CIRCLE_IMAGE1},
        {text : 'Coldplay' , image : IMAGES.CIRCLE_IMAGE2},
        {text : 'The Chainsm...' , image : IMAGES.CIRCLE_IMAGE3},
        {text : 'Linkin Park' , image : IMAGES.CIRCLE_IMAGE4},
        {text : 'Sia' , image : IMAGES.CIRCLE_IMAGE5},
        {text : 'Ellie Goulding' , image : IMAGES.CIRCLE_IMAGE6},
        {text : 'Katy Perry' , image : IMAGES.CIRCLE_IMAGE7},
        {text : 'Maroon 5' , image : IMAGES.CIRCLE_IMAGE8},
    ]

 const ArtistsCard = ({item}) => {
    return(
<TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={{
    height : height * 0.15,
    width : width * 0.31 , 
    marginTop : height * 0.02,
justifyContent :'center',
alignItems :'center',
}}>
<View style={{
    height : 100,
    width : 100,
    borderRadius : 50,
}}>
<Image resizeMode='cover' source={item.image} style={{height : '100%',width :'100%'}}/>

</View>
<Text style={{color : '#FFFFFFBF'}}>{item.text}</Text>
</TouchableOpacity>
    )
 }

  return (
    <View style={styles.mainStyle}>
    <View style={styles.secondView}>

    <LikedScreenHeader
 leftArrowPress={() => navigation.goBack()}
 header={'Artists Following'}
 />
<Label
text={'8 artists following'}
textStyle={styles.labelStyle}
/>
<LikedScreenSearchPanel
icon={<SVG.sort/>}
/>

 <FlatList
 data={ArtistsDetails}
 renderItem={({item}) => <ArtistsCard item={item}/>}
 numColumns={3}
 removeClippedSubviews={false}
 />

    </View>
    </View>
  )
}

export default ArtistsScreen

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#0D0D0D',
    },
    secondView : {
        flex :1,
        width : '90%'
    },
    labelStyle : {
        alignSelf : 'flex-start'
    }
})