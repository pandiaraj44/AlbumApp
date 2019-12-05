import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { getAlbumList } from '../services/AlbumService'


// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },

export default class ListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albumList: []
        };
    }

    static navigationOptions = {
        title: 'Album List'
    };

    componentWillMount() {
        getAlbumList().then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    albumList: responseJson
                });
            }).catch((err) => {

            });
    }

    onAlbumPress(album) {
        // Navigate to detail screen
        this.props.navigation.navigate('Detail', { album: album });
    }

    render() {
        const { albumList } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={albumList}
                    renderItem={({item}) => <ListItem onAlbumPress={this.onAlbumPress.bind(this)} album={item} />}
                    keyExtractor={({id}) => id + ""}
                >
                </FlatList>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    }
});
