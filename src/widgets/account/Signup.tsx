import React, { useRef, useState } from "react";
import { View, Text, ScrollView, Image, Dimensions, Alert } from "react-native";
import { Button, Input, Link, MinNavbar } from "../../components";

import PhoneInput from "react-native-phone-number-input";
import { validator } from "../../utils";

export default function Signup(props: any) {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);

  const [user, setUser] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    password: "",
    birthDate: "",
    country: "",
    city: "",
    confirmPassword: "",
  });

  const [showPassword, setPasswordShow] = useState(false);
  const [showCPassword, setCPasswordShow] = useState(false);
  const [isValid, setIsValid] = useState({
    email: false,
    phoneNumber: false,
    firstName: false,
    lastName: false,
    password: false,
    confirmPassword: false,
  });
  const onFirstNameChange = (name: any) => {
    let val = validator.validateFullName(name);
    setUser((prev) => ({ ...prev, firstName: name }));
    setIsValid((prev) => ({ ...prev, firstName: val ? true : false }));
  };
  const onLastNameChange = (name: any) => {
    let val = validator.validateFullName(name);
    setUser((prev) => ({ ...prev, lastName: name }));
    setIsValid((prev) => ({ ...prev, lastName: val ? true : false }));
  };
  const onEmailChange = (e: any) => {
    let val = validator.validateEmail(e);
    setUser((prev) => ({ ...prev, email: e }));
    setIsValid((prev) => ({ ...prev, email: val ? true : false }));
  };
  const onPhoneChange = (e: string) => {
    let val = validator.validatePhoneNumber(e);
    setUser((prev) => ({ ...prev, phoneNumber: e }));
    setIsValid((prev) => ({ ...prev, phoneNumber: val ? true : false }));
  };

  const validatePassword = (password: string | any[]) => {
    let val = password.length > 8 ? true : false;
    setUser((prev) => ({ ...prev, password: password }));
    setIsValid({ ...isValid, password: val ? true : false });
  };

  const validateCPassword = (password: string) => {
    let val = user.password === password;
    setUser((prev) => ({ ...prev, confirmPassword: password }));
    setIsValid((prev) => ({ ...prev, confirmPassword: val ? true : false }));
  };

  function submit() {
    let phone = user.phoneNumber.replace(/[^\d]/g, "");
    props.navigation.navigate("FinishSignup", {
      payload: {
        ...user,
        phoneNumber: phone,
        email: user.email,
      },
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MinNavbar title="Create new account" />
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
         <View style={{paddingBottom:100}}>
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
          <View style={{ padding: 20 }}>
            <ScrollView>
              <View>
                <View style={{ paddingBottom: 20 }}>
                  <Text
                    style={{
                      textAlign: "center",
                      lineHeight: 21,
                      fontSize: 16,
                    }}
                  >
                    We'll help you create a new account in a few easy steps.
                  </Text>
                </View>

                <View
                  style={{
                    paddingBottom: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "48%" }}>
                    <Input
                      label="First Name"
                      mode
                      placeholder="Enter your first name"
                      onchange={(e: any) => onFirstNameChange(e)}
                      error={!isValid.firstName && user.firstName !== ""}
                    />
                  </View>
                  <View style={{ width: "48%" }}>
                    <Input
                      label="Last Name"
                      mode
                      placeholder="Enter your last name"
                      onchange={(e: any) => onLastNameChange(e)}
                      error={!isValid.lastName && user.lastName !== ""}
                    />
                  </View>
                </View>
                <View style={{ paddingBottom: 20 }}>
                  <Input
                    label="Email (Optional)"
                    mode
                    placeholder="Enter your Email address"
                    onchange={(e: any) => onEmailChange(e)}
                    // error={!isValid.email && user.email !== ''}
                    keyboard="email-address"
                  />
                </View>
                <View style={{ paddingBottom: 20 }}>
                  {/* 
                                <Input label="Phone Number" mode
                                    onchange={onPhoneChange}
                                    value={formatter.phone(user.phoneNumber)}
                                    error={!isValid.phoneNumber && user.phoneNumber !== ''}
                                    keyboard={'numeric'} />
                                    */}

                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="ET"
                    layout="first"
                    // withShadow
                    // autoFocus
                    containerStyle={{
                      width: "100%",
                      borderBottomWidth: 1,
                      borderBottomColor: "grey",
                      borderRadius: 5,
                      elevation: 0,
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
                      onPhoneChange(text);
                    }}
                  />
                </View>
                <View style={{ paddingBottom: 20 }}>
                  <Input
                    label="Password"
                    mode
                    onchange={(e: any) => validatePassword(e)}
                    value={user.password}
                    error={!isValid.password && user.password !== ""}
                    right={showPassword ? "eye" : "eye-off"}
                    showPassword={() => setPasswordShow((on) => !on)}
                    password={!showPassword}
                  />
                </View>
                <View style={{ paddingBottom: 20 }}>
                  <Input
                    label="Confirm Password"
                    mode
                    onchange={(e: any) => validateCPassword(e)}
                    value={user.confirmPassword}
                    error={
                      !isValid.confirmPassword && user.confirmPassword !== ""
                    }
                    right={showCPassword ? "eye" : "eye-off"}
                    showPassword={() => setCPasswordShow((on) => !on)}
                    password={!showCPassword}
                  />
                </View>
                <View style={{ paddingBottom: 20 }}>
                  <Button
                    title="Continue"
                    onclick={submit}
                    disabled={
                      user.phoneNumber === "" ||
                      user.password === "" ||
                      user.firstName === "" ||
                      user.lastName === "" ||
                      user.phoneNumber === "" ||
                      user.password !== user.confirmPassword ||
                      !isValid.firstName ||
                      !isValid.lastName ||
                      !isValid.phoneNumber ||
                      !isValid.password
                        ? true
                        : false
                    }
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
                  <Text>Already have an account?</Text>
                  <Link
                    title="Sign in"
                    onclick={() => props.navigation.navigate("Signin")}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
         </View>
        </ScrollView>
      </View>
    </View>
  );
}
