import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ACTIVE_OPACITY, hp, wp } from '../../enums/StyleGuide';
import { BottomSongPlay, HomeScreenHeader, SongInfoButton } from '../../components';
import { HeaderLabel } from '../../common';
import { IMAGES } from '../../assets/images';
import { SVG } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../enums';

const HomeScreen = () => {
  const navigation = useNavigation()
  const [selectedButton, setSelectedButton] = useState('For you');
  const [bottomSongPlay , setBottomSongPlay] = useState(false)
  const [selectedSong, setSelectedSong] = useState(null);


  const ButtonArray = [
    { text: 'For you' },
    { text: 'Relax' },
    { text: 'Workout' },
    { text: 'Travel' },
  ];

  const RecentData = [
    { text: 'Inside Out', image: IMAGES.IMAGE_1 },
    { text: 'Young', image: IMAGES.IMAGE_2 },
    { text: 'Beach House', image: IMAGES.IMAGE_3 },
    { text: 'Kills Yourself', image: IMAGES.IMAGE_4 },
  ];

  const MixesList = [
    {text : 'Mix 1', image : IMAGES.ALBUM1},
    {text : 'Mix 2', image : IMAGES.ALBUM2},
    {text : 'Mix 3', image : IMAGES.ALBUM3},
  ]

 const MixCard = ({item}) => {
  return(
    <View style={{
      height : 95,
      width :'25%',
     marginLeft : 35,
    }}>
    <Image source={item.image} />
    <Text style={{color : '#FFFFFFBF',position :'absolute',alignSelf :'flex-end',marginTop :'100%'}}>{item.text}</Text>
    </View>
  )
 }

  const BtnCard = ({ item }) => {
    const isSelected = selectedButton === item.text;
    return (
      <TouchableOpacity 
        onPress={() => setSelectedButton(item.text)}
        activeOpacity={ACTIVE_OPACITY} 
        style={{
          height: hp(5),
          width: wp(25),
          borderRadius: 20,
          backgroundColor: isSelected ? '#FFFFFF40' : '#0D0D0D',
          marginLeft: wp(2),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: isSelected ? '#FFFFFF' : '#FFFFFF80' }}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  const RecentCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setSelectedSong(item); 
        setBottomSongPlay(true)}} activeOpacity={ACTIVE_OPACITY} style={{
        height: hp(12),
        width: wp(22),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: wp(5),
        marginTop: hp(2),
      }}>
        <View style={{
          height: hp(10),
          width: wp(22),
          borderRadius: 15,
        }}>
          <Image source={item.image} style={{ height: hp(10), width: wp(22), borderRadius: 15 }} />
          <View style={{ position: 'absolute', right: 5, bottom: 5 }}>
            <SVG.play_arrow />
          </View>
        </View>
        <Text style={{ fontSize: 12, color: 'white', marginTop: 5 }}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  const ForYou = () => {
    const featureData = [IMAGES.FEATURE_IMAGE, IMAGES.FEATURE_IMAGE]; // Two data cards
  
    return (
      <>
        <HeaderLabel text={'Featuring Today'} />
  
        <FlatList
          data={featureData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: wp(2), paddingRight: wp(2) }} 
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={{
              height: hp(18),
              width: wp(85),
              borderRadius: 15,
              marginHorizontal: wp(2),
              marginTop : '6%'
            }}>
              <Image source={item} style={{ height: hp(18), width: wp(85), borderRadius: 15 }} />
              <View style={{
                width: wp(35),
                height: hp(18),
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingLeft: wp(4),
              }}>
                <Text style={{ color: 'white' }}>New</Text>
                <Text style={{ color: 'white', fontSize: 20 }}>ENGLISH</Text>
                <Text style={{ color: 'white', fontSize: 20 }}>SONGS</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      
        <View style={{
          width: wp(100),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop : '5%'
        }}>
          <HeaderLabel text={'Recently Played'} />
          <TouchableOpacity>
            <Text style={{ color: 'white', marginRight: wp(5) }}>See more</Text>
          </TouchableOpacity>
        </View>
  
        <FlatList
          data={RecentData}
          renderItem={({ item }) => <RecentCard item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: wp(1), marginTop: hp(1) }} 
        />
  
        {/* Ensured "Mixes for you" is right below Recently Played */}
        <HeaderLabel text={'Mixes for you'} textStyle={{ marginTop: '5%' }} />

        <View style={{
          height : '30%',
          width :'100%',
        backgroundColor: '#0D0D0D'
        }}>
<View style={{
  height : 100,
  width :'100%',
  marginTop : '5%'
}}>

<FlatList
data={MixesList}
renderItem={({item}) => <MixCard item={item}/>}
horizontal = {true}

style={{width : '100%'}}
/>

</View>

        </View>
        
{
  bottomSongPlay ? <BottomSongPlay onPress={() => navigation.navigate(SCREEN.PLAYER)}  song={selectedSong}/> : null
}


      </>
    );
  };
  
  

  const Relax = () => {
    const data = [1, 2]; // Dummy array to duplicate the card
  
    return (
      <>
        <HeaderLabel text={"Today’s Refreshing Song-Recommendations"} />
  
        <View style={{ position: "relative", paddingLeft: wp(5), paddingRight: wp(5) }}>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ index }) => (
              <View
                style={{
                  height: 400,
                  width: wp(80),
                  backgroundColor: "#FFFFFF1F",
                  borderRadius: 15,
                  padding: wp(3),
                  marginRight: wp(5), // Space between cards
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={IMAGES.IMAGE_5}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      marginRight: wp(3),
                    }}
                  />
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#FFFFFFBF" }}>Peace</Text>
                    <Text style={{ color: "#FFFFFF80", fontSize: 12 }}>22 songs</Text>
                    <View style={{ flexDirection: "row", marginTop: hp(1) }}>
                      <SVG.favorite />
                      <SVG.Three_dots style={{ marginLeft: wp(3) }} />
                    </View>
                  </View>
                  <View style={{ marginLeft: "auto" }}>
                    <SVG.play_arrow_big />
                  </View>
                </View>
  
                <SongInfoButton source={IMAGES.IMAGE_6} Text1={"Weightless"} Text2={"Marconi Union"} icon={<SVG.Three_dots />} />
                <SongInfoButton source={IMAGES.IMAGE_7} Text1={"Nothing It Can"} Text2={"Helios"} icon={<SVG.Three_dots />} />
                <SongInfoButton source={IMAGES.IMAGE_8} Text1={"Small Memory"} Text2={"Jon Hopkins - Insides"} icon={<SVG.Three_dots />} />
                <SongInfoButton source={IMAGES.IMAGE_9} Text1={"Close To Home"} Text2={"Lyle Mays"} icon={<SVG.Three_dots />} />
              </View>
            )}
          />
  
          {/* "See All" Button positioned below the first card */}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 400 + hp(2), // Align below the first card
              right: wp(5), // Align to the right corner
              height: hp(5),
              width: wp(30),
              borderRadius: 20,
              backgroundColor: "#FFFFFFBF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>See All</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  
  

  return (
    <View style={{ alignItems : 'center' ,backgroundColor: '#0D0D0D' }}>
      <HomeScreenHeader />
      <View style={{ flexDirection: 'row', alignItems: 'center', height: hp(6), width: wp(100), marginTop: hp(2) }}>
        <FlatList
          data={ButtonArray}
          renderItem={({ item }) => <BtnCard item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: wp(1) }}
        />
      </View>
      {selectedButton === 'For you' && <ForYou />}
      {selectedButton === 'Relax' && <Relax />}
    </View>
  );
};

export default HomeScreen;
