import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LikedScreenHeader, LikedScreenSearchPanel, LikedSongCard } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { Label } from '../../common'
import { SVG } from '../../assets'
import { SongData } from '../../dummies/Dummies'

const DownloadScreen = () => {
    const navigation = useNavigation()
  
    const SongCard = ({item}) => {
        return(
    <LikedSongCard
    source={item.image}
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
 header={'Downloads'}
 />
<Label
text={'210 songs downloaded'}
textStyle={{alignSelf : 'flex-start'}}
/>
<LikedScreenSearchPanel
icon={<SVG.sort/>}
/>

<FlatList
data={SongData}
renderItem={({item}) => <SongCard item={item}/>}
style={{width : '100%',marginLeft :'2%'}}
removeClippedSubviews={false}

/>


    </View>
 </View>
  )
}

export default DownloadScreen

const styles = StyleSheet.create({
    mainStyle : {
        flex :1,
        alignItems :'center',
        backgroundColor :'#0D0D0D'
    },
    secondView : {
         width : '90%'
    }
})