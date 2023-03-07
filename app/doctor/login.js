import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { Headline, Provider as PaperProvider, TextInput } from 'react-native-paper';
import { Button, Divider, Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function handleChange(event) {
    console.log(event)
}

export default function Login({ doctor }) {
    const logo = require('../../assets/images/logo1.png');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            console.log(json)
        } catch (error) {
            console.error(error);
        } finally {
            console.log('dashboard')
        }
    };
    return (
        <PaperProvider>
            <View>
                <Appbar.Header statusBarHeight={10} mode={"small"} >
                    <Image source={logo} style={{ height: '100%' }} />
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
                {/* <Text style={styles.texts}>Login Doktor Sayfasındasın.</Text>
                <Link style={styles.texts} href={"/"}>Anasayfaya geri dön</Link> */}
            </View>
        </PaperProvider>

    );
}


const styles = StyleSheet.create({
    texts: {
        margin: 5,
        fontSize: 16,
        padding: 4,
        borderWidth: 1,

    }
});