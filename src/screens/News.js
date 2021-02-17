import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

function News({ navigation }) {
  const list = [
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

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 100,
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft:10
        
        }}
      >
        <Title style={styles.heading}>What New and trending</Title>
      </View>
      <FlatList
        contentContainerStyle={{ marginTop: 20 }}
        data={list}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              style={{
                width: '90%',

                justifyContent: 'center',
                alignSelf: 'center',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Content>
                <Title>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Title>
                <Paragraph style={{ padding: 10 }} numberOfLines={3}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a
                </Paragraph>
                <Card.Actions>
                  <Button onPress={() => navigation.navigate('NewsDetail')}>Readmore</Button>
                </Card.Actions>
              </Card.Content>
            </Card>
          );
        }}
        keyExtractor={(item, index) => item.key}
        ListFooterComponent={<View style={{ height: 50 }}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#001f65',
  },
  heading:{ color: 'white', fontSize: 25, fontFamily:'RalewayMedium', textAlign:'left' }
});
export default News;
