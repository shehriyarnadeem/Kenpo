import React from 'react';
import Lock from '../../assets/images/lock.png';
import { Card } from 'react-native-elements';
import { StyleSheet, View, Text, Image } from 'react-native';
const VideoCard = ({ ...props }) => {
  const { locked } = props;

  if (!locked) {
    return (
      <>
        <Card containerStyle={styles.container}>
          <View>
            <Text style={styles.title}>Kicks Punches and Basic course</Text>
            <Text>10 hours, 19 video</Text>
          </View>
        </Card>
      </>
    );
  }
  return (
    <>
      <Card
        containerStyle={{
          ...styles.container,
          backgroundColor: '#d2d7e0',
          borderLeftWidth: 10,
          borderStartColor: 'blue',
        }}
      >
        <View>
          <Text style={styles.title}>Kicks Punches and Basic course</Text>
          <Text>10 hours, 19 video</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        >
          <Image source={Lock} />
        </View>
      </Card>
    </>
  );
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

export default VideoCard;
