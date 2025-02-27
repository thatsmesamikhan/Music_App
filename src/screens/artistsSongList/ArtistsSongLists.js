import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/images';
import { SVG } from '../../assets';
import { ACTIVE_OPACITY } from '../../enums/StyleGuide';
import { SongInfoButton } from '../../components';
const { width, height } = Dimensions.get('window'); 

const ArtistsSongLists = () => {
  return (
    <View style={styles.mainStyle}>
<ScrollView>

   <View style={{
       height : height * 0.12,
       width :'100%',
    }}>
  <Image source={IMAGES.MAROON} style={{height : '100%',width :'100%'}}/>
   </View>
<View style={{
    position : 'absolute',
    width :'100%',
    height : height * 0.06,
    marginTop : height * 0.03,
    alignItems :'center',
    flexDirection :'row'
}}>
    <View style={{marginLeft :'5%'}}>
<SVG.downArrow/>
</View>
<Text style={{color : '#FFFFFFBF',marginLeft :'28%',fontSize : 20,fontWeight :'bold'}}>All Songs</Text>
</View>

<View style={{
    height : height * 0.08,
    width :'100%',
    flexDirection :'row',
    justifyContent :'space-between'
}}>
<View style={{
    height : height * 0.08,
    width : '35%',
    flexDirection :'row',
    alignItems :'center',
    justifyContent :'space-evenly'
}}>
<Text style={{color : '#FFFFFFBF',fontWeight :'bold'}}>20 songs</Text>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.download/>
</TouchableOpacity>
</View>
<View style={{
    height : height * 0.08,
    width : '25%',
    justifyContent :'center',
    alignItems :'center'
}}>
<SVG.play_arrow_big/>
</View>


</View>
<SongInfoButton
source={IMAGES.LISTIMAGE1}
Text1={'Bet My Heart'}
Text2={'Maroon 5 - Red Pill Blue Deluxe'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE2}
Text1={'Misery'}
Text2={'Maroon 5 - Misery'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE3}
Text1={'Plastic Rose'}
Text2={'Maroon 5 - Red Pill Blue Deluxe'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE4}
Text1={'Shoot Love'}
Text2={'Maroon 5 - V Asia Tour Edition'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE5}
Text1={'Lost Stars'}
Text2={'Maroon 5 - V Asia Tour Edition'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE6}
Text1={'Wake Up Call'}
Text2={'Maroon 5 - It Won’t Be Soon Before Long'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE7}
Text1={'Denim Jacket'}
Text2={'Maroon 5 - Red Pill Blue Deluxe'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE8}
Text1={'Beautiful Goodbye'}
Text2={'Maroon 5 - Overexposed Deluxe'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE9}
Text1={'Payphone'}
Text2={'Maroon 5 - Overexposed'}
icon={<SVG.Three_dots/>}
/>
<SongInfoButton
source={IMAGES.LISTIMAGE10}
Text1={'In Your Pocket'}
Text2={'Maroon 5 - V'}
icon={<SVG.Three_dots/>}
/>
</ScrollView>
    </View>
  )
}

export default ArtistsSongLists

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#0D0D0D',
    },
})