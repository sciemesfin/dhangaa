import React, { useState } from "react";
import { View, Text, Alert, Linking } from "react-native";

import { Button, Link, Loading, MinNavbar } from "../../components";

import * as Contacts from "expo-contacts";
import { constants } from "../../utils";

export default function FinishSignup(props: any) {
  const user = props.route.params.payload;

  const [loading, setLoading] = useState(false);
  const [withContact, setWithContact] = useState(true);

  function submit(uploadContact: boolean) {
    setLoading(true);
    if (uploadContact) allowContactAccess();
    else submitSignup();
  }

  function submitSignup() {}

  async function allowContactAccess() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") submitSignup();
    else {
      setLoading(false);
      Alert.alert(
        "Permission Issue",
        `Please, Grant permission to dhangaa to access your contants. dhangaa would like to access your contacts to enable you invite your friends to chat with you.`,
        [
          {
            text: "Continue",
            onPress: () => {
              Linking.openSettings();
            },
          },
        ],
        { cancelable: false }
      );
    }
  }

  function customAlert(title: string, msg: string | undefined) {
    Alert.alert(
      title,
      msg,
      [
        {
          text: "Ok",
          onPress: () => {},
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MinNavbar title="Finish your signup" />
      <View style={{flex:1,justifyContent:"center"}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Finish Signinig up
          </Text>
          <View style={{ padding: 15, paddingTop: 30 }}>
            <Text style={{ textAlign: "center", lineHeight: 22 }}>
              By tapping Sign up, you agree to our
              <Text
                style={{ color: "#2196f3" }}
                onPress={() => props.navigation.navigate("PrivacyPolicy")}
              >
                {" "}
                Terms,{" "}
              </Text>
              <Text
                style={{ color: "#2196f3" }}
                onPress={() => props.navigation.navigate("PrivacyPolicy")}
              >
                Data Policy{" "}
              </Text>{" "}
              and
              <Text
                style={{ color: "#2196f3" }}
                onPress={() => props.navigation.navigate("PrivacyPolicy")}
              >
                {" "}
                Cookie Policy.{" "}
              </Text>
              You may recieve SMS or Email notification from us and can opt out
              any time. Information from your address book will be continously
              uploaded to dhangaa so that we can suggest your friends if they are
              looking a new job and offer a better service.
            </Text>
            <View style={{ paddingTop: 30 }}>
              {loading && withContact ? (
                <Loading />
              ) : (
                <Button
                  title="Sign up"
                  onclick={() => {
                    setWithContact(true);
                    submit(true);
                  }}
                />
              )}
            </View>
            <View style={{ paddingTop: 20 }}>
              {loading && !withContact ? (
                <Loading />
              ) : (
                <Link
                  align="center"
                  title="Sign up without uploading my contacts"
                  onclick={() => {
                    setWithContact(false);
                    submit(false);
                  }}
                  color={constants.primary}
                />
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 15,
          }}
        >
          <Text style={{ textAlign: "center", lineHeight: 22 }}>
            Information about contacts in your address book, including names,
            phone numbers and email will be sent to dhangaa so we can suggest jobs
            for your friends. You can turn this off in settings and manage or
            delete contact you share with dhangaa.
            <Text
              style={{ color: "#2196f3" }}
              onPress={() => props.navigation.navigate("PrivacyPolicy")}
            >
              {" "}
              Learn More
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
