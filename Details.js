import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {openBrowserAsync} from 'expo-web-browser';
import { StatusBar } from "expo-status-bar";

const Details = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params.mydata
  console.log(data)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, marginTop: 30, marginLeft: 10, marginRight: 10 }}
    >
      <StatusBar style="auto" />
      <View style={{ width: "100%", height: 300 }}>
        <Image
          source={{
            uri: data?.photo?.images?.large?.url ? data?.photo?.images?.large?.url:
            "https://cdn.pixabay.com/photo/2020/02/09/09/39/smiley-4832495_640.png"
          }}
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            height: 45,
            width: 45,
            backgroundColor: "#00BCC9",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            height: 30,
            width: 100,
            backgroundColor: "#3C6072",
            bottom: 1,
            right: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {data?.is_closed === true ? "Closed" : "Open"}
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: 1, left: 1, margin: 20 }}>
          <View
            style={{
              height: 30,
              width: 150,
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: "#3C6072", fontWeight: "bold", fontSize: 22 }}
            >
              {data?.price ? data?.price : "N/A"}
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 10,
          color: "#3C6072",
        }}
      >
        {data?.name ? data?.name : "N/A"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginTop: 10,
        }}
      >
        <Entypo name="location-pin" size={24} color="#3C6072" />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#3C6072" }}>
          {data?.location_string ? data?.location_string : "N/A"}
        </Text>
      </View>
      {/* the section below hold a cards */}
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#E99265",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={30} color="black" />
          </View>
          <View>
            <Text>{data?.rating ? data?.rating : "N/A"}</Text>
            <Text>Ratings</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#E99265",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="dollar" size={30} color="black" />
          </View>
          <View>
            <Text>{data?.price_level ? data?.price_level : "N/A"}</Text>
            <Text>Price Level</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#E99265",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="location-pin" size={30} color="black" />
          </View>
          <View>
            <Text>{data?.bearing ? data?.bearing : "N/A"}</Text>
            <Text>Bearing</Text>
          </View>
        </View>
      </View>
      <Text style={{ marginTop: 10, color: "#3C6072", fontSize: 16 }}>
        {data?.description ? data?.description : "There is currently no description for this place"}
      </Text>
      <View
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: "lightgray",
          borderRadius: 10,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <FontAwesome name="phone" size={24} color="#3C6072" />
          <Text style={{fontSize:16,fontWeight:"bold",color:"#2A2B4B" }}>{data?.phone ? data?.phone : "N/A"}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 10,
            width: "90%",
          }}
        >
          <Ionicons name="mail" size={24} color="#3C6072" />
          <Text style={{fontSize:16,fontWeight:"bold",color:"#2A2B4B" }}>{data?.website ? data?.website : "N/A"}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 10,
            marginRight: 10,
            width: "90%",
          }}
        >
          <Entypo name="address" size={24} color="#3C6072"/>
          <Text style={{fontSize:16,fontWeight:"bold",color:"#2A2B4B" }}>{data?.address ? data?.address : "N/A"}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={()=>{openBrowserAsync(data?.website ? data?.website : "")}}
        style={{
          marginTop: 20,
          height: 60,
          width: "100%",
          backgroundColor: "#00BCC9",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
          Book Now
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Details;
