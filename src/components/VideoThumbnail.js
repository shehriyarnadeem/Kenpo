import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ImageBackground, View, Text, Image } from 'react-native'
import PlayButton from '../../assets/images/playbutton.png'
import VideoBack from '../../assets/images/videoBack.png'
export default function VideoThumbnail({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('VideoPlay')}>
            <ImageBackground
                source={VideoBack}
                style={{
                    left: 10,
                    height: 150,
                    width: 150,
                    borderRadius: 20,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
            >
                <View style={{ bottom: 30 }}>
                    <Image source={PlayButton} />
                </View>
                <View
                    style={{
                        backgroundColor: '#343434',
                        width: '100%',
                        height: 30,

                        justifyContent: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            alignSelf: 'flex-start',
                            color: 'white',
                            padding: 20,
                        }}
                    >
                        Video 1
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
