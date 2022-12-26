import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Avatar } from 'react-native-paper';
import { auth } from "../../services";
import { SimpleLineIcons } from '@expo/vector-icons';
import { AuthContext } from "../../utils/context";

export default function UserProfile(props: any) {

    const [user, setUser] = useState({full_name:"",email:""})

    useEffect(() => { getUser() }, [])

    const getUser = async () => {
        let userRaw = await auth.getToken()
        setUser(JSON.parse(`${userRaw}`))
    }

    const lists = [
        {
            title: "Home", route: "Home"
        },
        {
            title: "Edit Profile", route: "EditProfile"
        },
        {
            title: "My Shares", route: "MyShares"
        },
        {
            title: "Sell Share", route: "SellShare"
        },
        {
            title: "See all Shares", route: "Home"
        },
        {
            title: "Message", route: "Message"
        },
        {
            title: "Category", route: "Category"
        }
    ]
    const { signoutContext } = React.useContext(AuthContext)
    const signout = () => {
        auth.logout()
        signoutContext()
    }

    return <View style={{ flex: 1, height: "100%" }}>
        <View>
            <ScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} >
                <View style={{
                    padding: 10
                }}>

                    <View style={{
                        elevation: 10, backgroundColor: "white", padding: 10,
                        flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"
                    }}>
                        <View style={{
                            alignItems: "center",
                        }}>
                            <Avatar.Image
                                size={100}
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGiMXujrwq5L7xmQIr22E5r87Q57B5e5BCnZZ93e4Ad5fToDjuLElDAI1YDhiTtpxZt4&usqp=CAU" }}
                            />
                        </View>
                        <View >
                            <Text style={{ textAlign: "center", fontSize: 16 }}>{user?.full_name} </Text>
                            <Text style={{ textAlign: "center", fontSize: 16 }}>{user?.email} </Text>
                            <Text style={{ textAlign: "center", fontSize: 16 }}>+2519168789 </Text>
                        </View>
                    </View>


                    <View style={{
                        backgroundColor: "white", elevation: 10
                    }}>
                        {
                            lists.map((x:any, i:number) => <TouchableOpacity key={i}
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderTopWidth: 1, borderTopColor: "#DDDDDD",
                                    padding: 10, paddingLeft: 20, paddingRight: 20
                                }}
                                onPress={() => props.navigation.navigate(x.route)}
                            >
                                <Text style={{ fontSize: 16 }}>{x.title} </Text>
                                {x.value ? <Text style={{ fontSize: 16, fontWeight: "700" }}>{x.value} </Text> : null}
                            </TouchableOpacity>)
                        }
                        <TouchableOpacity
                            style={{
                                flexDirection: "row", alignItems: "center", padding: 10, paddingTop: 15,
                                borderTopWidth: 1, borderTopColor: "#DDDDDD", marginBottom: 15
                            }} onPress={signout}>
                            <SimpleLineIcons name="logout" size={24} color="red" />
                            <Text style={{ paddingLeft: 15, fontSize: 20, color: "red" }}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
}
