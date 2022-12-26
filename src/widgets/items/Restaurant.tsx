import React, { useState } from "react";

import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { constants, formatter } from "../../utils";
import { Toolbar } from "../../components";
import { Avatar } from "react-native-paper";
const { width } = Dimensions.get("window");

export default function Restaurant(props: any) {
  const { payload } = props.route.params;

  const images = [
    {
      id: 0,
      img: payload.img,
      title: "JOIN AND CONNECT!",
      subtitle:
        "Here, nothing is impossible. Get your dream job, buy what you want, and sell what ever you want!",
    },
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/61KE5C1MQrL._AC_SY355_.jpg",
      title: "Shopping Made Easy!",
      subtitle: "A great place to buy and sell things you love !",
    },
    {
      id: 2,
      img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06565881.png",
      title: "Join Now",
      subtitle: "Join Etyop for a better experience !",
    },
  ];

  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const setSliderPage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const { currentPage: pageIndex } = sliderState;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View>
        <Toolbar
          search={() => props.navigation.navigate("Search")}
          profile={() => props.navigation.navigate("Profile")}
          back
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ paddingBottom: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
              }}
            >
              <View>
                <ScrollView
                  horizontal={true}
                  style={{
                    top: 0,
                    height: width,
                    width: width,
                  }}
                  scrollEventThrottle={16}
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  onScroll={(event) => {
                    setSliderPage(event);
                  }}
                >
                  {images.map((x: any, i: number) => (
                    <ImageBackground
                      key={i}
                      source={{ uri: x.img }}
                      resizeMode="cover"
                      style={{
                        height: width,
                        width: width,
                      }}
                    >
                      <View
                        style={{
                          position: "absolute",
                          bottom: 10,
                          left: 0,
                          right: 0,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "grey",
                            padding: 5,
                            minWidth: 50,
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: "grey",
                          }}
                        >
                          <View style={styles.paginationWrapper}>
                            {Array.from(Array(images.length).keys()).map(
                              (_key, index) => (
                                <View
                                  style={[
                                    styles.paginationDots,
                                    {
                                      opacity: pageIndex === index ? 1 : 0.2,
                                    },
                                  ]}
                                  key={index}
                                />
                              )
                            )}
                          </View>
                        </View>
                      </View>
                    </ImageBackground>
                  ))}
                </ScrollView>
              </View>
              <View style={{ paddingTop: 10 }}>
                {/* <View style={styles.paginationWrapper}>
                                {Array.from(Array(images.length).keys()).map((_key, index) => (
                                    <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
                                ))}
                            </View> */}
                <View style={{ padding: 15 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "800", fontSize: 22 }}>
                      {payload.title}{" "}
                    </Text>
                    <Text style={{ fontWeight: "800", fontSize: 16 }}>
                      {payload.brand}{" "}
                    </Text>
                  </View>
                  <Text style={{ fontWeight: "800", fontSize: 16 }}>
                    {formatter.number(payload.price)}{" "}
                  </Text>
                  <Text
                    style={{ color: "grey", fontSize: 15, fontWeight: "600" }}
                  >
                    Listed yesterday on Woreda 06, Addis Ababa.
                  </Text>
                </View>

                <View style={{ padding: 15 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: constants.light,
                          justifyContent: "center",
                          height: 50,
                          width: 50,
                          borderRadius: 50 / 2,
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="ios-notifications"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text
                        style={{ fontSize: 18, fontWeight: "800", padding: 10 }}
                      >
                        Alert
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: constants.light,
                          justifyContent: "center",
                          height: 50,
                          width: 50,
                          borderRadius: 50 / 2,
                          alignItems: "center",
                        }}
                      >
                        <MaterialIcons name="report" size={24} color="black" />
                      </View>
                      <Text
                        style={{ fontSize: 18, fontWeight: "800", padding: 10 }}
                      >
                        Report
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: constants.primary,
                          justifyContent: "center",
                          height: 50,
                          width: 50,
                          borderRadius: 50 / 2,
                          alignItems: "center",
                        }}
                      >
                        <MaterialIcons
                          name="restaurant-menu"
                          size={24}
                          color={"white"}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "800",
                          padding: 10,
                          color: constants.primary,
                        }}
                      >
                        Menu
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: constants.light,
                          justifyContent: "center",
                          height: 50,
                          width: 50,
                          borderRadius: 50 / 2,
                          alignItems: "center",
                        }}
                      >
                        <FontAwesome5 name="share" size={24} color="black" />
                      </View>
                      <Text
                        style={{ fontSize: 18, fontWeight: "800", padding: 10 }}
                      >
                        Share
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 22, fontWeight: "800" }}>
                  Contact Information
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 20,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ paddingRight: 10 }}>
                      <Avatar.Image
                        size={50}
                        source={{
                          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_cSRnL4eLGTwEt0rBym1y_PTjpeSTwtOH0HFR4FXaBS_dAH58X2UupBiHYesQHe5Qd88&usqp=CAU",
                        }}
                      />
                    </View>
                    <View>
                      <Text style={{ fontSize: 22, fontWeight: "800" }}>
                        John Doe
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialIcons
                          name="verified"
                          size={18}
                          color={constants.primary}
                        />
                        <Text style={{ paddingLeft: 5 }}>Verified user</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Ionicons name="ios-call" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons name="message" size={28} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons
                      name="chatbubble-ellipses"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ padding: 15 }}>
                <Text
                  style={{ fontSize: 22, fontWeight: "800", lineHeight: 40 }}
                >
                  Description
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  {/* {payload.desc} */}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paginationWrapper: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 6,
    width: 6,
    borderRadius: 7 / 2,
    backgroundColor: "white",
  },
});
