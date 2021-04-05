import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground, View, Text, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import PlayButton from '../../assets/images/playbutton.png';
import VideoBack from '../../assets/images/videoBack.png';
export default function VideoThumbnail({ navigation, details }) {
  return (
    <>
      <Card
        onPress={() => navigation.navigate('VideoPlay', { videoInfo: details })}
        style={{
          borderRadius: 20,
        }}
      >
        <ImageBackground style={{ width: 160, height: 135 }}>
          <Card.Cover
            source={VideoBack}
            style={{
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              width: '100%',
              resizeMode: 'contain',
            }}
          />
          <View>
            <Image source={PlayButton} style={{ justifyContent: 'center', left: 50, top: 30 }} />
          </View>
        </ImageBackground>
        <Card.Content style={{ backgroundImage: 'linear-gradient(315deg, gray 0%, #d7e1ec 74%)' }}>
          <Title
            style={{
              color: 'white',
              fontFamily: 'RalewayMedium',
              fontSize: 14,
            }}
          >
            date
          </Title>
        </Card.Content>
      </Card>
    </>
  );
}
