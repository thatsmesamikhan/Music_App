import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { LikedScreenHeader, LikedScreenSearchPanel } from '../../components'
import { Label } from '../../common'
import { useNavigation } from '@react-navigation/native'
import { SVG } from '../../assets'
import { IMAGES } from '../../assets/images'

const { height } = Dimensions.get('window')

const PlayListsScreen = () => {
    const navigation = useNavigation()
    const [searchQuery, setSearchQuery] = useState('')

    const PlayListsData = [
        { text1: 'Maroon 5 Songs', text2: 'Playlist . Myself', image: IMAGES.PLAY1 },
        { text1: 'Phonk Madness', text2: 'Playlist', image: IMAGES.PLAY2 },
        { text1: 'Gryffin Collections', text2: 'Playlist . Myself', image: IMAGES.PLAY3 },
        { text1: 'Playlist . Myself', text2: 'Album', image: IMAGES.PLAY4 },
        { text1: 'Maroon 5 Songs', text2: 'Maroon 5 Songs', image: IMAGES.PLAY5 },
        { text1: 'Gryffin Collections', text2: 'Playlist . Myself', image: IMAGES.PLAY6 },
    ]

    const filteredData = PlayListsData.filter(item =>
        item.text1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text2.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const PlayListsCard = ({ item }) => {
        return (
            <View style={{
                height: height * 0.230,
                width: '48%',
                borderRadius: 8,
                marginTop: height * 0.04,
                marginLeft: '2%'
            }}>
                <Image source={item.image} style={{ width: '100%', borderRadius: 8, height: '75%' }} resizeMode='cover' />
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', marginTop: 5 }}>{item.text1}</Text>
                <Text style={{ color: '#FFFFFF80' }}>{item.text2}</Text>
            </View>
        )
    }

    return (
        <View style={styles.mainStyle}>
            <View style={styles.secondView}>
                <LikedScreenHeader
                    leftArrowPress={() => navigation.goBack()}
                    header={'Playlists'}
                />
                <Label
                    text={'12 playlists'}
                    textStyle={styles.labelStyle}
                />

                {/* Search Input */}
                <View style={styles.searchContainer}>
                    <SVG.search />
                    <TextInput
                        placeholder="Search playlists"
                        placeholderTextColor="#FFFFFF80"
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <SVG.add />
                </View>

                <View style={styles.recentsView}>
                    <SVG.sort />
                    <Text style={styles.recentsText}>Recents</Text>
                </View>

                <FlatList
                    data={filteredData}
                    renderItem={({ item }) => <PlayListsCard item={item} />}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    removeClippedSubviews={false}
                    style={{ width: '100%' }}
                    ListEmptyComponent={() => (
                        <Text style={{ color: '#FFFFFF80', textAlign: 'center', marginTop: 20 }}>No playlists found</Text>
                    )}
                />
            </View>
        </View>
    )
}

export default PlayListsScreen

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
    },
    secondView: {
        flex: 1,
        width: '90%'
    },
    recentsView: {
        height: height * 0.035,
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * 0.015
    },
    recentsText: {
        color: '#FFFFFFBF', fontSize: 17
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: height * 0.02,
        height: 45
    },
    searchInput: {
        flex: 1,
        color: 'white',
        fontSize: 16,
        marginLeft: 10
    }
})
