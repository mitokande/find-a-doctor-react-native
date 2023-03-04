import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function index() {
    return <View>
        <Text style={styles.texts}>Doktor Sayfasındasın.</Text>
        <Link style={styles.texts} href={"/"}>Anasayfaya geri dön</Link>
    </View>;
}


const styles = StyleSheet.create({
    texts: {
        fontSize: 16,
        padding: 4,
        borderWidth: 1,

    }
});