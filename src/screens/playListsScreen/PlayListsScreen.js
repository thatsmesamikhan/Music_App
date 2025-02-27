import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LikedScreenHeader, LikedScreenSearchPanel } from '../../components'
import { Label } from '../../common'
import { useNavigation } from '@react-navigation/native'
import { SVG } from '../../assets'
import { IMAGES } from '../../assets/images'

const {height} = Dimensions.get('window')
const PlayListsScreen = () => {
    const navigation = useNavigation()
 
    const PlayListsData = [
        {text1 : 'Maroon 5 Songs', text2 : 'Playlist . Myself', image : IMAGES.PLAY1},
        {text1 : 'Phonk Madness', text2 : 'Playlist', image : IMAGES.PLAY2},
        {text1 : 'Gryffin Collections', text2 : 'Playlist . Myself', image : IMAGES.PLAY3},
        {text1 : 'Playlist . Myself', text2 : 'Album', image : IMAGES.PLAY4},
        {text1 : 'Maroon 5 Songs', text2 : 'Maroon 5 Songs', image : IMAGES.PLAY5},
        {text1 : 'Gryffin Collections', text2 : 'Playlist . Myself', image : IMAGES.PLAY6},
    ]

const PlayListsCard = ({item}) => {
    return(
<View style={{
    height : height * 0.230,
    width : '48%',
    borderRadius : 8,
    marginTop : height *0.04,
    marginLeft : '2%'
}}>
<Image source={item.image} style={{width : '100%', borderRadius : 8}}/>
<Text style={{color : '#FFFFFF' , fontWeight : 'bold'}}>{item.text1}</Text>
<Text style={{color : '#FFFFFF80'}}>{item.text2}</Text>

</View>
    )
}

  return (
    <View style={styles.mainStyle}>
        <View style={styles.secondView}>
        <LikedScreenHeader
 leftArrowPress={() => navigation.goBack()}
 header={'Playlists'}
 />
<Label
text={'12 playlists'}
textStyle={styles.labelStyle}
/>
<LikedScreenSearchPanel
icon={<SVG.add/>}
/>
<View style={styles.recentsView}>
<SVG.sort/>
<Text style={styles.recentsText}>Recents</Text>
</View>

<FlatList
data={PlayListsData}
renderItem={({item}) => <PlayListsCard item={item}/>}
numColumns={2}
removeClippedSubviews={false}
style={{width :'100%'}}

/>
        </View>
    </View>
  )
}

export default PlayListsScreen

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
    recentsView : {
        height : height * 0.035,
width : '30%',
flexDirection :'row',
justifyContent : 'space-between',
alignItems :'center',
marginTop : height * 0.015
    },
    recentsText : {
        color : '#FFFFFFBF',fontSize : 17
    }
})