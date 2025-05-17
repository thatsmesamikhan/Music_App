import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { LikedScreenHeader, LikedSongCard } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { Label } from '../../common'
import { SVG } from '../../assets'
import { SongData } from '../../dummies/Dummies'

const DownloadScreen = () => {
    const navigation = useNavigation()
    const [searchQuery, setSearchQuery] = useState('')

    const filteredSongs = SongData.filter(item =>
        item.text1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text2.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const SongCard = ({ item }) => {
        return (
            <LikedSongCard
                source={item.image}
                text1={item.text1}
                text2={item.text2}
            />
        )
    }

    return (
        <View style={styles.mainStyle}>
            <View style={styles.secondView}>

                <LikedScreenHeader
                    leftArrowPress={() => navigation.goBack()}
                    header={'Downloads'}
                />
                <Label
                    text={'210 songs downloaded'}
                    textStyle={{ alignSelf: 'flex-start' }}
                />

                {/* Search Input */}
                <View style={styles.searchContainer}>
                    <SVG.search />
                    <TextInput
                        placeholder="Search downloads"
                        placeholderTextColor="#FFFFFF80"
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <SVG.sort />
                </View>

                <FlatList
                    data={filteredSongs}
                    renderItem={({ item }) => <SongCard item={item} />}
                    style={{ width: '100%', marginLeft: '2%' }}
                    keyExtractor={(item, index) => index.toString()}
                    removeClippedSubviews={false}
                    ListEmptyComponent={() => (
                        <Text style={{ color: '#FFFFFF80', textAlign: 'center', marginTop: 20 }}>No songs found</Text>
                    )}
                />
            </View>
        </View>
    )
}

export default DownloadScreen

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0D0D0D'
    },
    secondView: {
        width: '90%'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        height: 45,
        width: '100%'
    },
    searchInput: {
        flex: 1,
        color: 'white',
        fontSize: 16,
        marginLeft: 10
    }
})
