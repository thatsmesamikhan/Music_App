import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hp, wp } from '../../enums/StyleGuide';
import { BottomSongPlay, CategoryButtonCard, FeaturingFlatList, HomeScreenHeader, MixesForYouCard, RecentDataCard, RecentlySeeMore, RelaxDataCard, SeeAllButton } from '../../components';
import { HeaderLabel } from '../../common';
import { IMAGES } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../enums';
import { ButtonArray, MixesList, RecentData } from '../../dummies/Dummies';

const { height, width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState('For you');
  const [bottomSongPlay, setBottomSongPlay] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [userName, setUserName] = useState('Logan Jimmy');

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        if (storedName) setUserName(storedName);
      } catch (error) {
        console.log('Error loading user data from AsyncStorage:', error);
      }
    };

    loadUserData();
  }, []);

  const ForYou = () => (
    <>
      <ScrollView>
        <HeaderLabel text={'Featuring Today'} />
        <FeaturingFlatList featureData={[IMAGES.FEATURE_IMAGE, IMAGES.FEATURE_IMAGE]} />
        <RecentlySeeMore text1={'Recently Played'} text2={'See more'} />

        <FlatList
          data={RecentData}
          renderItem={({ item }) => <RecentDataCard setBottomSongPlay={setBottomSongPlay} setSelectedSong={setSelectedSong} item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: hp(1) }}
        />

        <HeaderLabel text={'Mixes for you'} />
        <View style={styles.mixesFlatlistMainView}>
          <View style={styles.mixesSecondView}>
            <FlatList
              data={MixesList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <MixesForYouCard item={item} />}
              contentContainerStyle={styles.mixesContainer}
            />
          </View>
        </View>
      </ScrollView>

      {bottomSongPlay && (
        <BottomSongPlay
          onPress={() => navigation.navigate(SCREEN.PLAYER, { selectedSong: selectedSong })}
          song={selectedSong}
        />
      )}
    </>
  );

  const Relax = () => (
    <>
      <HeaderLabel text={"Today's Refreshing Song-Recommendations"} />
      <View style={styles.relaxFlatListView}>
        <FlatList
          data={[1, 2]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RelaxDataCard item={item} />}
        />
        <SeeAllButton text={'See All'} />
      </View>
    </>
  );

  const Workout = () => (
    <>
      <HeaderLabel text={'Get Moving with Workout Vibes'} />
      <View style={styles.relaxFlatListView}>
        <FlatList
          data={[1, 2, 3]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RelaxDataCard item={item} />}
        />
        <SeeAllButton text={'See All'} />
      </View>
    </>
  );

  const Travel = () => (
    <>
      <HeaderLabel text={'Songs for Your Next Adventure'} />
      <View style={styles.relaxFlatListView}>
        <FlatList
          data={[1, 2]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RelaxDataCard item={item} />}
        />
        <SeeAllButton text={'See All'} />
      </View>
    </>
  );

  return (
    <View style={styles.mainStyle}>
      <View style={styles.secondView}>
        <HomeScreenHeader
          imagePress={() => navigation.navigate(SCREEN.PROFILE_SCREEN)}
          userName={userName}
        />

        <View style={styles.categoryFlatListView}>
          <FlatList
            data={ButtonArray}
            renderItem={({ item }) => (
              <CategoryButtonCard selectedButton={selectedButton} setSelectedButton={setSelectedButton} item={item} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {selectedButton === 'For you' && <ForYou />}
        {selectedButton === 'Relax' && <Relax />}
        {selectedButton === 'Workout' && <Workout />}
        {selectedButton === 'Travel' && <Travel />}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D'
  },
  secondView: {
    flex: 1,
    width: '90%',
    alignItems: 'center'
  },
  categoryFlatListView: {
    flexDirection: 'row',
    height: hp(6),
    width: '100%',
    marginTop: hp(2)
  },
  mixesFlatlistMainView: {
    height: height * 0.255,
    width: '100%',
    backgroundColor: '#0D0D0D'
  },
  mixesSecondView: {
    height: height * 0.255,
    width: '100%',
    backgroundColor: '#0D0D0D',
    paddingVertical: hp(2)
  },
  mixesContainer: {
    paddingHorizontal: width * 0.01
  },
  relaxFlatListView: {
    paddingRight: wp(5),
    marginTop: height * 0.03
  }
});
