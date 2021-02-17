import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Card, ListItem,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



function MembershipCard({ navigation }) {
 
  return (
    <Card style={styles.membership} borderRadius={10}>
    <View>
      <Text style={styles.message}>Start learning</Text>
      <Text style={styles.message}>Self Defence</Text>
      <TouchableOpacity>
      <Button
      buttonStyle={{width:'60%', padding:6, textAlign:'left', backgroundColor:'#001F65', justifyContent:'space-around'}}
      containerStyle={{paddingTop:10, width:'100%'}}
      icon={
       <Icon
      name="arrow-right"
      size={20}
      color="white"
    />
    }
  iconRight
  title="Get Membership"
/>
</TouchableOpacity>

    </View>
  </Card>
  );
}

const styles = StyleSheet.create({
 
    membership: {
        display: 'flex',
    },
    message:{fontFamily:'RalewayMedium',color:"#000000",fontSize:18, opacity:1, paddingTop:5}
});
export default MembershipCard;
