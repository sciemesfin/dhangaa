import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import category from "../../data/category";
import { FontAwesome, EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { constants } from "../../utils";
const { width } = Dimensions.get("window");

export default function Category(props: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              padding: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: constants.light,
                padding: 6,
                minHeight: 40,
                borderRadius: 30,
                paddingLeft: 20,
                width: "90%",
              }}
            >
              <EvilIcons name="search" size={24} color="black" />
              <TextInput
                placeholder="Search"
                style={{
                  fontSize: 16,
                  paddingLeft: 10,
                  flex: 1,
                }}
              />
            </View>
            <TouchableOpacity>
              <FontAwesome name="sort-alpha-asc" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 15 }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {category.map((x, i) => (
                <TouchableOpacity
                  key={i}
                  style={{
                    borderWidth: 1,
                    borderColor: "#DDDDDD",
                    marginBottom: 10,
                    width: width / 2.2,
                    borderRadius: 5,
                  }}
                >
                  <View>{x.icon}</View>
                  <View style={{ padding: 10 }}>
                    <Text>{x.title} </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
