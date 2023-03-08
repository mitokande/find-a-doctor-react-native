import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Headline, Button, Divider, Appbar, TextInput } from 'react-native-paper'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';


export default function DoctorLogin({ navigation }) {
    const logo = require('../../../assets/images/logo1.png');
    const [email, setEmail] = useState('omertoprak@gmail.com');
    const [password, setPassword] = useState('123123123');
    const dispatch = useDispatch();

    const tryLogin = async () => {
        try {
            const response = await fetch('https://doktoradanis.net/api/doctor/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const json = await response.json();
            console.log(json.msg)
            if (json.code == "Success") {
                dispatch(setUser(json.data));
                navigation.replace("DoctorDashboard")
            } else {
                navigation.replace("Welcome")

            }
        } catch (error) {
            console.error(error);
        } finally {
            console.log('dashboard')
        }
    };
    return (
        <SafeAreaView>
            {/* header */}
            <Appbar.Header statusBarHeight={30} mode={"small"} >
                <Image source={logo} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
            </Appbar.Header>
            <View>
                <Headline style={{ alignSelf: "center", marginTop: 10 }}>
                    Doktor Girişi Yap
                </Headline>
                <View style={{ alignItems: "center", gap: 10 }}>
                    <TextInput onChangeText={email => setEmail(email)} style={{ width: '90%' }} placeholder={"Email:"} />
                    <TextInput onChangeText={password => setPassword(password)} style={{ width: '90%' }} placeholder={"Şifre:"} />
                    <Button mode="contained" onPress={() => { tryLogin() }}>Giriş Yap</Button>
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