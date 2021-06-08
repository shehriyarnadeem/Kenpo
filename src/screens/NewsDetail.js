import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Card, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function NewsDetail({ navigation, ...props }) {
  const {
    route: {
      params: {
        newsDetail: { description, image, title, date },
      },
    },
  } = props;

  navigation.setOptions({ headerTitle: description });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <View style={{ justifyContent: 'center', padding: 10, textAlign: 'left' }}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Paragraph style={styles.details}>{description}</Paragraph>
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
  content: {
    marginTop: 40,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',

    height: hp('20%'),
  },
  details: { paddingTop: 10, color: 'white', fontFamily: 'RalewayBlack', fontSize: 13 },
  date: {
    fontSize: 10,
    paddingTop: 10,
    color: '#919191',
    fontSize: 14,
    fontFamily: 'RalewayBlack',
  },

  title: { fontFamily: 'RalewayMedium', color: '#7fa5fb', fontSize: 19 },
});
export default NewsDetail;
