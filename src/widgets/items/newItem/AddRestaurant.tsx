import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Input, Link, MinNavbar } from "../../../components";
import SelectDialog from "../../../components/select.dialog";
import { constants } from "../../../utils";


export default function AddRestaurant() {
  const [item, setItem] = useState({ role: "" });
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <MinNavbar
        title="Mana nyaataa galmeessi"
        right={
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                color: constants.primary,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
               Maxxansi
            </Text>
          </TouchableOpacity>
        }
      />
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <View style={{ paddingBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              paddingBottom: 15,
            }}
          >
          Odeeffannoo Mana Nyaataa
          </Text>
          <Text style={{ fontSize: 16 }}>
            Dear customer, please add your business address and Company
            Information so that customers fill find you easily.
          </Text>
        </View>
        <View style={{ paddingBottom: 30 }}>
          <Input
            label="Maqaa mana nyaataa"
            large
            onchange={(e: string) => setItem({ ...item, companyName: e })}
          />
        </View>
        <View style={{ paddingBottom: 30 }}>
          <Input
            label="Akaaku mana nyaataa"
            large
            onchange={(e: string) => setItem({ ...item, companyType: e })}
          />
        </View>
        <View style={{ paddingBottom: 30 }}>
          <Input
            label="Weebsaaytii (dirqama miti) "
            large
            onchange={(e: string) => setItem({ ...item, website: e })}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <Text>Weebsaaytii hin qabduu? </Text>
            <Link title="Weebsaayti uumi" />
          </View>
        </View>
        <View style={{ paddingBottom: 30 }}>
          <SelectDialog
            title={
              item?.role === "" ? "gahee kee" : "gahee kee" + ": " + item?.role
            }
            items={[
              { title: "Chief Executive Officer" },
              { title: "General Manager" },
              { title: "Sales Manaager" },
              { title: "Sales Representative" },
              { title: "Seller" },
            ]}
            height={360}
            // borderColor={isValid.condition ? "grey" : "red"}
            onselect={(e: any) => setItem({ ...item, role: e.title })}
            // titleColor={isValid.condition ? "grey" : "red"}
          />
        </View>
        <View style={{ paddingBottom: 30 }}>
          <Input
            label="Argama"
            placeholder="E.g. Dada Mall, Adama, Oromia"
            large
            onchange={(e: string) => setItem({ ...item, address: e })}
          />
        </View>
        <View style={{ paddingBottom: 30 }}>
          <SelectDialog
            title={
              item?.location === ""
                ? "argama kaartaa irratti"
                : "argama kaartaa irratti" + ": " + item?.location
            }
            items={[]}
            height={360}
            // borderColor={isValid.condition ? "grey" : "red"}
            onselect={(e: any) => setItem({ ...item, location: e.title })}
            // titleColor={isValid.condition ? "grey" : "red"}
          />
        </View>
      </View>
    </View>
  );
}
