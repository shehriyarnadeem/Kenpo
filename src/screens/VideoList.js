import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import VideoSelectCard from '../components/VideoSelectCard';
import { apiClient } from '../apiClient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../components/Loader';
function VideoList({ navigation, ...props }) {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState(null);
  const courseId = props && props.route && props.route.params ? props.route.params.courseId : null;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        if (!courseId) {
          const response = await apiClient({
            url: '/user/dashboard',
            method: 'GET',
          });

          setVideos(response.data.videos);
        } else {
          const response = await apiClient({
            url: `/course/${courseId}`,
            method: 'GET',
          });

          setVideos(response.data.data);
        }
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ ...styles.container, justifyContent: 'center' }}>
        <Loader status={loading} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item: rowData, index }) => {
          return (
            <VideoSelectCard
              video={rowData}
              nextVideo={videos[index + 1]}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={(item, index) => index}
        ListFooterComponent={<View style={{ height: 50 }}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#001f65',
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'RalewayMedium',
    textAlign: 'left',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',

    height: hp('15%'),
  },
});
export default VideoList;
