import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ImageBackground, Image } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../components/Loader';
import HttpService from '../HttpService';
function News({ navigation }) {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await HttpService.get('/news/');
        setNews(response.data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ ...styles.container, justifyContent: 'center', alignItems: 'center' }}>
        <Loader status={loading} />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={{ marginTop: 20 }}
          data={news}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          renderItem={({ item: rowData }) => {
            return (
              <Card
                style={{
                  width: '90%',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  padding: 0,
                }}
              >
                <ImageBackground style={{ width: '100%' }}>
                  <Card.Cover
                    source={{
                      uri: rowData.image,
                    }}
                    style={{
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      width: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </ImageBackground>
                <Card.Content>
                  <Title>{rowData && rowData.title}</Title>
                  <Title
                    style={{
                      color: '#919191',
                      fontFamily: 'RalewayMedium',
                      fontSize: 14,
                    }}
                  >
                    {rowData && rowData.date}
                  </Title>
                  <Paragraph numberOfLines={2}>{rowData && rowData.description}</Paragraph>
                  <Card.Actions>
                    <Button
                      onPress={() =>
                        navigation.navigate('WithoutTabs', {
                          screen: 'NewsDetail',
                          params: { newsDetail: rowData },
                        })
                      }
                    >
                      Readmore
                    </Button>
                  </Card.Actions>
                </Card.Content>
              </Card>
            );
          }}
          keyExtractor={(item, index) => index}
          ListFooterComponent={<View style={{ height: 50 }}></View>}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#001f65',
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'RalewayMedium',
    textAlign: 'left',
  },
});
export default News;
