// import React, {useEffect, useState} from 'react';
// import {

//   View,
//   Text,
//   Dimensions,
//   PanResponder,
//   ActivityIndicator,
//   Animated,
//   StyleSheet,
//   ScrollView,

// } from 'react-native';

// import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['new NativeEventEmitter']);
// LogBox.ignoreAllLogs();
// import {data} from './data';

// import { MotiView } from 'moti'

// const SCREEN_HEIGHT = Dimensions.get('window').height;
// const SCREEN_WIDTH = Dimensions.get('window').width;

// const Saved = () => {
//   const [latitute, setLatitute] = useState(37.78825);
//   const [longitute, setLongitute] = useState(-122.4324);
//   const [isLoading, setIsLoading] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [vh,setVh]=useState(SCREEN_HEIGHT-200)
//   const hideModal = () => {

//     setModalVisible(true);
//     setTimeout(() => {
//       setModalVisible(false);

//     }, 5000);

//    // stopRecording();

//    // setResult('');
//   };
//   const containerStyle = {backgroundColor: 'white', padding: 20};
//   const pan = useState(new Animated.ValueXY({x: 0, y: SCREEN_HEIGHT - 200}))[0];

//   const panResponder = useState(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         pan.extractOffset();
//         return true;
//       },
//       onPanResponderMove: (e, gestureState) => {
//         console.log(gestureState)
//         setVh(Math.abs(gestureState.dy))
//         console.log(vh)
//        // pan.setValue({x: 0, y: gestureState.dy});
//       },
//     //   onPanResponderRelease: (e, gestureState) => {
//     //     if (gestureState.moveY > SCREEN_HEIGHT - 200) {
//     //       Animated.spring(pan.y, {
//     //         toValue: 0,
//     //         tension: 1,
//     //         useNativeDriver: true,
//     //       }).start();
//     //     } else if (gestureState.moveY < 200) {
//     //       Animated.spring(pan.y, {
//     //         toValue: 0,
//     //         tension: 1,
//     //         useNativeDriver: true,
//     //       }).start();
//     //     } else if (gestureState.dy < 0) {
//     //       Animated.spring(pan.y, {
//     //         toValue: -SCREEN_HEIGHT + 200,
//     //         tension: 1,
//     //         useNativeDriver: true,
//     //       }).start();
//     //     } else if (gestureState.dy > 0) {
//     //       Animated.spring(pan.y, {
//     //         toValue: SCREEN_HEIGHT - 200,
//     //         tension: 1,
//     //         useNativeDriver: true,
//     //       }).start();
//     //     }
//     //   },
//    }),
//   )[0];

//   const animatedHeight = {
//     transform: pan.getTranslateTransform(),
//   };

//   useEffect(() => {
//    //
//   }, []);

//   return (
//     <>

//           {/* =================search=============== */}

//           {/* =================Category End=============== */}
//           <Animated.View
//             style={[
//               {backgroundColor: 'red',},
//               {
//                 position: 'absolute',
//                 right: 0,
//                 left: 0,
//                 top:vh,
//                 width: SCREEN_WIDTH,
//                 height: SCREEN_HEIGHT,

//                 zIndex: 10,
//               },
//             ]}
//             {...panResponder.panHandlers}>
//             <Text>dddd</Text>
//           </Animated.View>

//     </>
//   );
// };

// export default Saved;

// const styles = StyleSheet.create({
//   searchRight: {width: '25%', height: '100%', borderRadius: 25, flexDirection:'row'},
//   searchMiddele: {width: '60%', height: '100%'},
//   searchLeft: {
//     width: '15%',
//     height: '100%',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   search: {
//     flexDirection: 'row',
//     width: '95%',
//     position: 'absolute',
//     height: 50,
//     backgroundColor: 'white',
//     alignSelf: 'center',
//     top: 15,
//     zIndex: 1000,
//     borderRadius: 25,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 5.46,
//     elevation: 9,
//   },
//   bottomUpperTop: {
//     height: '40%',
//     width: '100%',
//   },
//   bottomUpperLower: {
//     flexDirection: 'row',
//     height: '60%',
//     width: '100%',
//   },
//   header: {
//     height: 70,
//     width: '100%',
//     flexDirection: 'row',
//     backgroundColor: '#1b5a90',
//   },
//   cIcon: {
//     marginRight: 5,
//   },
//   left: {
//     width: '85%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   right: {
//     width: '15%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   cIcon: {
//     marginRight: 5,
//   },
//   searchBox: {
//     // position: 'absolute',
//     // marginTop: Platform.OS === 'ios' ? 40 : 20,
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     width: '92%',
//     alignSelf: 'center',
//     borderRadius: 5,
//     padding: 12,
//     shadowColor: '#ccc',
//     shadowOffset: {width: 0, height: 3},
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   chipsItem: {
//     flexDirection: 'row',
//     borderRadius: 20,
//     padding: 8,
//     paddingHorizontal: 20,
//     marginHorizontal: 10,
//     height: 35,
//     shadowColor: '#ccc',
//     shadowOffset: {width: 0, height: 3},
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   chipsScrollView: {
//     position: 'absolute',
//     top: Platform.OS === 'ios' ? 80 : 80,
//     paddingHorizontal: 10,
//   },
// });

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';

const Images = [
  {uri: 'https://i.imgur.com/sNam9iJ.jpg'},
  {uri: 'https://i.imgur.com/N7rlQYt.jpg'},
  {uri: 'https://i.imgur.com/UDrH0wm.jpg'},
  {uri: 'https://i.imgur.com/Ka8kNST.jpg'},
];

const {width, height} = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class Saved extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: 'Best Place',
        description: 'This is the best place in Portland',
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: 'Second Best Place',
        description: 'This is the second best place in Portland',
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: 'Third Best Place',
        description: 'This is the third best place in Portland',
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: 'Fourth Best Place',
        description: 'This is the fourth best place in Portland',
        image: Images[3],
      },
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: .0112333,
      longitudeDelta: 5.001233,
    },
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const {coordinate} = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: 'clamp',
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: 'clamp',
      });
      return {scale, opacity};
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}>
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}>
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>
                  {marker.title}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 30,
    height: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)',
  },
});
