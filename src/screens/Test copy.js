import React, { useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import {
  View,
  Text,
  Platform,
} from 'react-native';
import IAP from 'react-native-iap';
const items = Platform.select({
  ios: [],
  android: ['rniapt_100_1m'],
});
export default function Test() {
  const [purchased, setPurchased] = useState(false);
  const [products, setProducts] = useState({});
  useEffect(() => {
    IAP.initConnection()
      .catch(() => {
        console.log('error connecting to store');
      })
      .then(() => {
        IAP.getSubscriptions(items).catch(() => {
          console.log('error finding items');
        });
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <View>
      <Text>sds</Text>
    </View>
  );
}
