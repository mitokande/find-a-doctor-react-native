import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { Headline, Button, Divider, Appbar, TextInput } from 'react-native-paper'

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function DoctorDashboard() {
    const navigation = useNavigation();
    const logo = require('../../../assets/images/logo1.png');

    const dispatch = useDispatch();
    const user = useSelector((state) => state.userSlice.user);

    return (
        <SafeAreaView>
            {/* header */}
            <Appbar.Header statusBarHeight={30} mode={"small"} >
                <Image source={logo} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
            </Appbar.Header>
            <View>
                <Headline style={{ alignSelf: "center", marginTop: 10 }}>
                    Doktor {user}
                </Headline>
            </View>
            {/* <Button
                style={{ backgroundColor: '#aaaa' }}
                onPress={() => { navigation.navigate("Welcome") }}
            >
                <Text>Go To Start</Text>
            </Button> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})