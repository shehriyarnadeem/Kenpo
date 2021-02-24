import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native'
import { Button, Card } from 'react-native-paper'
import UserIcon from '../../assets/images/usericon.png'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import PathIcon from '../../assets/images/path.png'
import PaymentName from '../../assets/images/paymentname.png'
import Bag2 from '../../assets/images/bag2.png'
import Logout from '../../assets/images/Logout.png'
import BagIcon from '../../assets/images/bag.png'
import Modal from 'react-native-modal'

const Account = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = (check) => {
        setModalVisible(check)
    }
    const PersonalDetails = () => {
        return (
            <>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 5,
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
                    <Text
                        style={{
                            fontFamily: 'RalewayMedium',
                            color: '#001F65',
                            fontSize: 15,
                        }}
                    >
                        Edit Profile
                    </Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <View
                        style={{
                            ...styles.RowPersonalDetails,
                            width: '35%',
                        }}
                    >
                        <Image source={UserIcon} />
                        <Text
                            style={{
                                fontFamily: 'RalewayMedium',
                                color: '#000000',
                                fontSize: 16,
                            }}
                        >
                            John Doe
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.RowPersonalDetails,
                            width: '40%',
                        }}
                    >
                        <Image source={BagIcon} />
                        <Text
                            style={{
                                fontFamily: 'RalewayMedium',
                                color: '#000000',
                                fontSize: 16,
                            }}
                        >
                            20-02-2000
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.RowPersonalDetails,
                            width: '25%',
                        }}
                    >
                        <Image source={PathIcon} />
                        <Text
                            style={{
                                fontFamily: 'RalewayMedium',
                                color: '#000000',
                                fontSize: 16,
                            }}
                        >
                            Male
                        </Text>
                    </View>
                </View>
            </>
        )
    }

    const MembershipDetails = () => {
        return (
            <>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 5,
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
                    <TouchableOpacity onPress={() => toggleModal(true)}>
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
                            Start Date:
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'RalewayMedium',
                                color: '#000000',
                                fontSize: 16,
                            }}
                        >
                            20-02-2020
                        </Text>
                    </View>
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
                            End Date
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'RalewayMedium',
                                color: '#000000',
                                fontSize: 16,
                            }}
                        >
                            19-03-2020
                        </Text>
                    </View>
                    <PaymentDetails />
                </View>
            </>
        )
    }

    const PaymentDetails = () => {
        return (
            <>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 5,
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
                            width: '35%',
                        }}
                    >
                        <Image source={PaymentName} />
                        <Text
                            style={{
                                fontFamily: 'RalewayMedium',
                                color: '#000000',
                                fontSize: 16,
                            }}
                        >
                            John Doe
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.RowPersonalDetails,
                            width: '60%',
                        }}
                    >
                        <Image source={UserIcon} />
                        <Text
                            style={{
                                fontFamily: 'RalewayMedium',
                                color: '#000000',
                                fontSize: 16,
                            }}
                        >
                            XXXX XXX XXXX 4651
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.RowPersonalDetails,
                            width: '30%',
                        }}
                    >
                        <Image source={Bag2} />
                        <Text
                            style={{
                                fontFamily: 'RalewayMedium',
                                color: '#000000',
                                fontSize: 16,
                            }}
                        >
                            02-2024
                        </Text>
                    </View>
                </View>
            </>
        )
    }

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
        )
    }

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
                        fontFamily: 'RalewayMedium',
                    }}
                >
                    My Account
                </Text>
                <Image source={Logout} />
            </View>
            <View
                style={{
                    alignItems: 'center',
                    flex: 1,
                }}
            >
                <Card
                    style={{
                        width: '90%',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}
                >
                    <Card.Content>
                        <PersonalDetails />
                    </Card.Content>
                </Card>
                <Card
                    style={{
                        width: '90%',
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
            </View>
            <MembershipModal visible={isModalVisible} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001f65',
    },
    RowPersonalDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 18,

        alignItems: 'center',
    },
})
export default Account
