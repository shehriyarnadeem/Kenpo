import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import VideoSelectCard from '../components/VideoSelectCard';
import Masterchu from '../../assets/images/masterchu.png';
import TwoFriends from '../../assets/images/twofriends.png';
import CourseCard from '../components/CourseCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function AboutInstructor({ navigation }) {
  navigation.setOptions({ headerShown: false });
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          height: hp('15%'),
          right: 40,
          bottom: 20,
        }}
      >
        <IconAnt name="close" size={30} color="white" />
      </TouchableOpacity>

      <ScrollView>
        <VideoSelectCard navigation={navigation} />
        <View style={{ paddingTop: 40, paddingLeft: 10 }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image source={Masterchu} />
            <Text
              style={{
                color: '#7EA6FF',
                fontFamily: 'RalewayBold',
                fontSize: 20,
                paddingTop: 20,
              }}
            >
              Manny Rayes
            </Text>
          </View>
          <Paragraph style={styles.details}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          </Paragraph>
          <View style={{ height: 30 }}></View>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={TwoFriends} resizeMode="contain" style={{ height: 200 }} />
          </View>
          <View style={{ height: 30 }}></View>
          <View>
            <CourseCard locked navigation={navigation} />
          </View>
          <View style={{ height: 60 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    alignItems: 'flex-end',
    width: wp('90%'),
    height: hp('10%'),
  },
  title: { fontFamily: 'RalewayMedium', color: '#7EA6FF', fontSize: 20 },
});
export default AboutInstructor;
