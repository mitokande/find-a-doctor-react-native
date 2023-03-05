import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button } from 'react-native-paper';


export default function ButtonIcon({ text, link, icon }) {

    return (

        <Button theme={{ typescale: { labelLarge: { letterSpacing: 1 } } }} >{text}</Button>

    );
}
