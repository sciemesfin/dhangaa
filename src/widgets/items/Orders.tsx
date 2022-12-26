import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { constants } from "../../utils";
import items from "../../data/items";

export default function Orders() {
  const orders = items.map((x) => x.children)[0];
  // console.log(orders)
  const [activeTab, setTab] = useState("Orders received");
  const tabs = [
    {
      title: "Orders received",
      icon: (
        <MaterialCommunityIcons
          name="playlist-check"
          size={24}
          color={activeTab === "Orders received" ? constants.primary : "black"}
        />
      ),
    },
    {
      title: "Orders placed",
      icon: (
        <MaterialIcons
          name="playlist-add"
          size={24}
          color={activeTab === "Orders placed" ? constants.primary : "black"}
        />
      ),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#edf2f7",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
        }}
      >
        {tabs.map((x, i) => (
          <TouchableOpacity
            key={i}
            style={{
              backgroundColor: "#edf2f7",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
              borderRadius: 30,
              width: "48%",
            }}
            onPress={() => setTab(x.title)}
          >
            {x.icon}
            <Text
              style={{
                color: activeTab === x.title ? constants.primary : "black",
                fontWeight: "400",
                paddingLeft: 5,
                fontSize: 16,
              }}
            >
              {x.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View>
            {orders.map((x, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <View>
                  <Image
                    source={{ uri: x.img }}
                    style={{
                      height: 80,
                      width: 80,
                      resizeMode: "cover",
                      borderRadius: 5,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    paddingBottom: 15,paddingTop:15,marginLeft:15,
                    borderBottomWidth: orders.length - 1 > i ? 1 : 0,
                    borderBottomColor: "#edf2f7",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "700" }}>
                    {x.title}
                  </Text>
                  <Text numberOfLines={1} style={{fontSize:12,paddingTop:5}}>{x.desc} </Text>
                  <Text numberOfLines={1} style={{fontSize:12,paddingTop:5}}>{Date()} </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",paddingTop:5
                    }}
                  >
                    <Text style={{ color: constants.primary,fontWeight:"700" }}>{x.price} </Text>
                    <Text
                      style={{
                        fontWeight: "700",
                        color: constants.success,
                        fontSize: 16,
                      }}
                    >
                      Delivered
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          borderTopWidth: 1,
          borderTopColor: "#DDDDDD",
          left: 0,
          right: 0,
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <Text style={{ textAlign: "center" }}>No pending orders</Text>
      </View>
    </View>
  );
}
