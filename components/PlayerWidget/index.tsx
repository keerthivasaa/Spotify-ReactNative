import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text } from '../Themed';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Song } from '../../types';
import styles from './styles';

const song = {
    id: '1',
    imageUri: 'https://c-sf.smule.com/rs-s79/arr/73/e0/db906ea1-c910-4f5d-8595-466172a267c2_256.jpg',
    title: 'Pogadhe',
    artist: 'Yuvan'
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
        <View style={styles.progress}/>
        <View style={styles.row}>
          <Image source={{ uri: song.imageUri }} style={styles.image} />
          <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.title}>{song.title}</Text>
              <Text style={styles.artist}>{song.artist}</Text>
            </View>
  
            <View style={styles.iconsContainer}>
              <AntDesign name="hearto" size={30} color={"white"}/>
              <TouchableOpacity>
                <FontAwesome name={'play'} size={30} color={"white"}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
}

export default PlayerWidget;