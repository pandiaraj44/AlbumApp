import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground  } from 'react-native';



// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Album Detail'
    };

    render() {
        const { album } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: album.url }} style={styles.imageContainer}>
                    <Text style={styles.title}>{album.title}</Text>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#CCC',
        padding: 10
    },
    header: {
        flexDirection: 'row'
    },
    thumbnailWidth: {
        width: 80,
        height: 80,
    },
    title: {
        padding: 10,
        flexWrap: 'wrap',
        alignContent: 'center',
        flexShrink: 1 ,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '100%' ,
        height: '100%'
    }
});
