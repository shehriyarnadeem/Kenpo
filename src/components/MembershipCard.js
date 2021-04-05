import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import KarateKid from '../../assets/images/karatekid.png';
import { UserContext } from '../context';
function MembershipCard({ navigation }) {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  const MembershipButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Subscription')}>
        <Button
          onPress={() => navigation.navigate('Subscription')}
          buttonStyle={{
            width: '73%',
            padding: 6,
            textAlign: 'left',
            backgroundColor: '#001F65',
            justifyContent: 'space-around',
          }}
          containerStyle={{ paddingTop: 10, width: '100%' }}
          icon={<Icon name="arrow-right" size={20} color="white" />}
          iconRight
          title="Get Membership"
        />
      </TouchableOpacity>
    );
  };
  return (
    <Card style={styles.membership} borderRadius={10}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={styles.message}>Start learning</Text>
          <Text style={styles.message}>Self Defence</Text>
          <MembershipButton />
        </View>

        <View>
          <Image source={KarateKid} style={{ height: 120, resizeMode: 'contain', right: 13 }} />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  membership: {
    display: 'flex',
  },
  message: {
    fontFamily: 'RalewayMedium',
    color: '#000000',
    fontSize: 18,
    opacity: 1,
    paddingTop: 5,
  },
});
export default MembershipCard;
