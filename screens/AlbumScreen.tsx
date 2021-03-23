import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumHeader from '../components/AlbumHeader';

import albumDetails from '../components/data/albumDetails';
import SongListItem from '../components/SongListItem';

const AlbumScreen = () => {

    const route = useRoute();

    useEffect( () => {
        console.log(route);
    }, );

    return(
        <View>
            <FlatList 
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} /> }
                keyExtractor= {( item ) => item.id}
                ListHeaderComponent= { () => <AlbumHeader album={albumDetails} /> }
            />
        </View>
    )
}

export default AlbumScreen;