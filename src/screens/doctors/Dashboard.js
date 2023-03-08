import { StyleSheet, Text, ActivityIndicator, FlatList, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Headline, Button, Divider, Appbar, TextInput } from 'react-native-paper'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setRandevu } from '../../redux/slices/randevuSlice';
export default function DoctorDashboard() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [randevular, setRandevular] = useState([]);
    const [mesajlar, setMesajlar] = useState([]);
    const [sorular, setSorular] = useState([]);
    const logo = require('../../../assets/images/logo1.png');
    const [activePage, setActivePage] = useState(0)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userSlice.user);

    const getRandevular = async () => {
        try {
            const response = await fetch('https://doktoradanis.net/api/randevu', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    doctorID: user.id,
                }),
            });
            const json = await response.json();
            //   setData(json.movies);
            setRandevular(json.data);
            console.log(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const getSorular = async () => {
        try {
            const response = await fetch('https://doktoradanis.net/api/soru', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    doctorID: user.id,
                }),
            });
            const json = await response.json();
            //   setData(json.movies);
            setSorular(json.data);
            console.log(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const getMesajlar = async () => {
        try {
            const response = await fetch('https://doktoradanis.net/api/mesaj', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    doctorID: user.id,
                }),
            });
            const json = await response.json();
            //   setData(json.movies);
            setMesajlar(json.data);
            console.log(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getRandevular();
        getSorular();
        getMesajlar();
    }, []);

    const Pages = [
        {
            id: 1,
            title: "Randevularım",
            items: [...randevular]
        },
        {
            id: 2,
            title: "Sorularım",
            items: [...sorular]
        },
        {
            id: 3,
            title: "Mesajlarım",
            items: [...mesajlar]

        },
    ];
    // console.log(user)
    return (
        <SafeAreaView>
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={{ fontSize: 30, fontWeight: "bold", color: "#04031D" }}
                    >{user.first_name} {user.last_name}</Text>

                    <Image
                        style={{ height: 50, width: 50, borderRadius: 50 }}
                        source={{ uri: 'https://doktoradanis.net/images/doctors/profile/' + user.profile_picture }} />

                </View>
                <ScrollView style={{ marginVertical: 20 }} horizontal>
                    {Pages.map((page, index) => (
                        <TouchableOpacity
                            onPress={() => { setActivePage(index) }}
                            style={{ marginRight: 10 }}
                            key={page.id}
                        >
                            <Text style={[{ fontSize: 19, color: "#04031D" }, activePage === index && { color: "#487DD2" }]}>
                                {page.title} ({page.items.length})
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={{ padding: 24 }}>
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            data={randevular.slice(0, 10)}
                            keyExtractor={({ id }) => id}
                            renderItem={({ item }) => (
                                item.patient != null ?
                                    <View>
                                        <Text style={{ fontSize: 20 }}>
                                            {item.patient.first_name} {item.patient.last_name} ile
                                        </Text>
                                        <Text style={{ fontSize: 20 }}>
                                            {item.appointment_time} randevusu
                                        </Text>
                                    </View>
                                    : null
                            )}
                        />
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})