import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function index() {
    return <View>
        <Link style={styles.texts} href="/doctor">Doktorlar</Link>
    </View>;
}

const styles = StyleSheet.create({
    texts: {
        fontSize: 16,
        padding: 4,
        borderWidth: 1,

    }
});