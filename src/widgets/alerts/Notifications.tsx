import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { constants } from "../../utils";

export default function Notifications() {
  const tabs = ["All alerts","Orders received", "Orders placed"];
  const [activeTab, setTab] = useState(tabs[0]);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
          paddingBottom: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#edf2f7",
        }}
      >
        {tabs.map((x, i) => (
          <TouchableOpacity
            key={i}
            style={{
              borderBottomWidth:activeTab === x ? 3:0,
              borderBottomColor:
                 constants.primary,minWidth:100,
            }}
            onPress={()=>setTab(x)}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: activeTab === x ? constants.primary : "black",
                paddingBottom: 15,textAlign:"center"
              }}
            >
              {x}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>Alerts</Text>
    </View>
  );
}
