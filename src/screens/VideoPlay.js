import React from 'react';
import GobackArrow from '../components/GobackArrow';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { Video, AVPlaybackStatus } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function VideoPlay({ navigation }) {
  navigation.setOptions({ headerShown: false });
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ paddingTop: 30 }}>
          <GobackArrow route="News" text="Lorem Ipsum is simply... " navigation={navigation} />
        </View>
      </View>
      <ScrollView>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={{ paddingTop: 10, paddingLeft: 10 }}>
          <View>
            <Text style={styles.title}>Video 1</Text>
          </View>
          <View>
            <Text style={styles.date}>10.00 mins</Text>
          </View>
          <Paragraph style={styles.details}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </Paragraph>
          <View style={{ height: 60 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#001f65',
    paddingTop: 30,
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
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 80,
    left: 20,
    top: 10,
  },
  video: {
    width: '100%',
    height: 250,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',

    height: hp('20%'),
  },
  title: { fontFamily: 'RalewayMedium', color: 'white', fontSize: 20 },
});
export default VideoPlay;
