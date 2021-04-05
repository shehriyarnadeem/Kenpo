import React, { useEffect } from 'react';
import GobackArrow from '../components/GobackArrow';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { Video, AVPlaybackStatus } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
import VideoSelectCard from '../components/VideoSelectCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function VideoPlay({ navigation, ...props }) {
  const { videoInfo, NextVideo } = props.route.params;

  const video = React.useRef(null);
  const [status, setStatus] = React.useState(false);
  navigation.setOptions({
    headerTitle: videoInfo && videoInfo.description ? video.description : 'Loremp ipsum is a dummy',
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ top: 20 }}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri:
              videoInfo && videoInfo.video
                ? videoInfo.video
                : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          }}
          useNativeControls
          resizeMode="contain"
        />
        <View style={{ paddingTop: 10, paddingLeft: 10 }}>
          <View>
            <Text style={styles.title}>
              {videoInfo && videoInfo.title ? videoInfo.title : 'Video 1'}
            </Text>
          </View>
          <View>
            <Text style={styles.date}>
              {videoInfo && videoInfo.duration ? `${videoInfo.duration} mins` : '10 mins'}
            </Text>
          </View>
          <Paragraph style={styles.details}>
            {videoInfo && videoInfo.description
              ? videoInfo.description
              : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'}
          </Paragraph>
          <View style={{ height: 60 }}></View>
        </View>
        {NextVideo !== undefined && (
          <>
            <View style={{ paddingTop: 10, paddingLeft: 10 }}>
              <Text style={styles.title}>Next Video</Text>
            </View>
            <View style={{ paddingTop: 20 }}>
              <VideoSelectCard navigation={navigation} video={NextVideo} />
            </View>
          </>
        )}
        <View style={{ height: 60 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
