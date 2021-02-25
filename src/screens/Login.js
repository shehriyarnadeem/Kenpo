import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'

import GoForwardCard from '../components/GoForwardCard'
const Login = ({ navigation }) => {
    const [value, setValue] = useState('')
    const [formattedValue, setFormattedValue] = useState('')
    const [valid, setValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    navigation.setOptions({ headerShown: false })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.heading}>
                    <Text
                        style={{
                            color: '#FFFFFF',
                            fontFamily: 'RalewayMedium',
                            fontSize: 24,
                            textAlign: 'left',
                        }}
                    >
                        Please enter your mobile no. to continue
                    </Text>
                </View>

                <View style={styles.phone}>
                    <PhoneInput
                        defaultValue={value}
                        defaultCode="DM"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text)
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text)
                        }}
                        containerStyle={{
                            backgroundColor: '#FFFFFF',
                            width: '90%',
                        }}
                        withDarkTheme
                        withShadow
                        autoFocus
                    />
                </View>
            </View>
            <View style={styles.continue}>
                <GoForwardCard
                    text="Continue"
                    redirect="Verification"
                    navigation={navigation}
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
        width: '80%',
        paddingLeft: 20,
        paddingTop: 40,
        minHeight: 200,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    continue: {
        bottom: 20,

        justifyContent: 'flex-end',
    },
    phone: {
        alignItems: 'center',
        minHeight: 10,
        justifyContent: 'center',
    },
})
export default Login
