import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { SVG } from '../../assets';
import { ArtistsCard, SearchButton } from '../../components';
import { HeaderLabel, Label } from '../../common';
import { ACTIVE_OPACITY } from '../../enums/StyleGuide';
import { artistsList } from '../../dummies/Dummies';
import { IMAGES } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../enums';

const SearchScreen = () => {
    const navigation = useNavigation();

    const BrowseList = [
        { image: IMAGES.TAMIL },
        { image: IMAGES.INTERNATIONAL },
        { image: IMAGES.POP },
        { image: IMAGES.HIPHOP },
        { image: IMAGES.DANCE },
        { image: IMAGES.COUNTRY },
        { image: IMAGES.INDIE },
        { image: IMAGES.JAZZ },
        { image: IMAGES.PUNK },
        { image: IMAGES.ROCK },
    ];

    const BrowseCard = ({ item }) => {
        return (
            <TouchableOpacity 
                activeOpacity={ACTIVE_OPACITY} 
                style={styles.browseCard}
            >
                <Image 
                    source={item.image} 
                    style={styles.browseImage} 
                    resizeMode="cover" 
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.mainStyle}>
            <SearchButton onPress={() => navigation.navigate(SCREEN.SEARCH_TYPE)} />
            
            <View style={styles.trendingViewStyle}>
                <SVG.trending />
                <Label text={'Trending artists'} textStyle={styles.trending} />
            </View>

            <View style={styles.flatListView}> 
                <FlatList
                    data={artistsList}
                    renderItem={({ item }) => <ArtistsCard item={item} />}
                    keyExtractor={(item, index) => index.toString()} 
                    horizontal={true} 
                    removeClippedSubviews={true} 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10, paddingRight: 30 }} 
                />
            </View>

            <HeaderLabel text={'Browse'} textStyle={styles.browseHeader} />

            <View style={styles.browseContainer}>
                <FlatList
                    data={BrowseList}
                    renderItem={({ item }) => <BrowseCard item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    removeClippedSubviews={true} 
                    contentContainerStyle={{ flexGrow: 1 ,paddingBottom : 50}} 
                />
            </View>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#0D0D0D',
    },
    trendingViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 40,
        width: '50%',
        alignSelf: 'flex-start',
        marginTop: '5%',
    },
    trending: {
        marginTop: 0,
    },
    flatListView: {
        width: '100%', 
        marginTop: 10,
    },
    browseHeader: {
        fontSize: 18,
        marginTop: '5%',
    },
    browseContainer: {
        flex: 1,
        marginTop: '5%',
    },
    browseCard: {
        height: 95,
        width: '45%',
        margin: '2.5%',
        borderRadius: 20,
        overflow: 'hidden', 
    },
    browseImage: {
        height: '100%',
        width: '100%',
    },
});
