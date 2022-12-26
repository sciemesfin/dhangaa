import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { constants } from '../utils';

export default function Toolbar(props: any) {
    const navigation = useNavigation<any>()
    return <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
        borderBottomWidth: 1, borderBottomColor: "#DDDDDD",
    }}>
        {
            props.back ? <TouchableOpacity style={{ paddingRight: 20 }}
                onPress={() => navigation.pop()}
            >
                <Ionicons name="chevron-back-outline" size={25} color="black" />
            </TouchableOpacity> : null
        }
        <View style={{ flex: 1, paddingRight: 10, flexDirection: "row", alignItems: "center" }}>
            <Image source={require('../assets/logo.png')}
                style={{ width: 40, height: 40, resizeMode: "contain" }} />
            <Text style={{  fontWeight: "700", fontSize: 30,paddingLeft:5,color:constants.primary }}>
                Dhangaa
                </Text>
        </View>
        <View style={{
            backgroundColor: "#edf2f7", justifyContent: "center", alignItems: "center",
            height: 40, width: 40, borderRadius: 40 / 2
        }}>
            <TouchableOpacity>
                <Feather name="search" size={25} color="black" />
            </TouchableOpacity>
        </View>
        <View style={{
            backgroundColor: "#edf2f7", justifyContent: "center", alignItems: "center",
            height: 40, width: 40, borderRadius: 40 / 2, marginLeft: 20
        }}>
            <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={{
            backgroundColor: "#edf2f7", justifyContent: "center", alignItems: "center",
            height: 40, width: 40, borderRadius: 40 / 2, marginLeft: 20
        }}>
            <TouchableOpacity>
                <FontAwesome5 name="user-alt" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>
}