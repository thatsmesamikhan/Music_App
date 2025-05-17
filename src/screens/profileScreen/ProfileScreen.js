import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList, Image, Text, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMAGES } from '../../assets/images';
import { ProfileButtonData } from '../../dummies/Dummies';
import { LanguageSelectionModal, LogOutModal, ProfileButtonCard, ProfileEmailandPhone, ProfileScreenHeader, QualityModal, RecentlySeeMore, SignUpPress } from '../../components';
import { HeaderLabel } from '../../common';

const { height } = Dimensions.get('window');

const ProfileScreen = () => {
  const [userName, setUserName] = useState('Logan Jimmy');
  const [userEmail, setUserEmail] = useState('jim_logan01@gmail.com');
  const [userPhone, setUserPhone] = useState('123456789');

  const [modalVisible, setModalVisible] = useState(false);
  const [qualityModalVisible, setQualityModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState('HD');

  const [selectedLanguages, setSelectedLanguages] = useState({
    column1: 'International',
    column2: 'Tamil',
  });

  // Load user info from AsyncStorage on mount
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        const storedEmail = await AsyncStorage.getItem('userEmail');
        const storedPhone = await AsyncStorage.getItem('userPhone');

        if (storedName) setUserName(storedName);
        if (storedEmail) setUserEmail(storedEmail);
        if (storedPhone) setUserPhone(storedPhone);
      } catch (error) {
        console.log('Error loading user data from AsyncStorage:', error);
      }
    };

    loadUserData();
  }, []);

  return (
    <View style={styles.mainStyle}>
      <View style={styles.secondView}>
        <ProfileScreenHeader />

        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
          <View style={styles.imageMainView}>
            <View style={styles.imageView}>
              <Image source={IMAGES.USER} style={styles.imageStyle} />
            </View>
            <Text style={styles.userNameStyle}>{userName}</Text>
          </View>

          <ProfileEmailandPhone text={'Email'} info={userEmail} />
          <ProfileEmailandPhone text={'Phone Number'} info={userPhone} />

          <View style={styles.flatListView}>
            <FlatList
              data={ProfileButtonData}
              renderItem={({ item }) => <ProfileButtonCard item={item} />}
              style={styles.flatListStyle}
              removeClippedSubviews={false}
              horizontal={true}
            />
          </View>

          <HeaderLabel text={'Settings'} textStyle={styles.settingsTextStyle} />

          <RecentlySeeMore
            onPress={() => setModalVisible(true)}
            text1={'Music Language(s)'}
            text2={`${selectedLanguages.column1 === 'International' ? 'English' : selectedLanguages.column1}, ${selectedLanguages.column2}`}
            MainStyle={styles.recentlyMainStyle}
            text1Style={styles.textStyle}
          />

          <RecentlySeeMore
            onPress={() => setQualityModalVisible(true)}
            text1={'Streaming Quality'}
            text2={selectedQuality}
            MainStyle={styles.recentlyMainStyle}
            text1Style={styles.textStyle}
          />

          <SignUpPress
            text={'Logout'}
            onPress={() => setLogoutModalVisible(true)}
            MainStyle={{ marginTop: height * 0.04 }}
          />
        </ScrollView>
      </View>

      <LanguageSelectionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
      />

      <QualityModal
        qualityModalVisible={qualityModalVisible}
        setQualityModalVisible={setQualityModalVisible}
        selectedQuality={selectedQuality}
        setSelectedQuality={setSelectedQuality}
      />

      <LogOutModal
        logoutModalVisible={logoutModalVisible}
        setLogoutModalVisible={setLogoutModalVisible}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = {
  mainStyle: { flex: 1, alignItems: 'center', backgroundColor: '#0D0D0D' },
  secondView: { flex: 1, width: '90%', alignItems: 'center' },
  scrollViewContent: { flexGrow: 1, alignItems: 'center', paddingBottom: height * 0.1 },
  imageMainView: { height: height * 0.17, width: '40%', marginTop: height * 0.04, alignItems: 'center' },
  imageView: { height: 110, width: 110 },
  imageStyle: { height: '100%', width: '100%' },
  userNameStyle: { color: '#FFFFFFBF', fontWeight: 'bold', fontSize: 17 },
  flatListView: { height: height * 0.14, width: '100%', marginTop: height * 0.02 },
  settingsTextStyle: { marginLeft: 0, fontSize: 30, marginTop: height * 0.03 },
  recentlyMainStyle: { marginTop: height * 0.03 },
  textStyle: { fontSize: 18 },
};
