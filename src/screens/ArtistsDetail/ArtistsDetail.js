import { Image, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { IMAGES } from '../../assets/images';
import { SVG } from '../../assets';
import { ArtistsScreenHeader, SongInfoButton } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { HeaderLabel } from '../../common';
import { SCREEN } from '../../enums';
const { width, height } = Dimensions.get('window'); 


const ArtistsDetail = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.mainStyle}>
      <ScrollView>
     <ArtistsScreenHeader
     arrowPress={() => navigation.goBack()}
     mainText={'MARRON 5'}
     secondText={'Artist'}
     source={IMAGES.ARTISTS_IMAGE}
     />
     <View style={{
      height : height * 0.15,
      width : '100%',
     }}>
<View style={{
  height : height * 0.04,
  width : width *1,
  justifyContent : 'center'
}}>
<Text style={{color :'#FFFFFFBF',marginLeft :'5%'}}>2.3 L monthly listeners</Text>
</View>
<View style={{
  height : height * 0.06,
  width :'100%',
  flexDirection :'row',
  alignItems :'center'
}}>
<View style={{
  height  : height * 0.06,
  width : '70%',
  flexDirection :'row',
  alignItems :'center',
}}>
        <TouchableOpacity style={{
          height:30,
          width: 75 ,
          borderRadius: 20,
          backgroundColor: '#FFFFFFBF',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginLeft :'5%'
        }}>
          <Text>Follow</Text>
        </TouchableOpacity>
        <SVG.share/>
</View>
<View style={{marginLeft  : '15%'}}>
<SVG.play_arrow_big/>
</View>
</View>
<View style={{ height: height * 0.05, width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <HeaderLabel text={'Popular releases'} />
          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.ARTISTS_SONG_LISTS)}>
            <Text style={{ color: 'white', marginRight : '5%' }}>See more</Text>
          </TouchableOpacity>
        </View>
     </View>

  <SongInfoButton
  source={IMAGES.ARTISTS_IMAGE2}
  icon={<SVG.Three_dots/>}
  Text1={'Misery'}
  Text2={'Maroon 5 - Misery'}
  />
<SongInfoButton
  source={IMAGES.ARTISTS_IMAGE3}
  icon={<SVG.Three_dots/>}
  Text1={'Payphone'}
  Text2={'Maroon 5 - Overexposed'}
  />
<SongInfoButton
  source={IMAGES.ARTISTS_IMAGE4}
  icon={<SVG.Three_dots/>}
  Text1={'Animals'}
  Text2={'Maroon 5 - V'}
  />
<SongInfoButton
  source={IMAGES.ARTISTS_IMAGE5}
  icon={<SVG.Three_dots/>}
  Text1={'Sugar'}
  Text2={'Maroon 5 - Singles'}
  />
  <SongInfoButton
  source={IMAGES.ARTISTS_IMAGE6}
  icon={<SVG.Three_dots/>}
  Text1={'The Sun'}
  Text2={'Maroon 5 - Songs About Jane'}
  />
  <SongInfoButton
  source={IMAGES.ARTISTS_IMAGE7}
  icon={<SVG.Three_dots/>}
  Text1={'What Lovers Do'}
  Text2={'Maroon 5 - Red Pill Blues Deluxe'}
  />
  </ScrollView>
    </View>
  );
};

export default ArtistsDetail;

// Styles
const styles = {
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  
};
