import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import GobackArrow from '../components/GobackArrow'
import GoForwardCard from '../components/GoForwardCard'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
const Verification = ({ navigation }) => {
    navigation.setOptions({ headerShown: false })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.heading}>
                    <Text style={styles.verification}>Verification</Text>
                    <Text
                        style={{
                            color: '#FFFFFF',
                            fontFamily: 'RalewayMedium',
                            fontSize: 24,
                        }}
                    >
                        We have sent a message on your mobile number
                    </Text>
                </View>

                <View style={styles.input}>
                    <OTPInputView
                        style={{
                            width: '80%',
                            height: 120,
                        }}
                        codeInputFieldStyle={{
                            backgroundColor: 'white',
                            borderRadius: 4,
                            color: 'black',
                            fontSize: 30,
                            height: 60,
                            width: 60,
                            fontWeight: 'bold',
                        }}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        onCodeFilled={(code) => {
                            console.log(`Code is ${code}, you are good to go!`)
                        }}
                    />
                    <Text
                        style={{
                            color: '#7EA6FF',
                            fontFamily: 'RalewayMedium',
                            fontSize: 18,
                        }}
                    >
                        Resend OTP
                    </Text>
                </View>
            </View>
            <View style={styles.continue}>
                <GoForwardCard
                    text="Continue"
                    navigation={navigation}
                    redirect="UserDetails"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001f65',
    },
    content: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    heading: {
        width: '100%',
        paddingLeft: 30,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    input: {
        alignItems: 'center',

        justifyContent: 'center',
    },
    borderStyleBase: {
        width: 30,
        height: 45,
        backgroundColor: 'white',
    },

    borderStyleHighLighted: {
        borderColor: 'white',
    },
    continue: {
        bottom: 30,

        justifyContent: 'flex-end',
    },

    underlineStyleBase: {
        width: 50,
        height: 50,
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        left: 40,
        top: 50,
    },

    underlineStyleHighLighted: {
        borderColor: '#03DAC6',
    },
    verification: {
        color: '#7EA6FF',
        fontFamily: 'RalewayBold',
        fontSize: 20,
        paddingBottom: 10,
    },
})
export default Verification
