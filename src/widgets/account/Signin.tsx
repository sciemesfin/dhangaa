import React, { useRef, useState } from "react";
import { View, Text, Image, Alert, Dimensions, ScrollView } from "react-native";
import { Button, Input, Link, Loading, MinNavbar } from "../../components";

import PhoneInput from "react-native-phone-number-input";
import { validator } from "../../utils";

export default function Signin(props: any) {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);

  const [user, setUser] = useState({ phone: "", password: "" });

  const [isValid, setIsValid] = useState({
    phone: false,
    password: false,
  });

  const [viewPassword, setPasswordVisible] = useState(false);
  function validatePhoneNumber(e: string) {
    let phone = validator.validatePhoneNumber(e);
    setUser({ ...user, phone: e });
    setIsValid({ ...isValid, phone: phone ? true : false });
  }

  const [loading, setLoading] = useState(false);

  function submit() {
    setLoading(true);
    props.navigation.navigate("Home");
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <MinNavbar title="Sign in to your account" />
      <View style={{ flex: 1, padding: 20 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View>
              <Image
                source={require("../../assets/i1.webp")}
                style={{
                  width: "100%",
                  height: Dimensions.get("window").height / 3,
                  resizeMode: "stretch",
                }}
              />
            </View>
            <View style={{ paddingBottom: 20 }}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                placeholder="Phone Number"
                defaultCode="ET"
                layout="first"
                // withShadow
                // autoFocus
                containerStyle={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: "#DDDDDD",
                  borderRadius: 5,
                  backgroundColor: "white",
                }}
                textContainerStyle={{
                  width: "100%",
                  elevation: 0,
                  backgroundColor: "white",
                  borderRadius: 5,
                  paddingVertical: 5,
                  paddingBottom: 10,
                }}
                onChangeFormattedText={(text) => {
                  setphoneNumber(text);
                  validatePhoneNumber(text);
                }}
              />
            </View>
            <View style={{ paddingBottom: 40 }}>
              <Input
                label="Password"
                mode
                placeholder="Type your password here"
                onchange={(e:any) => setUser({ ...user, password: e })}
                showPassword={() => setPasswordVisible((on) => !on)}
                password={!viewPassword}
                right={viewPassword ? "eye" : "eye-off"}
              />
            </View>
            <View style={{ paddingBottom: 20 }}>
              {loading ? (
                <Loading />
              ) : (
                <Button
                  disabled={
                    user.phone === "" || user.password === "" ? true : false
                  }
                  title="Sign In"
                  onclick={submit}
                />
              )}
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Link
                align="center"
                title="Forgot your password ?"
                onclick={() => props.navigation.navigate("ForgotPassword")}
              />
            </View>
            <View
              style={{
                paddingBottom: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 2,
                  width: "40%",
                  backgroundColor: "#DDDDDD",
                }}
              />
              <Text style={{ textAlign: "center", fontWeight: "600" }}>Or</Text>
              <View
                style={{
                  height: 2,
                  width: "40%",
                  backgroundColor: "#DDDDDD",
                }}
              />
            </View>
            <View
              style={{
                paddingBottom: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                title="Create new Dhangaa account"
                onclick={() => props.navigation.navigate("Signup")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
