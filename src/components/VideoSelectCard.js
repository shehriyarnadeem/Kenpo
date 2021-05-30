import React, { useContext } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import Lock from '../../assets/images/lock.png';
import PlayButton from '../../assets/images/playbutton.png';
import { Card, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { UserContext } from '../context';
export default function VideoSelectCard({ navigation, video, nextVideo }) {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  let disable = false;

  if (video && video.status === 'free') {
    disable = false;
  } else if (!user) {
    disable = true;
  } else if (user && user.status === 'pending') {
    disable = true;
  } else if (user && user.status === 'paid') {
    disable = false;
  }

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
      <TouchableOpacity
        onPress={() =>
          !disable
            ? navigation.navigate('VideoPlay', { videoInfo: video, NextVideo: nextVideo })
            : navigation.navigate('Subscription')
        }
      >
        <ImageBackground style={{ width: '100%' }}>
          <Card.Cover
            source={{
              uri: video && video.thumbnail ? video.thumbnail : 'https://picsum.photos/700',
            }}
            style={{
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              width: '100%',
            }}
          />
          {!disable ? (
            <Image
              source={PlayButton}
              style={{
                position: 'absolute',
                zIndex: 1,
                bottom: 90,
                alignSelf: 'center',
              }}
            />
          ) : (
            <View>
              <Image
                source={Lock}
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  bottom: 90,
                  alignSelf: 'center',
                }}
              />
            </View>
          )}
        </ImageBackground>

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
            <Title>{video && video.title ? video.title : 'Video 1'}</Title>
            <Text style={{ paddingTop: 6 }}>
              {video && video.duration ? video.duration : '10:00 mins'}
            </Text>
          </View>

          <IconAnt name="caretright" size={10} color="#001F65" />
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
}
