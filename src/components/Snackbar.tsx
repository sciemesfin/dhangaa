import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

interface PROPS{
open:boolean
title:string
desc:string
bgColor?:string
}

const CustomSnackbar = ({ open, title, desc, bgColor }:PROPS) => {
    const [toggle, setToggle] = useState(open)
    return toggle ? <Card style={{
        backgroundColor: bgColor ? bgColor : 'red',
        position: "absolute",
        bottom: 0,
        padding: 20,
        width: "100%",
        elevation: 20,
        borderRadius: 0
    }}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <View>
                <Text style={{ fontWeight: "700", fontSize: 16, color: "white" }}>{title} </Text>
                <Text style={{ fontWeight: "400", fontSize: 13, color: "white" }}>{desc} </Text>
            </View>
            <TouchableOpacity onPress={() => setToggle(false)}>
                <AntDesign name="closecircle" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </Card> : null
};

export default CustomSnackbar