import React from 'react';
import { Image, View } from 'react-native';
import { Text } from '../Themed';

import { Song } from '../../types';
import styles from './styles';

export type SongListItemProps = {
    song: Song,
}

const SongListItem = (props: SongListItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.song.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>
            <Text style={styles.title}> {props.song.title} </Text>
            <Text style={styles.artist}> {props.song.artist} </Text>
            </View>
        </View>
    )
}

export default SongListItem;