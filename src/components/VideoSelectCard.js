import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'
import PlayButton from '../../assets/images/playbutton.png'
import { Card, Title } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function VideoSelectCard() {
    return (
        <Card
            style={{
                width: '90%',
                borderRadius: 20,
                justifyContent: 'center',
                alignSelf: 'center',
                padding: 0,
            }}
        >
            <TouchableOpacity>
                <ImageBackground style={{ width: '100%' }}>
                    <Card.Cover
                        source={{ uri: 'https://picsum.photos/700' }}
                        style={{
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            width: '100%',
                        }}
                    />
                    <Image
                        source={PlayButton}
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            bottom: 90,
                            alignSelf: 'center',
                        }}
                    />
                </ImageBackground>
            </TouchableOpacity>
            <Card.Content
                padding={10}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <View>
                    <Title>Video</Title>
                    <Text style={{ paddingTop: 6 }}>10:00</Text>
                </View>

                <IconAnt name="caretright" size={10} color="#001F65" />
            </Card.Content>
        </Card>
    )
}
