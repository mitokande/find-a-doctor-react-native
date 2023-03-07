import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DoctorLogin({ navigation }) {
    return (
        <SafeAreaView>
            <Text>DoctorLogin</Text>
            <TouchableOpacity
                style={{ backgroundColor: '#aaaa' }}
                onPress={() => { navigation.navigate("Welcome") }}
            >
                <Text>Go To Start</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})