import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY, hp, wp } from '../../enums/StyleGuide';

const CategoryButtonCard = ({selectedButton, setSelectedButton,item}) => {
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
             justifyContent: 'center',
             alignItems: 'center',
           }}>
           <Text style={{ color: isSelected ? '#FFFFFF' : '#FFFFFF80' }}>{item.text}</Text>
         </TouchableOpacity>
  )
}

export default CategoryButtonCard

const styles = StyleSheet.create({})