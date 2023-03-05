import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from "react-native";
import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import ButtonIcon from "../src/Components/ButtonIcon";
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import * as React from 'react';


export default function index() {
    const router = useRouter();
    const PlaceholderImage = require('../assets/images/mobil-bg1.png');
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (
        <PaperProvider>

            <View style={styles.container}>
                {/* header */}
                <Appbar.Header statusBarHeight={10} mode={"small"} >
                    <Appbar.Content title="Doktora Danış" style={{ alignItems: "center" }} />
                </Appbar.Header>
                {/* background image */}
                <Image style={styles.image} source={PlaceholderImage} />
                {/* panel */}
                <View style={styles.panel}>
                    <View style={styles.buttonContainer} >
                        <Button mode="contained" onPress={() => router.push("/doctor/login")}>
                            Doktor Login
                        </Button>
                        <Button mode="contained" onPress={() => router.push("/doctor/register")}>
                            Doktor Register
                        </Button>

                    </View>
                    <View style={styles.buttonContainer} >
                        <Button mode="contained" onPress={() => router.push("/patient/login")}>
                            Hasta Login
                        </Button>
                        <Button mode="contained" onPress={() => router.push("/patient/register")}>
                            Hasta Register
                        </Button>
                    </View>
                </View>
                <StatusBar style="dark" />
            </View >
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',


    },
    panel: {

        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",

        width: '100%',
        flex: 1,
    },
    header: {
        backgroundColor: '#aaaa',
        borderWidth: 1,
        backgroundColor: "#fff",
        width: '100%',
        height: '7%',
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: 500,
    },
    buttonContainer: {
        width: '40%',
        height: '100%',
        justifyContent: "space-evenly",
        alignItems: 'center',

    }
});