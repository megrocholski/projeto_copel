import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import SearchIcon from "./assets/Vector.png";
import PlusIcon from "./assets/Group341.png";
import Maps from "./assets/maps.png";
import ReportIcon from "./assets/report.png";
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [expand, isExpanded] = React.useState(false);
  const onSearch = () => {
	console.log("Search")
  };

  const onExpand = () => isExpanded(!expand);

  //   // Initialize and add the map
  //   function initMap() {
  //     // The location of Uluru
  //     const uluru = { lat: -25.344, lng: 131.031 };
  //     // The map, centered at Uluru
  //     const map = new google.maps.Map(document.getElementById("map"), {
  //       zoom: 4,
  //       center: uluru,
  //     });
  //     // The marker, positioned at Uluru
  //     const marker = new google.maps.Marker({
  //       position: uluru,
  //       map: map,
  //     });
  //   }

  //   window.initMap = initMap;

  const problems = [
	{
		title: "Árvore caída na Rua Otávio de Carv..."
	},
	{
		title: "Oscilação na região"
	},
	{
		title: "Fio caída na Rua Joaquim Dumond"
	}
  ]

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={text}
          />
          <TouchableOpacity style={styles.searcgButton} onPress={onSearch}>
            {/* <Image style={styles.searchIcon} source={SearchIcon} /> */}
			<AntDesign name="search1" size={24} color="black" />
		  </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mapBox}>
        <Image style={styles.map} source={Maps} />
      </View>
      <View style={styles.obs}>
        {expand ? (
          <View style={styles.obs2}>
            <View>
				<View style={styles.numberBox}>
					<Text style={styles.number}>3</Text>
				</View>
				<View>
					<Text>Reclamações</Text>
				</View>
			</View>
            <TouchableOpacity style={styles.expandButton} onPress={onExpand}>
              {/* <Image style={styles.plusIcon} source={PlusIcon} /> */}
			  <SimpleLineIcons name="arrow-up" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.obs2}>
			
            <View style={styles.obsComplete}>
              <View style={styles.option}>
                <Image style={styles.reportIcon} source={ReportIcon} />
                <Text>Árvore caída na Rua Octávio de Carv...</Text>
              </View>
              <View style={styles.option}>
                <Image style={styles.reportIcon} source={ReportIcon} />
                <Text>Oscilações na região</Text>
              </View>
              <View style={styles.option}>
                <Image style={styles.reportIcon} source={ReportIcon} />
                <Text>Fio caído na Rua Joaquim Dumond</Text>
              </View>
            </View>
			<TouchableOpacity style={styles.expandButton} onPress={onExpand}>
              {/* <Image style={styles.plusIcon} source={PlusIcon} /> */}
			  <SimpleLineIcons name="arrow-down" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  appbar: {
    backgroundColor: "#FF6600",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    height: 100,
    position: "absolute",
    // top: 0,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: "8%",
    padding: 10,
    borderRadius: 10,
  },
  textInput: {
    width: "90%",
    height: "100%",
  },
  searchButton: {
    backgroundColor: "#FFFFFF",
  },
  searchIcon: {
    marginLeft: 10,
  },
  mapBox: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  obs: {
    backgroundColor: "#F7CFCD",
    width: "100%",
    paddingVertical: 20,
    position: "absolute",
    bottom: 0,
    minHeight: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  obs2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
	justifyContent: "space-between",
	padding: 20,
	width: "100%"
  },
  obsComplete: {
    display: "flex",
    flexDirection: "column",
	width: "100%",
	alignItems: "flex-start",
	justifyContent: "flex-end"
	// padding: 20
	// margin: 10
  },
  numberBox: {
    display: "flex",
    borderRadius: 50,
    backgroundColor: "#FC0400",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
	borderBottomWidth: 1,
	padding: 10,
	with: "100%",
	borderBottomColor: "#A52422",
	minWidth: 200
  },
  expandButton: {
	padding: 10,
	right: 10
  },
  reportIcon: {
	width: 30,
	height: 30
  }
});

// const mapStyle = [
// 	{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
// 	{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
// 	{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
// 	{
// 	  featureType: 'administrative.locality',
// 	  elementType: 'labels.text.fill',
// 	  stylers: [{color: '#d59563'}],
// 	},
// 	{
// 	  featureType: 'poi',
// 	  elementType: 'labels.text.fill',
// 	  stylers: [{color: '#d59563'}],
// 	},
// 	{
// 	  featureType: 'poi.park',
// 	  elementType: 'geometry',
// 	  stylers: [{color: '#263c3f'}],
// 	},
// 	{
// 	  featureType: 'poi.park',
// 	  elementType: 'labels.text.fill',
// 	  stylers: [{color: '#6b9a76'}],
// 	},
// 	{
// 	  featureType: 'road',
// 	  elementType: 'geometry',
// 	  stylers: [{color: '#38414e'}],
// 	},
// 	{
// 	  featureType: 'road',
// 	  elementType: 'geometry.stroke',
// 	  stylers: [{color: '#212a37'}],
// 	},
// 	{
// 	  featureType: 'road',
// 	  elementType: 'labels.text.fill',
// 	  stylers: [{color: '#9ca5b3'}],
// 	},
// 	{
// 	  featureType: 'road.highway',
// 	  elementType: 'geometry',
// 	  stylers: [{color: '#746855'}],
// 	},
// 	{
// 	  featureType: 'road.highway',
// 	  elementType: 'geometry.stroke',
// 	  stylers: [{color: '#1f2835'}],
// 	},
// 	{
// 	  featureType: 'road.highway',
// 	  elementType: 'labels.text.fill',
// 	  stylers: [{color: '#f3d19c'}],
// 	},
// 	{
// 	  featureType: 'transit',
// 	  elementType: 'geometry',
// 	  stylers: [{color: '#2f3948'}],
// 	},
// 	{
// 	  featureType: 'transit.station',
// 	  elementType: 'labels.text.fill',
// 	  stylers: [{color: '#d59563'}],
// 	},
// 	{
// 	  featureType: 'water',
// 	  elementType: 'geometry',
// 	  stylers: [{color: '#17263c'}],
// 	},
// 	{
// 	  featureType: 'water',
// 	  elementType: 'labels.text.fill',
// 	  stylers: [{color: '#515c6d'}],
// 	},
// 	{
// 	  featureType: 'water',
// 	  elementType: 'labels.text.stroke',
// 	  stylers: [{color: '#17263c'}],
// 	},
//   ];
