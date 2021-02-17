import React from 'react';
import GobackArrow from '../components/GobackArrow';
import { View, Text, Image, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
function NewsDetail({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
       <View style={{height:100, top: 50}}>
      <GobackArrow text="Lorem Ipsum is simply... " route="News" navigation={navigation} />
      </View>
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
          <View >
            <Text style={styles.date}>30 Nov, 2020</Text>
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
  details:{ paddingTop: 10, color:'white', fontFamily:'RalewayBlack', fontSize:16 },
  date:{ fontSize: 10, paddingTop: 10, color:'#919191', fontSize:14, fontFamily:'RalewayBlack' },
  title: { fontFamily: 'RalewayMedium', color: '#7EA6FF', fontSize: 20 },
});
export default NewsDetail;
