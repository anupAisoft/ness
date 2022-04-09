// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import MyMapView from './MapView'
// import MapContainer from './MapContainer'

// const Search = () => {
//   return (
//     <View>
//      {/* <MapContainer/> */}
//     </View>
//   )
// }

// export default Search

// const styles = StyleSheet.create({})


import * as React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"

export default function Search() {
	const [ pin, setPin ] = React.useState({
		latitude: 37.78825,
		longitude: -122.4324
	})
	const [ region, setRegion ] = React.useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})
const ghate=()=>{
  
}
	return (
		<View style={{ marginTop: 50, flex: 1 }}>
			<GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance"
				}}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					 console.log(data)
          setPin({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
          })
          ghate(setPin({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
          }))
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					})
				}}
				query={{
					key: "AIzaSyAn9wVgUpu0h_LAHr0LPrzcKQjQ9uVczT8",
					language: "en",
					// components: "country:us",
					// types: "establishment",
					// // radius: 30000,
					// location: `${pin.latitude}, ${pin.longitude}`
				}}
				styles={{
					container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
					listView: { backgroundColor: "white" }
				}}
			/>
			<MapView
				style={styles.map}
				initialRegion={{
          latitude:pin.latitude,
          longitude:  pin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
				provider="google"
        onRegionChange={ghate}
			>
				<Marker coordinate={{ 
          latitude: pin.latitude, 
          longitude: pin.longitude }} />
				<Marker
					coordinate={pin}
					pinColor="black"
					draggable={true}
					onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {
						setPin({
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude
						})
					}}
				>
					<Callout>
						<Text>I'm here</Text>
					</Callout>
				</Marker>
				<Circle center={pin} radius={1000} />
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	}
})