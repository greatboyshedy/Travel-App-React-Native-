import { View, Text, Image, TouchableOpacity, } from "react-native";
import React from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home");
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop:30,
      }}
    >
     <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
          }}
        >
          <Text
            style={{ color: "#00BCC9", fontSize: 25, fontWeight: "medium" }}
          >
            Go
          </Text>
          {/* color code near- blue #00BCC9, near-gray -#3C6072,near-black- #2A2B4B*,orange-#E99265*/}
        </View>
        <Text style={{ fontSize: 25, fontWeight: "medium" }}>Travel</Text>
      </View>

      {/* Header section */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "medium",
          marginBottom: 5,
          color: "#3C6072",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        Enjoy the trip with
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 5,
          color: "#00BCC9",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        Good Moments
      </Text>
      <Text
        style={{
          color: "#3C6072",
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to
      </Text>

      {/* Body Section */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: "55%",
            width: "80%",
            backgroundColor: "#00BCC9",
            borderRadius: 200,
            position: "absolute",
            top: 1,
            marginLeft: 150,
          }}
        ></View>

        <View
          style={{
            height: "55%",
            width: "80%",
            backgroundColor: "#E99265",
            borderRadius: 200,
            position: "absolute",
            bottom: 1,
            marginLeft: -150,
          }}
        ></View>
        <Animatable.Image animation="fadeIn"
          source={require("../assets/hero.png")}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />

        {/* Go button */}

        <Animatable.View animation="pulse" easing={"ease-out"} iterationCount={"infinite"}
          style={{
            height: 80,
            width: 80,
            borderWidth: 4,
            borderColor: "#00BCC9",
            position: "absolute",
            bottom: 1,
            alignSelf: "center",
            marginBottom: 150,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 0,
            borderRadius: 40,
            opacity: 0.8,
          }}
        >
          <TouchableOpacity
          onPress={goToHome}
            style={{
              height: 70,
              width: 70,
              backgroundColor: "#00BCC9",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              Go
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export default Welcome;
