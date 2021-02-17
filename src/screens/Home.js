import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import VideoCard from '../components/VideoCard';
import GoForwardCard from '../components/GoForwardCard';
import { Video } from 'expo-av';
import MasterChi from '../../assets/images/masterchi.png';
import MembershipCard from '../components/MembershipCard'

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
              display: 'flex'
              
            }}
          >
            <View>
              <Text style={styles.welcome}>Welcome</Text>
            </View>
            <View>
            <Text style={styles.name}>Kenpo Karate</Text>
            </View>
            <View>
            <Text style={styles.selfdefence}>Self Defence</Text>
            </View>
          </View>
          <View>
            <Image source={MasterChi} height={0} />
          </View>
        </View>
        
        <MembershipCard />
       
        <GoForwardCard text="About Instructor" />
       
        <View style={{ ...styles.heading, marginLeft:-10 }}>
          <Text style={styles.headingText}>What's New</Text>
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

        <View style={{ ...styles.heading }}>
          <Text style={styles.headingText}>List of Courses</Text>
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
    minHeight: 190,
  },
  welcome:{
    fontFamily:"RalewayExtraBold",
    color:'#7EA6FF',
    fontSize:29,
    opacity:1


  },
  name:{
    fontFamily:"RalewayExtraBold",
    color:'#FFFFFF',
    fontSize:29,
    opacity:1,
    paddingTop:5

  },
  selfdefence:{
    fontFamily:"RalewayMedium",
    color:'#7EA6FF',
    fontSize:20,
    opacity:1,
    paddingTop:8

  },
 

  heading: {
    paddingTop:20,
    width: '45%',
    alignItems: 'center',

    display: 'flex',
  },
  headingText:{fontSize:18, color:'#7EA6FF', fontFamily:'RalewayBold'}
});
export default Home;
