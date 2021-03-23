import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/native';
import AlbumScreen from '../../screens/AlbumScreen';

export type AlbumProps = {
    album: Album,
}

const AlbumComponent = (props: AlbumProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('AlbumScreen', {id: props.album.id});
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.imageUri} />
                <Text style={styles.artistHeadline}>{props.album.artistHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AlbumComponent;