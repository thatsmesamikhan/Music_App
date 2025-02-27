import React from 'react'
import * as ui from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SCREEN, TAB } from '../enums'
import BottomTab from './BottomTab'

const RootNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name={SCREEN.REGISTER_SCREEN} component={ui.RegisterScreen}/>
            <Stack.Screen name={SCREEN.LIBRARY_SCREEN} component={ui.LibraryScreen}/>
            <Stack.Screen name={SCREEN.SEARCH_SCREEN} component={ui.SearchScreen}/>
            <Stack.Screen name={SCREEN.SEARCH_TYPE} component={ui.SearchType}/>
            <Stack.Screen name={SCREEN.ARTISTS_DETAIL} component={ui.ArtistsDetail}/>
            <Stack.Screen name={SCREEN.MADNESS_SCREEN} component={ui.MadnessScreen}/>
            <Stack.Screen name={SCREEN.ARTISTS_SONG_LISTS} component={ui.ArtistsSongLists}/>
            <Stack.Screen name={SCREEN.JOHN_WICK_SCREEN} component={ui.JohnWickScreen}/>
            <Stack.Screen name={SCREEN.LIKED_SONGS} component={ui.LikedSongs}/>
            <Stack.Screen name={SCREEN.PLAYER} component={ui.Player}/>
            <Stack.Screen name={SCREEN.DOWNLOAD_SCREEN} component={ui.DownloadScreen}/>
            <Stack.Screen name={SCREEN.PLAYLISTS_SCREEN} component={ui.PlayListsScreen}/>
            <Stack.Screen name={SCREEN.ARTISTS_SCREEN} component={ui.ArtistsScreen}/>
            <Stack.Screen name={TAB.BOTTOM} component={BottomTab}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator

