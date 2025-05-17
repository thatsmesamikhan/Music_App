import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArtistsScreenHeader, MadnessScreenBtns, SongInfoButton } from '../../components'
import { IMAGES } from '../../assets/images'
import { RelaxSongData } from '../../dummies/Dummies'

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

export default JohnWickScreen

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
})