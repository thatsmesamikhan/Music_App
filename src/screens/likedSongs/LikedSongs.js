import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets'
import { LikedScreenHeader, LikedScreenSearchPanel, LikedSongCard } from '../../components'
import { Label } from '../../common'
import { IMAGES } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { SongData } from '../../dummies/Dummies'

const {width , height} = Dimensions.get('window')

const LikedSongs = () => {
const navigation = useNavigation()
 
const SongCard = ({item}) => {
    return(
<LikedSongCard
source={item.image}
downloadIcon={item.icon1}
text1={item.text1}
text2={item.text2}
/>
    )
}

  return (
    <View style={styles.mainStyle}>
    <View style={styles.secondView}>
 <LikedScreenHeader
 leftArrowPress={() => navigation.goBack()}
 header={'Liked Songs'}
 />
<Label
text={'120 liked songs'}
textStyle={styles.labelStyle}
/>
<LikedScreenSearchPanel
icon={<SVG.sort/>}
/>
<FlatList
data={SongData}
renderItem={({item}) => <SongCard item={item}/>}
style={{width : '100%'}}
removeClippedSubviews={false}

/>






    </View>
    </View>
  )
}

export default LikedSongs

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#0D0D0D',
    },
    secondView : {
          width : '90%',
        alignItems : 'center'
    },
    labelStyle : {
        alignSelf : 'flex-start'
    }
})