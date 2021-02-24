import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    Dimensions,
} from 'react-native'
import VideoCard from '../components/VideoCard'
import GoForwardCard from '../components/GoForwardCard'

import VideoThumbnail from '../components/VideoThumbnail'
import MasterChi from '../../assets/images/masterchi.png'
import MembershipCard from '../components/MembershipCard'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Home({ navigation }) {
    const data = [
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

    const list = [
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: false,
            key: 1,
        },
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: false,
            key: 2,
        },
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: false,
            key: 3,
        },
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: true,
            key: 4,
        },
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: true,
            key: 5,
        },
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: true,
            key: 6,
        },
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: true,
            key: 7,
        },
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: true,
            key: 8,
        },
        {
            title: 'Kicks, Punches and Basic Course',
            description: '10 hours, 19 video',
            locked: true,
            key: 9,
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.welcomeNote}>
                    <View
                        style={{
                            display: 'flex',
                        }}
                    >
                        <View>
                            <Text style={styles.welcome}>Welcome</Text>
                        </View>
                        <View>
                            <Text style={styles.name}>Kenpo Karate</Text>
                        </View>
                        <View>
                            <Text style={styles.selfdefence}>Self Defence</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={MasterChi} height={0} />
                    </View>
                </View>

                <MembershipCard navigation={navigation} />

                <GoForwardCard
                    text="About Instructor"
                    redirect="About"
                    navigation={navigation}
                />

                <View
                    style={{
                        ...styles.heading,

                        display: 'flex',
                        width: '90%',
                        flexDirection: 'row',
                        left: 20,
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={styles.headingText}>What's New</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('VideoList')}
                    >
                        <Text
                            style={{
                                color: '#ffffff',
                                fontSize: 14,
                            }}
                        >
                            View All
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    horizontal
                    contentContainerStyle={{ marginTop: 20 }}
                    data={data}
                    nestedScrollEnabled
                    ItemSeparatorComponent={() => {
                        return <View style={{ width: 10 }}></View>
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item: rowData }) => {
                        return <VideoThumbnail navigation={navigation} />
                    }}
                    keyExtractor={(item, index) => item.key}
                />

                <View style={{ ...styles.heading }}>
                    <Text style={styles.headingText}>List of Courses</Text>
                </View>

                <FlatList
                    contentContainerStyle={{ marginTop: 20 }}
                    data={list}
                    nestedScrollEnabled
                    renderItem={({ item: rowData }) => {
                        return <VideoCard {...rowData} />
                    }}
                    keyExtractor={(item, index) => item.key}
                    ListFooterComponent={<View style={{ height: 50 }}></View>}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001f65',
        paddingTop: 50,
    },
    welcomeNote: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 190,
    },
    welcome: {
        fontFamily: 'RalewayExtraBold',
        color: '#7EA6FF',
        fontSize: 29,
        opacity: 1,
    },
    name: {
        fontFamily: 'RalewayExtraBold',
        color: '#FFFFFF',
        fontSize: 29,
        opacity: 1,
        paddingTop: 5,
    },
    selfdefence: {
        fontFamily: 'RalewayMedium',
        color: '#7EA6FF',
        fontSize: 20,
        opacity: 1,
        paddingTop: 8,
    },

    heading: {
        paddingTop: 20,
        width: '45%',
        alignItems: 'center',

        display: 'flex',
    },
    headingText: { fontSize: 18, color: '#7EA6FF', fontFamily: 'RalewayBold' },
})
export default Home
