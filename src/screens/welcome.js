import { View, Text, StyleSheet, Pressable, Image, ImageBackground, SafeAreaView } from 'react-native'
import { Button, Divider, Appbar } from 'react-native-paper';
import React from 'react'

export default function Welcome({ navigation }) {
    const logo = require('../../assets/images/logo1.png');
    const PlaceholderImage = require('../../assets/images/mobil-bg1.png');
    return (
        <SafeAreaView style={styles.container}>
            {/* header */}
            <Appbar.Header statusBarHeight={40} mode={"small"} >
                <Image source={logo} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
            </Appbar.Header>
            {/* background image */}
            <Image style={styles.image} source={PlaceholderImage} />
            <Divider />
            {/* panel */}
            <View style={styles.panel}>
                <View style={styles.buttonContainer} >
                    <Button mode="contained" onPress={() => { navigation.navigate("DoctorLogin") }}>
                        Doktor Login
                    </Button>
                    <Button mode="contained" >
                        Doktor Register
                    </Button>

                </View>
                <View style={styles.buttonContainer} >
                    <Button mode="contained" >
                        Hasta Login
                    </Button>
                    <Button mode="contained" >
                        Hasta Register
                    </Button>
                </View>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,

    },
    panel: {

        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: '#fff',
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