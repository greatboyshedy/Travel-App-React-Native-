import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, } from "react";
import { AntDesign } from "@expo/vector-icons";
import Category from "../components/Category";
import ItemCard from "../components/ItemCard";
import { useNavigation } from "@react-navigation/native";

{
  /* color code near- blue #00BCC9, near-gray -#3C6072,near-black- #2A2B4B,orange-#E99265*/
}
const Home = () => {
  const navigation = useNavigation();
  const [text, setTextInput] = useState("London");
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("restaurants");
  const [lon, setLon] = useState([]);
  const [lat, setLat] = useState([]);
  const [maindata, setMainData] = useState([]);
  const [data, setData] = useState(true);
  console.log(text);

  const myApiKey = "Add Your API key here";  
  // You  can get from rapid Api
  

  const getPlaces = async () => {
    const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${text}&language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "Add Your API key here",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLon(result?.results[0]?.location?.lng);
      setLat(result?.results[0]?.location?.lat);
      setData(false);
    } catch (error) {
      console.error(error);
    }
    
  };
  

  const cityData = async () => {
    const lt = lat ? lat :51.507222;
    const ln = lon ? lon  : -0.127601;
    const url = `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng?latitude=${lt}&longitude=${ln}&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": myWifeApiKey,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMainData(result.data);
      // setIsLoading(true);
      console.log(maindata);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cityData();
    setData(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [data,type]);

  return (
    <View style={{ flex: 1, marginRight: 10, marginLeft: 10 }}>
      {/* Header Section */}
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <StatusBar style="auto" />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 30, color: "#3C6072" }}>
            Discover
          </Text>
          <Text
            style={{ fontWeight: "normal", fontSize: 20, color: "#3C6072" }}
          >
            the beauty today
          </Text>
        </View>
        <Image
          source={{uri:"https://cdn.pixabay.com/photo/2016/11/22/11/48/mountain-1849091_640.png"}}
          // source={require("../assets/avatar.png")}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      </View>

      {/* Search Section and category section */}
      <View
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "white",
          elevation: 5,
          borderRadius: 5,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <TextInput
          
          onChangeText={(x) => setTextInput(x)}
          placeholder="Search"
          style={{ height: 40, width: "85%", paddingLeft: 10 }}
        />
        <TouchableOpacity 
        onPress={getPlaces}
      
        >
          <AntDesign name="search1" size={24} color="#3C6072" />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image
            source={require("../assets/giphy.gif")}
            style={{ width: 150, height: 150 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#3C6072" }}>
            Fetching Data few seconds
          </Text>
        </View>
      ) : (
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Category
              image={require("../assets/hotel.png")}
              key="Hotel"
              name={"hotels"}
              type={type}
              setType={setType}
            />
            <Category
              image={require("../assets/attraction.png")}
              key="attractions"
              name={"attractions"}
              type={type}
              setType={setType}
            />
            <Category
              image={require("../assets/restaurants.png")}
              key="restaurants"
              name={"restaurants"}
              type={type}
              setType={setType}
            />
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#3C6072",
              marginTop: 20,
            }}
          >
            Top Tips
          </Text>
          <>
            {maindata?.length > 0 ? (
              <View
                style={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                {maindata?.map((data) => (
                  <ItemCard 
                  key={maindata?.location_id}
                  data={data}
                  name={data?.name ? data?.name : "No Information"}
                  address={data?.address ? data?.address : "No Information"}
                  image={data?.photo?.images?.medium?.url ? 
                    data?.photo?.images?.medium?.url :
                  "https://cdn.pixabay.com/photo/2020/02/09/09/39/smiley-4832495_640.png"}
                  />
                ))}
                
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  height: 400,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/sad-face-emoji.gif")}
                  style={{ width: 100, height: 100, marginBottom: 30 }}
                />
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "#3C6072",textAlign:"center"}}
                >
                  I'm sorry i couldn't find anything, please try again or make a new search
                </Text>
              </View>
            )}
          </>
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
