import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Image, FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import CourseCard from '../components/CourseCard';
import GoForwardCard from '../components/GoForwardCard';
import VideoThumbnail from '../components/VideoThumbnail';
import MasterChi from '../../assets/images/masterchi.png';
import MembershipCard from '../components/MembershipCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { apiClient } from '../apiClient';
import { UserContext } from '../context';
import Loader from '../components/Loader';

function Home({ navigation }) {
  navigation.setOptions({ headerShown: false });
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState(null);
  const [courses, setCourses] = useState(null);
  const context = useContext(UserContext);
  const { user, setUser } = context;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await apiClient({
          url: '/user/dashboard',
          method: 'GET',
        });
        setVideos(response.data.videos);
        setCourses(response.data.courses);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    return () => {
      setVideos(null);
      setCourses(null);
      setLoading(false);
    };
  }, []);

  const Membership = () => {
    if (!user) {
      return <MembershipCard navigation={navigation} />;
    } else if (user && user.status === 'pending') {
      return <MembershipCard navigation={navigation} />;
    } else {
      return null;
    }
  };

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

        <Membership />

        <GoForwardCard
          text="About Instructor"
          stack="WithoutTabs"
          redirect="About"
          navigation={navigation}
        />

        <View
          style={{
            ...styles.heading,

            display: 'flex',
            width: '90%',
            flexDirection: 'row',
            left: 20,
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.headingText}>What's New</Text>
          <TouchableOpacity onPress={() => navigation.navigate('VideoList')}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 14,
                textDecorationLine: 'underline',
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>
        {loading ? (
          <Loader status={loading} />
        ) : (
          <FlatList
            horizontal
            contentContainerStyle={{ marginTop: 20 }}
            data={videos}
            nestedScrollEnabled
            ItemSeparatorComponent={() => {
              return <View style={{ width: 10 }}></View>;
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: rowData, index }) => {
              return (
                <VideoThumbnail
                  navigation={navigation}
                  nextVideo={videos[index + 1]}
                  details={rowData && rowData}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}

        <View style={{ ...styles.heading, left: 20, width: '90%', flexDirection: 'row' }}>
          <Text style={styles.headingText}>List of Courses</Text>
        </View>

        {loading ? (
          <Loader status={loading} />
        ) : (
          <FlatList
            contentContainerStyle={{ marginTop: 20 }}
            data={courses}
            nestedScrollEnabled
            renderItem={({ item: rowData }) => {
              return <CourseCard navigation={navigation} {...rowData} />;
            }}
            keyExtractor={(item, index) => index}
            ListFooterComponent={<View style={{ height: 50 }}></View>}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f65',
    paddingTop: 50,
  },
  welcomeNote: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 195,
  },
  welcome: {
    fontFamily: 'Raleway-Medium',
    color: '#7EA6FF',
    fontSize: 29,
    opacity: 1,
  },
  name: {
    fontFamily: 'Raleway-ExtraBold',
    color: '#FFFFFF',
    fontSize: 29,
    opacity: 1,
    paddingTop: 5,
  },
  selfdefence: {
    fontFamily: 'Raleway-Medium',
    color: '#7EA6FF',
    fontSize: 20,
    opacity: 1,
    paddingTop: 8,
  },

  heading: {
    paddingTop: 20,
    width: '45%',
    alignItems: 'center',

    display: 'flex',
  },
  headingText: { fontSize: 18, color: '#7EA6FF', fontFamily: 'RalewayBold' },
});
export default Home;
