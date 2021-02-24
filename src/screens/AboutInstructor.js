import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
} from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'
import PlayButton from '../../assets/images/playbutton.png'
import { Card, Title, Paragraph } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import VideoSelectCard from '../components/VideoSelectCard'
import Masterchu from '../../assets/images/masterchu.png'

function AboutInstructor({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                    right: 30,
                    height: 60,
                }}
            >
                <IconAnt
                    name="close"
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <ScrollView>
                <VideoSelectCard />
                <View style={{ paddingTop: 40, paddingLeft: 10 }}>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image source={Masterchu} />
                        <Text
                            style={{
                                color: '#7EA6FF',
                                fontFamily: 'RalewayBold',
                                fontSize: 20,
                                paddingTop: 20,
                            }}
                        >
                            Manny Rayes
                        </Text>
                    </View>
                    <Paragraph style={styles.details}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a
                    </Paragraph>
                    <View style={{ height: 60 }}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#001f65',
    },
    details: {
        paddingTop: 10,
        color: 'white',
        fontFamily: 'RalewayBlack',
        fontSize: 16,
    },
    date: {
        fontSize: 10,
        paddingTop: 10,
        color: '#919191',
        fontSize: 14,
        fontFamily: 'RalewayBlack',
    },
    title: { fontFamily: 'RalewayMedium', color: '#7EA6FF', fontSize: 20 },
})
export default AboutInstructor
