import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { constants } from '../utils'
interface PROPS {
    title: string
    color?: string
    bgColor?: string
    width?: number
    disabled?: boolean
    onclick?: any
    radius?:number
    padding?:number
}
export default function Button({ title, color, bgColor, width, onclick, disabled,radius,padding }: PROPS) {
    return disabled ? <View style={{
        borderRadius: 10,
        backgroundColor: "#8080805c",
        width: width ? width : "100%",
        padding: 12
    }}>
        <Text style={{
            fontSize: 15,
            fontWeight: "700",
            color: color ? color : 'white',
            textAlign: "center"
        }}>{title} </Text>
    </View> : <TouchableOpacity style={{
        borderRadius:radius?radius: 10,
        backgroundColor: bgColor ? bgColor : constants.primary,
        width: width ? width : "100%",
        padding:padding?padding: 12,
        elevation: 5
    }} onPress={onclick}>
        <Text style={{
            fontSize: 15,
            fontWeight: "700",
            color: color ? color : 'white',
            textAlign: "center"
        }}>{title} </Text>
    </TouchableOpacity>
}