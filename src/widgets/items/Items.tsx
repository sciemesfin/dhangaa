import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Toolbar } from "../../components";
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { constants } from "../../utils";
import ItemsComponent from "../components/items";

export default function Items(props: any) {
    const { payload } = props.route.params
    return <View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
            <Toolbar
                search={() => props.navigation.navigate("Search")}
                profile={() => props.navigation.navigate("Profile")}
                back
            />
            <ScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} >
                <View>
                    <View style={{
                        margin: 15, flexDirection: "row", alignItems: "center",
                        backgroundColor: constants.light, padding: 6, minHeight: 40,
                        borderRadius: 30, paddingLeft: 20
                    }}>
                        <EvilIcons name="search" size={24} color="black" />
                        <TextInput placeholder="Search" style={{
                            fontSize: 16, paddingLeft: 10
                        }} />
                    </View>
                    <View style={{
                        padding: 15, paddingTop: 5, flexDirection: "row",
                        justifyContent: "space-between", alignItems: "center"
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>{payload.title} </Text>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{
                                fontSize: 16, fontWeight: "600", color: constants.primary,
                                paddingRight: 10
                            }}>Filters</Text>
                            <MaterialCommunityIcons name="sort" size={24} color={constants.primary} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <ItemsComponent category={payload.title} />
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
}