import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Welcome({ navigation }) {
    return (
        <SafeAreaView>
            <Text>welcome</Text>
            <TouchableOpacity
                style={{ backgroundColor: '#aaaa' }}
                onPress={() => { navigation.navigate("DoctorLogin") }}
            >
                <Text>Go To Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})