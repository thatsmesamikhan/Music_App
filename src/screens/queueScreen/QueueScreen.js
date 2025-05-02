import { Dimensions, FlatList, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LikedSongCard, QueueScreenHeader, RecentlySeeMore, SongInfoButton, SwitchButton } from '../../components'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderLabel } from '../../common'
import { QueueSongData } from '../../dummies/Dummies'
import { SVG } from '../../assets'

const { height, width } = Dimensions.get('window')

const QueueScreen = () => {
    const route = useRoute()
    const { selectedSong } = route.params
    const navigation = useNavigation()

    const [isSwitchOn, setIsSwitchOn] = useState(false) // State for switch

    const toggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn) // Toggle state on press
    }

    const SongCard = ({ item }) => (
        <LikedSongCard
            source={item.image}
            downloadIcon={item.icon1}
            text1={item.text1}
            text2={item.text2}
            equalTo={item.icon2}
            linesIcon={item.icon3}
        />
    )
    const SecondSongCard = ({ item }) => (
        <SongInfoButton
            source={item.image}
            Text1={item.text1}
            Text2={item.text2}
            icon={<SVG.Three_dots />}
        />
    )
    return (
        <View style={styles.mainStyle}>
            <QueueScreenHeader source={selectedSong.image} text2={selectedSong.text} />
            <View style={styles.secondView}>

                <HeaderLabel text={'In Queue'} textStyle={{ marginTop: height * 0.02 }} />
                <ScrollView>
                    <FlatList
                        data={QueueSongData}
                        renderItem={({ item }) => <SongCard item={item} />}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ width: '100%', flexGrow: 0 }}
                        contentContainerStyle={{ paddingBottom: height * 0.01 }}
                        removeClippedSubviews={false}
                    />

                    <View style={styles.switchContainer}>
                        <RecentlySeeMore MainStyle={{ marginTop: 0 }} text1={'Auto-recommendations'} />

                        <SwitchButton
                            toggleSwitch={toggleSwitch}
                            isSwitchOn={isSwitchOn}
                        />



                    </View>


                    <FlatList
                        data={QueueSongData}
                        renderItem={({ item }) => <SecondSongCard item={item} />}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ width: '100%', flexGrow: 0 }}
                        contentContainerStyle={{ paddingBottom: height * 0.01 }}
                        removeClippedSubviews={false}
                    />


                </ScrollView>

            </View>
        </View>
    )
}

export default QueueScreen

const styles = {
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
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        width: '85%',
        paddingVertical: 5,
    },

}
