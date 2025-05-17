import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../screens/fireBase/FireBase'; // your firebase config
import * as ui from '../screens';
import { SCREEN, TAB } from '../enums';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setInitialRoute(TAB.BOTTOM); // user is logged in
      } else {
        setInitialRoute(SCREEN.REGISTER_SCREEN); // user is not logged in
      }
    });

    return unsubscribe;
  }, []);

  if (initialRoute === null) return null; // or a loading spinner

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREEN.REGISTER_SCREEN} component={ui.RegisterScreen} />
        <Stack.Screen name={SCREEN.LIBRARY_SCREEN} component={ui.LibraryScreen} />
        <Stack.Screen name={SCREEN.SEARCH_SCREEN} component={ui.SearchScreen} />
        <Stack.Screen name={SCREEN.SEARCH_TYPE} component={ui.SearchType} />
        <Stack.Screen name={SCREEN.ARTISTS_DETAIL} component={ui.ArtistsDetail} />
        <Stack.Screen name={SCREEN.MADNESS_SCREEN} component={ui.MadnessScreen} />
        <Stack.Screen name={SCREEN.ARTISTS_SONG_LISTS} component={ui.ArtistsSongLists} />
        <Stack.Screen name={SCREEN.JOHN_WICK_SCREEN} component={ui.JohnWickScreen} />
        <Stack.Screen name={SCREEN.LIKED_SONGS} component={ui.LikedSongs} />
        <Stack.Screen name={SCREEN.PLAYER} component={ui.Player} />
        <Stack.Screen name={SCREEN.DOWNLOAD_SCREEN} component={ui.DownloadScreen} />
        <Stack.Screen name={SCREEN.PLAYLISTS_SCREEN} component={ui.PlayListsScreen} />
        <Stack.Screen name={SCREEN.ARTISTS_SCREEN} component={ui.ArtistsScreen} />
        <Stack.Screen name={SCREEN.LOGIN_SCREEN} component={ui.LoginScreen} />
        <Stack.Screen name={SCREEN.SIGN_UP_SCREEN} component={ui.SignUpScreen} />
        <Stack.Screen name={SCREEN.PHONE_NUMBER_SCREEN} component={ui.PhoneNumberScreen} />
        <Stack.Screen name={SCREEN.PROFILE_SCREEN} component={ui.ProfileScreen} />
        <Stack.Screen name={SCREEN.QUEUE_SCREEN} component={ui.QueueScreen} />
        <Stack.Screen name={TAB.BOTTOM} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
