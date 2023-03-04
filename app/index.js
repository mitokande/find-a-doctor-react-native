import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function index() {
    return <View>
        <Link style={styles.texts} href="/doctor">Doktorlar</Link>
        <Link style={styles.texts} href="/doctor/randevu">Randevular</Link>
        <Link style={styles.texts} href="/doctor/login">Doktor Olarak Giriş Yap</Link>
    </View>;
}

const styles = StyleSheet.create({
    texts: {
        margin: 10,
        fontSize: 16,
        padding: 4,
        borderWidth: 1,

    }
});