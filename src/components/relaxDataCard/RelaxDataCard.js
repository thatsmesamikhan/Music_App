import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../enums/StyleGuide'
import { IMAGES } from '../../assets/images'
import { RelaxSongData } from '../../dummies/Dummies'
import SongInfoButton from '../songInfoButton'
import { SVG } from '../../assets'

const RelaxDataCard = () => {
  return (
    <View
      style={styles.mainStyle} >
      <View style={styles.firstView}>
        <Image
          source={IMAGES.IMAGE_5}
          style={styles.imageStyle}
        />
        <View>
          <Text style={styles.songNameStyle}>Peace</Text>
          <Text style={styles.songDetailStyle}>22 songs</Text>
          <View style={styles.heartAndDotsMainView}>

            <SVG.favorite />
            <SVG.Three_dots />
          </View>
        </View>
        <View style={styles.playButtonStyle}>
          <SVG.play_arrow_big />
        </View>
      </View>
      <FlatList
        data={RelaxSongData}
        renderItem={({ item }) => <SongInfoButton item={item} />}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
      />

    </View>
  )
}

export default RelaxDataCard

const styles = StyleSheet.create({
  mainStyle: {
    height: 400,
    width: wp(80),
    backgroundColor: "#FFFFFF1F",
    borderRadius: 15,
    padding: wp(3),
    marginRight: wp(5), // Space between cards
  },
  firstView: {
    flexDirection: "row", alignItems: "center"
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: wp(3),
  },
  songNameStyle: {
    fontWeight: "bold", fontSize: 20, color: "#FFFFFFBF"
  },
  songDetailStyle: {
    color: "#FFFFFF80", fontSize: 12
  },
  heartAndDotsMainView: {
    flexDirection: "row", marginTop: hp(1), justifyContent: 'space-between'
  },
  playButtonStyle: {
    marginLeft: "auto"
  }
})