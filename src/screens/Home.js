import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import VideoCard from '../components/VideoCard';
import { Video } from 'expo-av';
import Welcome from '../../assets/images/welcome.png';
import ListCourses from '../../assets/images/listcourses.png';
import SelfDefence from '../../assets/images/selfdefence.png';
import KenpKent from '../../assets/images/kenpkent.png';
import MasterChi from '../../assets/images/masterchi.png';
import Membership from '../../assets/images/membership.png';
import Aboutinstructor from '../../assets/images/aboutinstructor.png';
import WhatsNew from '../../assets/images/whatsnew.png';
function Home() {
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
  ];

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
  ];
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
              <Image source={Welcome} />
            </View>
            <View>
              <Image source={KenpKent} style={{ top: 20 }} />
            </View>
            <View>
              <Image source={SelfDefence} style={{ marginTop: 40 }} />
            </View>
          </View>
          <View>
            <Image source={MasterChi} height={0} />
          </View>
        </View>
        <View style={styles.membership}>
          <Image source={Membership} />
        </View>
        <TouchableOpacity style={{ paddingLeft: 5 }}>
          <Card containerStyle={styles.about}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2d446e' }}>
                About Instructor
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
        <View style={{ ...styles.heading, marginLeft: -18 }}>
          <Image source={WhatsNew} />
        </View>

        <FlatList
          horizontal
          contentContainerStyle={{ marginTop: 20 }}
          data={data}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: rowData }) => {
            return (
              <View style={{ paddingLeft: 10 }}>
                <Video
                  source={{
                    uri:
                      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
                  }}
                  rate={1.0}
                  volume={5.0}
                  useNativeControls
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay={false}
                  style={{ width: 150, height: 150, borderRadius: 20 }}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => item.key}
        />

        <View style={styles.heading}>
          <Image source={ListCourses} />
        </View>

        <FlatList
          contentContainerStyle={{ marginTop: 20 }}
          data={list}
          nestedScrollEnabled
          renderItem={({ item: rowData }) => {
            return <VideoCard {...rowData} />;
          }}
          keyExtractor={(item, index) => item.key}
          ListFooterComponent={<View style={{ height: 50 }}></View>}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f65',
  },
  welcomeNote: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 260,
  },
  membership: {
    justifyContent: 'center',
    width: '92%',
    alignItems: 'center',
    display: 'flex',
  },
  about: {
    marginTop: 16,

    width: '85%',
    borderRadius: 20,
    minHeight: 69,
    opacity: 1,
    shadowOpacity: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  heading: {
    marginTop: 20,
    width: '40%',
    alignItems: 'center',

    display: 'flex',
  },
});
export default Home;
