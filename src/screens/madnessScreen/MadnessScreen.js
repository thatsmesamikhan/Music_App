import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArtistsScreenHeader, MadnessScreenBtns, SongInfoButton } from '../../components'
import { IMAGES } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { SVG } from '../../assets'

const MadnessScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.mainStyle}>
        <ScrollView>
   <ArtistsScreenHeader
   arrowPress={() => navigation.goBack()}
   source={IMAGES.MADNESS1}
   mainText={'Phonk Madness'}
   secondText={'Playlist'}
   />
<MadnessScreenBtns/>

<SongInfoButton
  source={IMAGES.MADNESS2}
  icon={<SVG.Three_dots/>}
  Text1={'METAMORPHOSIS'}
  Text2={'INTERWORLD'}
  />
<SongInfoButton
  source={IMAGES.MADNESS3}
  icon={<SVG.Three_dots/>}
  Text1={'Murder In My Mind'}
  Text2={'Kordhell'}
  />
<SongInfoButton
  source={IMAGES.MADNESS4}
  icon={<SVG.Three_dots/>}
  Text1={'GigaChad Theme'}
  Text2={'g3ox_em'}
  />
<SongInfoButton
  source={IMAGES.MADNESS5}
  icon={<SVG.Three_dots/>}
  Text1={'SHADOW'}
  Text2={'ONIMXRU, SMITHMANE'}
  />
  <SongInfoButton
  source={IMAGES.MADNESS6}
  icon={<SVG.Three_dots/>}
  Text1={'Crystals'}
  Text2={'Isolate.exe'}
  />
  <SongInfoButton
  source={IMAGES.MADNESS7}
  icon={<SVG.Three_dots/>}
  Text1={'DEMONS IN MY SOUL'}
  Text2={'SCXR SOUL, Sx1nxwy'}
  />
 <SongInfoButton
  source={IMAGES.MADNESS8}
  icon={<SVG.Three_dots/>}
  Text1={'Scopin'}
  Text2={'Kordhell'}
  />
  <SongInfoButton
  source={IMAGES.MADNESS9}
  icon={<SVG.Three_dots/>}
  Text1={'GHOST!'}
  Text2={'SCXR SOUL, Sx1nxwy'}
  />
  </ScrollView>
    </View>
  )
}

export default MadnessScreen

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#0D0D0D',
    },
})