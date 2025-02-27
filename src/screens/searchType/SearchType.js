import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Input from '../../common/Input';
import { HeaderLabel } from '../../common';
import { SongInfoButton } from '../../components';
import { IMAGES } from '../../assets/images';
import { SVG } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../enums';

const SearchType = () => {
  const navigation = useNavigation()
  const [searchHistory, setSearchHistory] = useState([
    { id: 1, source: IMAGES.SEARCH1, text1: 'You (feat. Travis Scott)', text2: 'Song . Don Toliver', onPress :()=> navigation.navigate(SCREEN.ARTISTS_DETAIL) },
    { id: 2, source: IMAGES.SEARCH2, text1: 'John Wick: Chapter 4 (Original So...', text2: 'Album . Tyler Bates, Joel J. Richard', onPress : ()=> navigation.navigate(SCREEN.JOHN_WICK_SCREEN) },
    { id: 3, source: IMAGES.SEARCH3, text1: 'Maroon 5', text2: 'Artist' , onPress : () => navigation.navigate(SCREEN.ARTISTS_DETAIL) },
    { id: 4, source: IMAGES.SEARCH4, text1: 'Phonk Madness', text2: 'Playlist', onPress : () => navigation.navigate(SCREEN.MADNESS_SCREEN) }
  ]);

  const removeItem = (id) => {
    setSearchHistory(searchHistory.filter(item => item.id !== id));
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <View style={styles.mainStyle}>
      <Input closePress={() => navigation.goBack()}/>
      <HeaderLabel text="Recent searches" textStyle={{ fontSize: 17 }} />

      <FlatList
        data={searchHistory}
        removeClippedSubviews={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SongInfoButton
          mainPress={item.onPress}
            source={item.source}
            icon={
              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <SVG.close />
              </TouchableOpacity>
            }
            Text1={item.text1}
            Text2={item.text2}
          />
        )}
        ListFooterComponent={
          searchHistory.length > 0 ? (
            <TouchableOpacity onPress={clearHistory} style={styles.clearHistoryContainer}>
              <HeaderLabel text="Clear history" textStyle={styles.clearHistoryText} />
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
};

export default SearchType;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  clearHistoryContainer: {
    alignSelf: 'flex-end',
    marginRight: '7%',
    marginTop: 10,
  },
  clearHistoryText: {
    fontSize: 17,
    color: '#FFFFFF40',
  },
});
