import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArtistsScreenHeader, MadnessScreenBtns, SongInfoButton } from '../../components'
import { IMAGES } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { SVG } from '../../assets'
import { RelaxSongData } from '../../dummies/Dummies'

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
        <MadnessScreenBtns />

        <FlatList
          data={RelaxSongData}
          renderItem={({ item }) => <SongInfoButton item={item} />}
          removeClippedSubviews={false}
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