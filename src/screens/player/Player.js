import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets'
import { ACTIVE_OPACITY } from '../../enums/StyleGuide'
import { IMAGES } from '../../assets/images'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SCREEN } from '../../enums'

const { width , height} = Dimensions.get('window') 

const Player = () => {
 
  const navigation = useNavigation()
  const route = useRoute()
  const { selectedSong } = route.params;

  return (
    <View style={styles.mainStyle}>
        <View style={styles.secondView}>
<View style={styles.headerView}>
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.downArrow/>
</TouchableOpacity>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.Three_dots/>
</TouchableOpacity>
</View>
  
  <Image source={selectedSong.image} style={styles.imageStyle}/>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.castViewStyle}>
<SVG.cast/>
<Text style={{color : '#FFFFFFBF'}}>Connect to a device</Text>
</TouchableOpacity>

  <View style = {{
    height : height * 0.1,
    width : '100%',
  }}>
<View style={{
    height : height * 0.06,
    width : '100%',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
}}>
<Text style={{color : '#FFFFFFBF',fontSize : 20,fontWeight : 'bold'}}>{selectedSong.text}</Text>
<View style={{
    width : '35%',
    alignItems : 'center',
    justifyContent :'space-between',
    flexDirection:'row'
}}>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.favorite/>
</TouchableOpacity>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.download/>
</TouchableOpacity>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.share/>
</TouchableOpacity>
</View>

</View>

<Text style={{
    fontSize : 20,
    color : '#FFFFFF80'
}}>The Chainsmokers, Cha...</Text>
  </View>


<View style={{
    height : height * 0.13,
    width : '100%',
    marginTop : '5%'
}}>
  <View style={{
    height : height *0.005,
    width : '100%',
    backgroundColor : '#FFFFFF80',
    borderRadius : 15,
    flexDirection : 'row',
    alignItems : 'center'
  }}>
 <View style={{
    width : '35%',
    height : height *0.005,
    backgroundColor : '#FFFFFFBF'
 }}>

 </View>
 <View style={{
    height : height * 0.008,
    width : '2%',
    backgroundColor : 'white',
    borderRadius : 20
}}>

</View>
  </View>
<View style={{
    height : height * 0.03,
    width : '100%',
    alignItems : 'center',
    justifyContent : 'space-between',
    flexDirection :'row',
    marginTop : '2%'
}}>
<Text style={{color : '#FFFFFF80',fontSize : 17}}>0:25</Text>
<Text style={{color : '#FFFFFF80',fontSize : 17}}>0:25</Text>
</View>
<View style={{
    height : height * 0.08,
    width : '85%',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    alignSelf :'center'
}}>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.shuffle/>
</TouchableOpacity>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.rewind/>
</TouchableOpacity>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.play_arrow_big/>
</TouchableOpacity>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.forward/>
</TouchableOpacity>
<TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
<SVG.repeat/>
</TouchableOpacity>
</View>
  
</View>

<View style={{
    height : height * 0.05,
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems :'center'
}}>
<Text style={{color : '#FFFFFF40',fontSize : 20}}>Up Next</Text>
    <TouchableOpacity onPress={() => navigation.navigate(SCREEN.QUEUE_SCREEN, {selectedSong : selectedSong})} activeOpacity={ACTIVE_OPACITY} style={{
    width : '25%',
    flexDirection :'row',
    alignItems :'center',
    justifyContent : 'space-between'
}}>
<Text style={{color : '#FFFFFFBF' ,fontSize : 20}}>Queue</Text>
<SVG.rightArrow/>
</TouchableOpacity>
</View>


<View style={{
    height : height * 0.1,
    width :'100%',
    backgroundColor : '#FFFFFF14',
    borderTopRightRadius : 15,
    borderTopLeftRadius : 15,
    flexDirection : 'row',
    paddingTop : '5%'
}}>
<Image source={IMAGES.IMAGE_2} style={{height : height * 0.07, width : '25%',marginLeft : '5%',borderRadius : 10}}/>
<View style={{marginLeft : '5%'}}>
    <Text style={{color : '#FFFFFF'}}>Young</Text>
    <Text style={{color : '#FFFFFF80'}}>The Chainsmokers </Text>
</View>

</View>


  </View>
    </View>
  )
}

export default Player

const styles = StyleSheet.create({
    mainStyle : {
        flex :1,
        alignItems :'center',
        backgroundColor :'#0D0D0D'
    },
    secondView : {
width : '90%'
    },
    headerView : {
        height : height * 0.06,
flexDirection : 'row',
justifyContent :'space-between',
alignItems :'center',
marginTop : height *0.02
    },
    imageStyle : {
        width : '100%',borderRadius : 15,height : height*0.45,marginTop : height*0.02
    },
    castViewStyle : {
        height : height *0.045,
        width : '50%',
        borderRadius : 20,
        backgroundColor :'#FFFFFF14',
        flexDirection :'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        alignSelf : 'flex-end',
        marginTop : height * 0.02
    }
})