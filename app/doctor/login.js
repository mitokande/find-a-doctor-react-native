import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { Provider as PaperProvider } from 'react-native-paper';
import { Button, Divider, Appbar } from 'react-native-paper';

export default function Login({ doctor }) {
    const logo = require('../../assets/images/logo1.png');

    return (
        <PaperProvider>
            <View>
                <Appbar.Header statusBarHeight={10} mode={"small"} >
                    <Image source={logo} style={{ height: '100%' }} />
                </Appbar.Header>
                <Text style={styles.texts}>Login Doktor Sayfasındasın.</Text>
                <Link style={styles.texts} href={"/"}>Anasayfaya geri dön</Link>
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