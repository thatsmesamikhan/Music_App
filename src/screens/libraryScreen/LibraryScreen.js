import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeaderLabel } from '../../common'
import { SVG } from '../../assets'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'
import {  SongInfoButton } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { SCREEN } from '../../enums'
import { RelaxSongData } from '../../dummies/Dummies'

const { width, height } = Dimensions.get('window')

const LibraryScreen = () => {
  const navigation = useNavigation()
  const LibraryData = [
    { text1: 'Liked Songs', text2: '120 songs', icon: <SVG.favorite />, onPress: () => navigation.navigate(SCREEN.LIKED_SONGS) },
    { text1: 'Downloads', text2: '210 songs', icon: <SVG.download />, onPress: () => navigation.navigate(SCREEN.DOWNLOAD_SCREEN) },
    { text1: 'Playlists', text2: '12 playlists', icon: <SVG.queue />, onPress: () => navigation.navigate(SCREEN.PLAYLISTS_SCREEN) },
    { text1: 'Artists', text2: '3 artists', icon: <SVG.artists />, onPress: () => navigation.navigate(SCREEN.ARTISTS_SCREEN) },
  ]

  const DataCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={item.onPress} activeOpacity={ACTIVE_OPACITY} style={{
        height: height * 0.15,
        width: '45%',
        backgroundColor: 'rgba(128, 128, 128, 0.12)',
        borderRadius: 15,
        marginTop: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: height * 0.015,
        elevation: 15,

      }}>
        <View style={{
          width: '80%',

        }}>
          {item.icon}
          <Text style={{ color: '#FFFFFF', fontSize: 17, marginTop: height * 0.01 }}>{item.text1}</Text>
          <Text style={{ color: '#FFFFFF80', fontSize: 12, marginTop: height * 0.01 }}>{item.text2}</Text>
        </View>
      </TouchableOpacity>

    )
  }

  return (
    <View style={styles.mainStyle}>
      <View style={styles.secondView}>
        <HeaderLabel
          text={'Your Library'}
          textStyle={{ marginTop: height * 0.03 }}
        />

        <FlatList
          data={LibraryData}
          renderItem={({ item }) => <DataCard item={item} />}
          numColumns={2}
          removeClippedSubviews={false}
          style={{ width: '100%' }}
          ListFooterComponent={() => (
            <View style={{ width: '100%' }}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
                <HeaderLabel text="Recently Played" />
                <TouchableOpacity>
                  <Text style={{ color: 'white', marginRight: '5%', fontSize: 18 }}>See more</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={RelaxSongData}
                renderItem={({ item }) => <SongInfoButton item={item} />}
              />
            </View>
          )}

        />



      </View>
    </View>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  secondView: {
    width: '95%',
    alignItems: 'center'
  }
})