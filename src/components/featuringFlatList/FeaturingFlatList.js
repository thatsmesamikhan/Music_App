import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY, hp, wp } from '../../enums/StyleGuide'

const FeaturingFlatList = ({featureData}) => {
  return (
    <FlatList
            data={featureData}
            horizontal= {true}
            removeClippedSubviews={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle} 
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.mainView}>
                <Image source={item} style={styles.imageStyle} />
                <View style={styles.textView}>
                  <Text style={styles.text1Style}>New</Text>
                  <Text style={styles.text2Style}>ENGLISH</Text>
                  <Text style={styles.text2Style}>SONGS</Text>
                </View>
              </TouchableOpacity>
            )}
          />
  )
}

export default FeaturingFlatList

const styles = StyleSheet.create({
  containerStyle : {
    paddingLeft: wp(2), paddingRight: wp(2) 
  },
  mainView : {
    height: hp(18),
    width: wp(100),
    borderRadius: 15,
    marginTop : '6%'
  },
  imageStyle : {
    height: hp(18), width: wp(85), borderRadius: 15 
  },
  textView : {
    width: wp(35),
    height: hp(18),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: wp(4),
  },
  text1Style : {
    color: 'white'
  },
  text2Style : {
    color: 'white', fontSize: 20 
  }
})
