import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  Dimensions,
  PanResponder,
  ActivityIndicator,
  Image,
  Animated,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Search from './Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useIsFocused} from '@react-navigation/native';

//http://192.168.56.1/citizenapi/api/GetLocationDataByLocationID?Locationid=MST0000024
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();
import {data} from './data';
import ModalView from './ModalView';
import CustomMarker from './CustomMarker';
import Profile from '../profile';
import {Base_url} from '../../key';
import {get_coordinates} from '../../actions/coordinates';

import {connect, useSelector} from 'react-redux';
import {location_details} from '../../actions/loacationDetails';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Explore = ({navigation, get_coordinates, location_details}) => {
  const isFocused = useIsFocused();

  const location_data = useSelector(state => state.location_details.data);
  // console.log(location_data)

  const coordinates = useSelector(state => state.coordinates);
  const latlang = useSelector(state => state.setLatLang);
  const myR = useRef(null);

  const [markerData, setMarkerData] = useState(null);
  const [latitute, setLatitute] = useState(41.85942);
  const [longitute, setLongitute] = useState(-71.519236);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const hideModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 5000);

    // stopRecording();

    // setResult('');
  };
  // console.log(typeof latitute)
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const pan = useState(new Animated.ValueXY({x: 0, y: SCREEN_HEIGHT - 200}))[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.extractOffset();
        return true;
      },
      onPanResponderMove: (e, gestureState) => {
        pan.setValue({x: 0, y: gestureState.dy});
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.moveY > SCREEN_HEIGHT - 200) {
          Animated.spring(pan.y, {
            toValue: 0,
            tension: 1,
            useNativeDriver: true,
          }).start();
        } else if (gestureState.moveY < 200) {
          Animated.spring(pan.y, {
            toValue: 0,
            tension: 1,
            useNativeDriver: true,
          }).start();
        } else if (gestureState.dy < 0) {
          Animated.spring(pan.y, {
            toValue: -SCREEN_HEIGHT + 200,
            tension: 1,
            useNativeDriver: true,
          }).start();
        } else if (gestureState.dy > 0) {
          Animated.spring(pan.y, {
            toValue: SCREEN_HEIGHT - 200,
            tension: 1,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  )[0];
  const onRechange = (lat, lng) => {
    setLatitute(lat);
    setLongitute(lng);
  };
  // const getLatLong=()=>{

  //   setLatitute(latlang.lat)
  //   setLongitute(latlang.lng)
  // }
  const animatedHeight = {
    transform: pan.getTranslateTransform(),
  };

  const onMapReadyHandler = () => {
    if (Platform.OS === 'ios') {
      myR.current.fitToElements(false);
    } else {
      const markersCoordinates = [];

      coordinates.coordinates.forEach(coords => {
        markersCoordinates.push({
          latitude: coords.Latitude,
          longitude: coords.Longitude,
        });
      });
      myR.current.fitToCoordinates(markersCoordinates, {
        animated: true,
        edgePadding: {
          top: 200,
          right: 50,
          bottom: 50,
          left: 50,
        },
      });
    }
  };

  useEffect(() => {
    get_coordinates();
  }, []);
  // useEffect(() => {

  //   getLatLong()
  // }, [isFocused]);

  return (
    <>
      <StatusBar backgroundColor="#1b5a90" barStyle="light-content" />
      <ModalView modalVisible={modalVisible} />

      <View>
        <MapView
          ref={myR}
          zoomControlEnabled={true}
          zoomEnabled={true}
          enableZoomControl={true}
          zoomTapEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          provider={PROVIDER_GOOGLE}
          style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
          region={{
            latitude: latitute,
            longitude: longitute,
            latitudeDelta: 0.0112333,
            longitudeDelta: 5.001233,
          }}
          initialRegion={{
            latitude: 41.85942,
            longitude: -71.519236,
            latitudeDelta: 0.0112333,
            longitudeDelta: 5.001233,
          }}
          onLayout={() =>
            setTimeout(() => {
              onMapReadyHandler();
            }, 5000)
          }>
          {coordinates.coordinates &&
            coordinates.coordinates.map((item, i) => {
              return (
                <Marker
                  key={i}
                  coordinate={{
                    latitude: item.Latitude,
                    longitude: item.Longitude,
                  }}
                  onPress={() => location_details(item.Location_ID)}>
                  <CustomMarker />
                </Marker>
              );
            })}
        </MapView>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Filtter');
          }}
          style={{
            position: 'absolute',
            top: SCREEN_HEIGHT - 252,
            right: 4,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            backgroundColor: '#1b5a90',
          }}>
          <AntDesign name="menufold" size={28} color="white" />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: SCREEN_HEIGHT - 265,
            left: 0,
            width: 150,
            height: 50,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../images/siteTitle.png')}
              style={{width: '90%', height: 25, resizeMode: 'contain'}}
            />
          </View>
        </View>

        <Search
          hideModal={hideModal}
          onRechange={onRechange}
          navigation={navigation}
          modalVisible={modalVisible}
        />
        {/* =================search=============== */}
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.chipsScrollView}
          contentInset={{
            // iOS only
            top: 0,
            left: 0,
            bottom: 0,
            right: 20,
          }}
          contentContainerStyle={{
            paddingRight: Platform.OS === 'android' ? 20 : 0,
          }}>
          {data.category.map((category, index) => (
            <View
              key={index}
              style={{
                ...styles.chipsItem,
                backgroundColor: category.isVisible ? '#1b5a90' : 'white',
              }}>
              {category.isVisible ? category.icon : null}
              <Text
                style={{
                  color: category.isVisible ? '#ffffff' : '#1b5a90',
                  fontWeight: '800',
                }}>
                {category.name} #
              </Text>
            </View>
          ))}
        </ScrollView>
        {/* =================Category End=============== */}
        <Animated.View
          style={[
            animatedHeight,
            {
              position: 'absolute',
              right: 0,
              left: 0,
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              backgroundColor: '#f5f5f5',
              // paddingTop:100,
              zIndex: 10,
            },
          ]}
          {...panResponder.panHandlers}>
          {/* <View
              style={{
                width: '100%',
                height: 200,
                paddingHorizontal: 20,
                paddingTop: 15,
              }}>
              <View style={{...styles.bottomUpperTop}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#1b5a90"
                  />
                  <Text style={{color: '#1b5a90'}}>
                    12500 E Araphone Rdu Centennial,CO 801222
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                  <Text style={{color: '#1b5a90'}}>MST0005166 240 N</Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.bottomUpperLower,
                  marginTop: 3,
                  paddingHorizontal: 5,
                }}>
                <View style={styles.buttonUpperLowerTop}>
                  <Text style={styles.textStyles}>
                    Site Status:
                    <Text style={{color: '#8cff84', fontWeight: 'bold'}}>
                      {' '}
                      Active{' '}
                    </Text>{' '}
                  </Text>
                  <Text style={styles.textStyles}>
                    Site Type:<Text> 3rd Party </Text>{' '}
                  </Text>
                  <Text style={styles.textStyles}>
                    Asset Cost(Y):<Text> :$26808 </Text>{' '}
                  </Text>
                </View>
                <View style={{width: '50%', height: '100%', paddingLeft: 20}}>
                  <Text style={styles.textStyles}>Property Cost (Y):$0:00</Text>
                  <Text style={styles.textStyles}>Circuits:9 </Text>
                  <Text style={styles.textStyles}>Devices:5 </Text>
                </View>
              </View> */}
          {/* </View> */}
          <View
            style={{
              width: '100%',
              height: 140,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
           
              {location_data ? (
                   <>
               <View style={{...styles.bottomUpperTop}}>
             
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="#1b5a90"
                      style={{ marginTop:5}}
                    />
                    <Text style={{color: '#1b5a90'}}>
                      {location_data?.FullAddress}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="black"
                    />
                    <Text style={{color: '#1b5a90'}}>
                      {location_data.Address}
                    </Text>
                  </View>
            </View>
            <View
            style={{
              ...styles.bottomUpperLower,
              marginTop: 3,
              paddingHorizontal: 5,
            }}>
            <View style={styles.buttonUpperLowerTop}>
              {/* <Text style={styles.textStyles}>
                Site Status:
                <Text style={{color: '#8cff84', fontWeight: 'bold'}}>
                  {' '}
                  Active{' '}
                </Text>{' '}
              </Text> */}
              <Text style={{...styles.textStyles,}}>
                Site Type:<Text> {location_data.Concat_LocationTypes} </Text>{' '}
              </Text>
              {/* <Text style={styles.textStyles}>
                Asset Cost(Y):<Text> :$26808 </Text>{' '}
              </Text> */}
            </View>
            {/* <View style={{width: '50%', height: '100%', paddingLeft: 20}}>
              <Text style={styles.textStyles}>Property Cost (Y):$0:00</Text>
              <Text style={styles.textStyles}>Circuits:9 </Text>
              <Text style={styles.textStyles}>Devices:5 </Text>
            </View> */}
          </View>
          </>

              ) : null}
            
          </View>
          <Profile />
        </Animated.View>
      </View>
    </>
  );
};

export default connect(null, {get_coordinates, location_details})(Explore);

const styles = StyleSheet.create({
  searchRight: {
    width: '25%',
    height: '100%',
    borderRadius: 25,
    flexDirection: 'row',
  },
  searchMiddele: {width: '60%', height: '100%'},
  searchLeft: {
    width: '15%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    width: '95%',
    position: 'absolute',
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    top: 15,
    zIndex: 1000,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  bottomUpperTop: {
    height: '40%',
    width: '100%',
  },
  bottomUpperLower: {
    flexDirection: 'row',
    height: '60%',
    width: '100%',
  },
  header: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#1b5a90',
  },
  cIcon: {
    marginRight: 5,
  },
  left: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cIcon: {
    marginRight: 5,
  },
  searchBox: {
    // position: 'absolute',
    // marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '92%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 12,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsItem: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 80 : 80,
    paddingHorizontal: 10,
  },
});
