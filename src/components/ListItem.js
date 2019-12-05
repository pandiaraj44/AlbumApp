import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';


export default class ListItem extends PureComponent {



    constructor(props) {
        super(props);
    }

    render() {
        const { album } = this.props;
        return (
            <TouchableNativeFeedback onPress={() => { this.props.onAlbumPress(album) }}>
                <View style={styles.container}>

                    <View style={styles.header}>
                        <Image source={{ uri: album.thumbnailUrl }} style={styles.thumbnailWidth} />
                        <Text style={styles.title}>{album.title}</Text>
                    </View>

                </View>
            </TouchableNativeFeedback>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#CCC',
        padding: 10
    },
    header: {
        flexDirection: 'row',
    },
    title: {
        padding: 10,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        flexShrink: 1 
    },
    thumbnailWidth: {
        width: 80,
        height: 80,
    },
});