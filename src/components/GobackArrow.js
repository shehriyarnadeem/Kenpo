import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
const GobackArrow = ({ text, navigation, route }) => {
    return (
        <View style={styles.main}>
            <TouchableOpacity activeOpacity={10}>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 40,
                        width: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                    }}
                >
                    <Icon
                        name="arrow-left"
                        size={20}
                        color="#001F65"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingLeft: 30,
        alignItems: 'center',
        flexDirection: 'row',
    },

    image: {
        resizeMode: 'cover',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        left: 20,
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: 'RalewayMedium',
    },
})
export default GobackArrow
