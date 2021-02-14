import React from 'react';
import GobackArrow from '../components/GobackArrow';
import { View, Text, Image, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
function NewsDetail({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <GobackArrow text="Lorem Ipsum is simply... " route="News" navigation={navigation} />
      <ScrollView>
        <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <View style={{ paddingTop: 10, paddingLeft: 10 }}>
          <View>
            <Text style={styles.title}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
          <View style={{ fontSize: 10, paddingTop: 10 }}>
            <Text>30 Nov, 2020</Text>
          </View>
          <Paragraph style={{ paddingTop: 10 }}>
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
  title: { fontFamily: 'RalewayMedium', color: '#9C27B0', fontSize: 20 },
});
export default NewsDetail;
