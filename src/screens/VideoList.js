import React from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    ImageBackground,
    Image,
} from 'react-native'
import GobackArrow from '../components/GobackArrow'
import VideoSelectCard from '../components/VideoSelectCard'
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

function VideoList({ navigation }) {
    const list = [
        {
            key: 1,
            imageUrl: 'http://via.placeholder.com/160x160',
            title: 'something',
        },
        {
            key: 2,
            imageUrl: 'http://via.placeholder.com/160x160',
            title: 'something two',
        },
        {
            key: 3,
            imageUrl: 'http://via.placeholder.com/160x160',
            title: 'something three',
        },
        {
            key: 4,
            imageUrl: 'http://via.placeholder.com/160x160',
            title: 'something four',
        },
        {
            key: 5,
            imageUrl: 'http://via.placeholder.com/160x160',
            title: 'something five',
        },
        {
            key: 6,
            imageUrl: 'http://via.placeholder.com/160x160',
            title: 'something six',
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{ height: 80, top: 20 }}
                onPress={() => navigation.navigate('Home')}
            >
                <GobackArrow
                    text="Video 1"
                    route="News"
                    navigation={navigation}
                />
            </View>

            <FlatList
                contentContainerStyle={{ marginTop: 20 }}
                data={list}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                renderItem={({ item: rowData }) => {
                    return <VideoSelectCard />
                }}
                keyExtractor={(item, index) => item.key}
                ListFooterComponent={<View style={{ height: 50 }}></View>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#001f65',
    },
    heading: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'RalewayMedium',
        textAlign: 'left',
    },
})
export default VideoList
