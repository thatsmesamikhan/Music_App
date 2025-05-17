import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/images';
import { SVG } from '../../assets';
import { ACTIVE_OPACITY } from '../../enums/StyleGuide';
import { SongInfoButton } from '../../components';
import { RelaxSongData } from '../../dummies/Dummies';
const { width, height } = Dimensions.get('window');

const ArtistsSongLists = () => {
    return (
        <View style={styles.mainStyle}>
            <ScrollView>

                <View style={{
                    height: height * 0.12,
                    width: '100%',
                }}>
                    <Image source={IMAGES.MAROON} style={{ height: '100%', width: '100%' }} />
                </View>
                <View style={{
                    position: 'absolute',
                    width: '100%',
                    height: height * 0.06,
                    marginTop: height * 0.03,
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{ marginLeft: '5%' }}>
                        <SVG.downArrow />
                    </View>
                    <Text style={{ color: '#FFFFFFBF', marginLeft: '28%', fontSize: 20, fontWeight: 'bold' }}>All Songs</Text>
                </View>

                <View style={{
                    height: height * 0.08,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        height: height * 0.08,
                        width: '35%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <Text style={{ color: '#FFFFFFBF', fontWeight: 'bold' }}>20 songs</Text>
                        <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                            <SVG.download />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: height * 0.08,
                        width: '25%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <SVG.play_arrow_big />
                    </View>


                </View>
                <FlatList
                    data={RelaxSongData}
                    renderItem={({ item }) => <SongInfoButton item={item} />}
                    removeClippedSubviews={false}
                />
            </ScrollView>
        </View>
    )
}

export default ArtistsSongLists

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
    },
})