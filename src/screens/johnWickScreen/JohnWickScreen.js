import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArtistsScreenHeader, MadnessScreenBtns, SongInfoButton } from '../../components'
import { IMAGES } from '../../assets/images'
import { SVG } from '../../assets'

const JohnWickScreen = () => {
        const navigation = useNavigation()
    
  return (
    <View style={styles.mainStyle}>
   <ScrollView>
   <ArtistsScreenHeader
   arrowPress={() => navigation.goBack()}
   source={IMAGES.JOHN_WICK_MAIN_IMAGE}
   mainText={'John Wick Chapter 4'}
   secondText={'Album'}
   />
<MadnessScreenBtns/>

<SongInfoButton
  source={IMAGES.JOHN_WICK}
  icon={<SVG.Three_dots/>}
  Text1={'Big Wick Energy'}
  Text2={'Tyler Bates, Joel J. Richard - John Wick...'}
  />
<SongInfoButton
  source={IMAGES.JOHN_WICK}
  icon={<SVG.Three_dots/>}
  Text1={'Nowhere To Run'}
  Text2={'Tyler Bates, Joel J. Richard - John Wick...'}
  />
<SongInfoButton
  source={IMAGES.JOHN_WICK}
  icon={<SVG.Three_dots/>}
  Text1={'Sand Wick'}
  Text2={'Tyler Bates, Joel J. Richard - John Wick...'}
  />
<SongInfoButton
  source={IMAGES.JOHN_WICK}
  icon={<SVG.Three_dots/>}
  Text1={'Change Your Nature'}
  Text2={'Tyler Bates, Joel J. Richard - John Wick...'}
  />
  <SongInfoButton
  source={IMAGES.JOHN_WICK}
  icon={<SVG.Three_dots/>}
  Text1={'Continental Breakfast'}
  Text2={'Tyler Bates, Joel J. Richard - John Wick...'}
  />
  <SongInfoButton
  source={IMAGES.JOHN_WICK}
  icon={<SVG.Three_dots/>}
  Text1={'Wick in Osaka'}
  Text2={'Tyler Bates, Joel J. Richard - John Wick...'}
  />
 <SongInfoButton
  source={IMAGES.JOHN_WICK}
  icon={<SVG.Three_dots/>}
  Text1={'A Grave Situation'}
  Text2={'Tyler Bates, Joel J. Richard - John Wick...'}
  />
  <SongInfoButton
  source={IMAGES.JOHN_WICK}
  icon={<SVG.Three_dots/>}
  Text1={'Killa’s Teeth'}
  Text2={'Tyler Bates, Joel J. Richard - John Wick...'}
  />
  </ScrollView>

    </View>
  )
}

export default JohnWickScreen

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#0D0D0D',
    },
})