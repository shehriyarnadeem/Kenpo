import React, { useContext } from 'react';
import Lock from '../../assets/images/lock.png';
import { Card } from 'react-native-elements';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { UserContext } from '../context';
import IconAnt from 'react-native-vector-icons/AntDesign';
const CourseCard = ({ navigation, ...props }) => {
  const context = useContext(UserContext);
  const { user } = context;
  const { status, belt_color, name, video_count, time, id } = props;

  if (status === 'free') {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('VideoList', { courseId: id })}>
        <Card
          containerStyle={{
            ...styles.container,
            borderLeftWidth: 10,
            borderStartColor: belt_color,
          }}
        >
          <View>
            <Text style={styles.title}>{name ? name : 'Kick boxing and punches'}</Text>
            <Text>
              {time ? time : '19 hours'} {video_count ? video_count : '10 videos'}
            </Text>
          </View>
          <View style={{ left: 314, bottom: 15, position: 'absolute' }}>
            <IconAnt name="caretright" size={10} color="#001F65" />
          </View>
        </Card>
      </TouchableOpacity>
    );
  } else if ((user && user.status === 'pending') || !user) {
    return (
      <Card
        containerStyle={{
          ...styles.container,
          backgroundColor: '#d2d7e0',
          borderLeftWidth: 10,
          borderStartColor: belt_color,
        }}
      >
        <View>
          <View>
            <Text style={styles.title}>{name ? name : 'Kick boxing and punches'}</Text>
            <Text>
              {time ? time : '19 hours'} {video_count ? video_count : '10 videos'}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            width: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View>
            <Image source={Lock} />
          </View>
          <View style={{ left: 160, top: 12 }}>
            <IconAnt name="caretright" size={10} color="#001F65" />
          </View>
        </View>
      </Card>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('VideoList', { courseId: id })}>
        <Card
          containerStyle={{
            ...styles.container,
            borderLeftWidth: 10,
            borderStartColor: belt_color,
          }}
        >
          <View>
            <Text style={styles.title}>{name ? name : 'Kick boxing and punches'}</Text>
            <Text>
              {time ? time : '19 hours'} {video_count ? video_count : '10 videos'}
            </Text>
          </View>
          <View style={{ left: 314, bottom: 15, position: 'absolute' }}>
            <IconAnt name="caretright" size={10} color="#001F65" />
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    minHeight: 72,
    opacity: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default CourseCard;
