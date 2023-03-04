import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function index({ doctor }) {
    return <View>
        <Text style={styles.texts}>Login Doktor Sayfasındasın.</Text>
        <Link style={styles.texts} href={"/"}>Anasayfaya geri dön</Link>
    </View>;
}


const styles = StyleSheet.create({
    texts: {
        margin: 5,
        fontSize: 16,
        padding: 4,
        borderWidth: 1,

    }
});