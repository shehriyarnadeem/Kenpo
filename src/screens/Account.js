import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Card } from 'react-native-paper';
import IconAnt from 'react-native-vector-icons/AntDesign';
import UserIcon2 from '../../assets/images/usericon.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MarsIcon from '../../assets/images/mars.png';
import PaymentName from '../../assets/images/paymentname.png';
import Bag2 from '../../assets/images/bag2.png';
import Logout from '../../assets/images/Logout.png';
import BagIcon from '../../assets/images/bag.png';
import Modal from 'react-native-modal';
import { UserContext } from '../context';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import HttpService from '../HttpService';

const Account = ({ navigation }) => {
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState(null);
  const toggleModal = (check) => {
    setModalVisible(check);
  };

  const SignOut = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('jwt');
    setUser(null);
    setLoading(false);
    navigation.navigate('Home');
  };

  const cancelMembership = () => {
    setLoading(true);
    setUser((state) => ({ ...state, status: 'pending' }));
    setLoading(false);
    toggleModal(false);
  };

  const Loading = () => {
    if (loading) {
      return <Loader status={loading} />;
    }
    return null;
  };

  const MembershipButton = () => {
    if (user && user.status == 'pending') {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', { screen: 'Subscription' });
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayMedium',
              color: '#001F65',
              fontSize: 15,
            }}
          >
            Get Membership
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          toggleModal(true);
        }}
      >
        <Text
          style={{
            fontFamily: 'RalewayMedium',
            color: '#001F65',
            fontSize: 15,
          }}
        >
          Cancel Membership
        </Text>
      </TouchableOpacity>
    );
  };

  const LoginButton = () => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Auth', { screen: 'Login' })}>
          <Button
            onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
            buttonStyle={{
              width: '73%',
              padding: 6,
              textAlign: 'left',
              backgroundColor: '#001F65',
              justifyContent: 'space-around',
            }}
            containerStyle={{ paddingTop: 10, width: '100%' }}
            icon={<IconAnt name="arrow-right" size={20} color="white" />}
            iconRight
            title="Sign In With phone number"
          />
        </TouchableOpacity>
      </>
    );
  };
  const PersonalDetails = () => {
    return (
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayBold',
              fontSize: 16,
            }}
          >
            Personal Detail
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('WithoutTabs', { screen: 'EditProfile' })}
          >
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#001F65',
                fontSize: 15,
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={UserIcon2} style={{ resizeMode: 'contain' }} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                position: 'relative',
                paddingLeft: 10,
              }}
            >
              {user && user.name ? user.name : 'Not Available'}
            </Text>
          </View>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={BagIcon} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                paddingLeft: 10,
              }}
            >
              {user && user.dob ? user.dob : 'N/a'}
            </Text>
          </View>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={MarsIcon} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                paddingLeft: 10,
              }}
            >
              {user && user.gender ? user.gender : 'N/a'}
            </Text>
          </View>
        </View>
      </>
    );
  };

  const MembershipDetails = () => {
    return (
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayBold',
              fontSize: 16,
            }}
          >
            Membership Detail
          </Text>
          <MembershipButton />
        </View>

        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <View
            style={{
              ...styles.RowPersonalDetails,
              width: '55%',
            }}
          >
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
              }}
            >
              Start Date:{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
              }}
            >
              Not Available
            </Text>
          </View>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
              }}
            >
              End Date:{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
              }}
            >
              Not Available
            </Text>
          </View>
          <PaymentDetails />
        </View>
      </>
    );
  };

  const PaymentDetails = () => {
    return (
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            textAlign: 'right',
            alignItems: 'center',
            top: 15,
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayBold',
              fontSize: 16,
            }}
          >
            Personal Detail
          </Text>
          <Text
            style={{
              fontFamily: 'RalewayMedium',
              color: '#001F65',
              fontSize: 15,
            }}
          >
            Edit Card Detail
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 15,
          }}
        >
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={PaymentName} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                paddingLeft: 10,
              }}
            >
              Not Available
            </Text>
          </View>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={UserIcon2} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                paddingLeft: 14,
              }}
            >
              Not Available
            </Text>
          </View>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={Bag2} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                paddingLeft: 13,
              }}
            >
              Not Available
            </Text>
          </View>
        </View>
      </>
    );
  };

  const ShowMembershipDetails = () => {
    if (!user || user.status !== 'pending') {
      return (
        <Card
          style={{
            width: wp('95%'),
            borderRadius: 20,
            justifyContent: 'center',
            alignSelf: 'center',
            top: 20,
          }}
        >
          <Card.Content>
            <MembershipDetails />
          </Card.Content>
        </Card>
      );
    }
    return null;
  };
  function MembershipModal({ visible }) {
    return (
      <Modal isVisible={visible}>
        <View
          style={{
            backgroundColor: 'white',
            height: '30%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayBold',
              textAlign: 'center',
              fontSize: 19,
            }}
          >
            Are you sure you want to cancel your membership ?
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 40,
              width: '100%',
            }}
          >
            <Loading />
            <TouchableOpacity
              onPress={() => cancelMembership()}
              style={{
                backgroundColor: '#001F65',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                width: 150,
                height: 40,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 20,
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleModal(false)}
              style={{
                backgroundColor: '#001F65',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                width: 150,
                height: 40,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 20,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <LoginButton />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: wp('90%'),
            flexDirection: 'row',
            height: hp('20%'),
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingLeft: 40,
              fontFamily: 'RalewayBold',
            }}
          >
            My Account
          </Text>

          <TouchableOpacity onPress={() => SignOut()}>
            {loading ? (
              <Loader />
            ) : (
              <Image source={Logout} style={{ resizeMode: 'contain', height: 30 }} />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            bottom: 30,
          }}
        >
          <Card
            style={{
              width: wp('95%'),
              borderRadius: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <Card.Content>
              <PersonalDetails />
            </Card.Content>
          </Card>

          <ShowMembershipDetails />
        </View>
        <MembershipModal visible={isModalVisible} />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#001f65',
  },
  RowPersonalDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',

    paddingTop: 18,

    alignItems: 'center',
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
export default Account;
