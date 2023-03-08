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
    // console.log(user)
    return (
        <SafeAreaView>
            {/* header */}
            <Appbar.Header statusBarHeight={40} mode={"small"} >
                <Image source={logo} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
            </Appbar.Header>
            <View>
                <Headline style={{ alignSelf: "center", marginTop: 10 }}>
                    Doktor {user.first_name} {user.last_name} Hoşgeldiniz
                </Headline>
                <View style={{ width: '80%', alignSelf: 'center', marginTop: 10 }}>
                    <Image source={{ uri: 'https://doktoradanis.net/images/doctors/profile/' + user.profile_picture }} style={{ width: '100%', height: '50%', marginBottom: 10 }} />
                    <Text style={{ marginBottom: 10 }}>
                        Hakkımda: {user.about}
                    </Text>
                    <Text>
                        Eğitim: {user.education}
                    </Text>
                </View>
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