import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Input from '../../common/Input';
import { HeaderLabel } from '../../common';
import { SongInfoButton } from '../../components';
import { IMAGES } from '../../assets/images';
import { SVG } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../enums';

const SearchType = () => {
  const navigation = useNavigation();

  const searchHistory = [
    { id: 1, source: IMAGES.SEARCH1, Text1: 'You (feat. Travis Scott)', Text2: 'Song . Don Toliver', onPress: () => navigation.navigate(SCREEN.ARTISTS_DETAIL), icon : <SVG.close />},
    { id: 2, source: IMAGES.SEARCH2, Text1: 'John Wick: Chapter 4 (Original So...', Text2: 'Album . Tyler Bates, Joel J. Richard', onPress: () => navigation.navigate(SCREEN.JOHN_WICK_SCREEN), icon : <SVG.close />},
    { id: 3, source: IMAGES.SEARCH3, Text1: 'Maroon 5', Text2: 'Artist', onPress: () => navigation.navigate(SCREEN.ARTISTS_DETAIL), icon : <SVG.close />},
    { id: 4, source: IMAGES.SEARCH4, Text1: 'Phonk Madness', Text2: 'Playlist', onPress: () => navigation.navigate(SCREEN.MADNESS_SCREEN), icon : <SVG.close />},
  ];


  return (
    <View style={styles.mainStyle}>
      <Input closePress={() => navigation.goBack()} />
      <HeaderLabel text="Recent searches" textStyle={styles.headerText} />

      <FlatList
        data={searchHistory}
        keyExtractor={(item) => item.id.toString()}
        removeClippedSubviews={false}
        renderItem={({ item }) => (
          <SongInfoButton
            item={item}
            mainPress={item.onPress}
           
          />
        )}

        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchType;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: '5%',
    // alignItems: 'center',  <-- remove this if present, because it centers content horizontally and might break layout
  },
  headerText: {
    fontSize: 17,
    marginVertical: 10,
    color: '#FFFFFF',  // Make sure header text is visible on dark background
  },
});
