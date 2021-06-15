import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Lock from '../../assets/images/lock.png';
import { UserContext } from '../context';
import { ImageBackground, View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import PlayButton from '../../assets/images/playbutton.png';
import VideoBack from '../../assets/images/videoBack.png';
export default function VideoThumbnail({ navigation, details, nextVideo }) {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  let disable = false;

  if (details.status === 'free') {
    disable = false;
  } else if (!user) {
    disable = true;
  } else if (user && user.status === 'pending') {
    disable = true;
  } else if (user && user.status === 'paid') {
    disable = false;
  }

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  return (
    <Card
      style={{ backgroundColor: '#001f65', marginLeft: 15 }}
      onPress={() =>
        !disable
          ? navigation.navigate('VideoPlay', { videoInfo: details, NextVideo: nextVideo })
          : navigation.navigate('Subscription')
      }
    >
      <ImageBackground
        source={{ uri: details.thumbnail }}
        style={{
          overflow: 'hidden',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: 160,
          height: 160,
          borderTopEndRadius: 25,
          borderBottomEndRadius: 25,
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25,
        }}
      >
        {!disable ? (
          <Image
            source={PlayButton}
            style={{
              bottom: 30,
            }}
          />
        ) : (
          <View>
            <Image
              source={Lock}
              style={{
                bottom: 30,
              }}
            />
          </View>
        )}
        <View
          style={{
            shadowOpacity: 10,
            boxShadow: '5px 10px',
            backgroundColor: 'gray',
            backgroundImage: 'linear-gradient(315deg, gray 0%, #d7e1ec 74%)',
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              alignSelf: 'center',
              color: 'white',
              padding: 8,
            }}
          >
            {truncate(details.title, 14)}
          </Text>
        </View>
      </ImageBackground>
    </Card>
  );
}
