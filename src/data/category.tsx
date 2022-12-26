import React from "react";
import { Dimensions, Image } from "react-native";
const { width } = Dimensions.get("window");

const category = [
  {
    title: "Burgers",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg",
        }}
      />
    ),
  },
  {
    title: "Pizza",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrfYJuYFTNKH5IXzhii0BHQdCAxUzP0Xexi5qksLbwEcMm69n3GGA_2WHhvHsTll1VK4&usqp=CAU",
        }}
      />
    ),
  },
  {
    title: "Doro Wot",
    location: "Addis Ababa, Ethiopia",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--v4WMfup1De-OOYnFmXFLvtUJAs9RsOEow&usqp=CAU",
        }}
      />
    ),
  },
  {
    title: "Half Half",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuEp9DOEb26jmBLPIuad9-NTZrQrQqt0EkA&usqp=CAU",
        }}
      />
    ),
  },

  {
    title: "Burgers",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg",
        }}
      />
    ),
  },
  {
    title: "Pizza",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrfYJuYFTNKH5IXzhii0BHQdCAxUzP0Xexi5qksLbwEcMm69n3GGA_2WHhvHsTll1VK4&usqp=CAU",
        }}
      />
    ),
  },
  {
    title: "Doro Wot",
    location: "Addis Ababa, Ethiopia",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--v4WMfup1De-OOYnFmXFLvtUJAs9RsOEow&usqp=CAU",
        }}
      />
    ),
  },
  {
    title: "Half Half",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuEp9DOEb26jmBLPIuad9-NTZrQrQqt0EkA&usqp=CAU",
        }}
      />
    ),
  },

  {
    title: "Burgers",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        source={{
          uri: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg",
        }}
      />
    ),
  },
  {
    title: "Pizza",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrfYJuYFTNKH5IXzhii0BHQdCAxUzP0Xexi5qksLbwEcMm69n3GGA_2WHhvHsTll1VK4&usqp=CAU",
        }}
      />
    ),
  },
  {
    title: "Doro Wot",
    location: "Addis Ababa, Ethiopia",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--v4WMfup1De-OOYnFmXFLvtUJAs9RsOEow&usqp=CAU",
        }}
      />
    ),
  },
  {
    title: "Half Half",
    icon: (
      <Image
        style={{
          height: width / 2.7,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 5,
          borderTopRightRadius:5
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuEp9DOEb26jmBLPIuad9-NTZrQrQqt0EkA&usqp=CAU",
        }}
      />
    ),
  },
];

export default category;
