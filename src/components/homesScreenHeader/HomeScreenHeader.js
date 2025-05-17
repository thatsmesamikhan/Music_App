import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ACTIVE_OPACITY, hp } from '../../enums/StyleGuide';
import { IMAGES } from '../../assets/images';

const HomeScreenHeader = ({ imagePress, userName }) => {
    return (
        <View style={styles.mainStyle}>
            <View style={styles.firstView}>
                <View style={styles.hiRow}>
                    <Text style={styles.hiText}>Hi, {userName}</Text>
                    <Text style={styles.handEmoji}>👋</Text>
                </View>
                <Text style={styles.textStyle}>Good Evening</Text>
            </View>

            <View style={styles.secondView}>
                {/* Assuming you have notification image/icon */}
                <Image source={IMAGES.NOTIFICATION} style={styles.notificationIcon} />
                <TouchableOpacity onPress={imagePress} activeOpacity={ACTIVE_OPACITY}>
                    <Image source={IMAGES.USER} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
    mainStyle: {
        height: hp(8),
        width: '100%',
        marginTop: hp(3),
        flexDirection: 'row',
    },
    firstView: {
        height: hp(8),
        width: '60%',
        justifyContent: 'center',
    },
    hiRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hiText: {
        color: 'grey',
        fontSize: 16,
    },
    handEmoji: {
        marginLeft: 6,
        fontSize: 18,
    },
    textStyle: {
        color: '#FFFFFFBF',
        fontSize: 20,
    },
    secondView: {
        height: hp(8),
        width: '40%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    notificationIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
});
