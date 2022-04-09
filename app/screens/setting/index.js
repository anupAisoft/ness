import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  PanResponder,
  Animated,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import MapView from 'react-native-maps';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {data} from '../home/data';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Setting = () => {
  const [latitute, setLatitute] = useState(37.78825);
  const [longitute, setLongitute] = useState(-122.4324);
  const [isLoading, setIsLoading] = useState(false);

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

  const animatedHeight = {
    transform: pan.getTranslateTransform(),
  };

  useEffect(() => {
    // (async () => {
    //   let { status } = await Location.requestPermissionsAsync();
    //   let location = await Location.getCurrentPositionAsync({});
    //   console.log(location);
    //   setLatitute(location.coords.latitude);
    //   setLongitute(location.coords.longitude);
    //   setIsLoading(false);
    // })();
  }, []);

  return (
    <>
      {!isLoading && (
        <View>
          <MapView
            style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
            showsUserLocation
            initialRegion={{
              latitude: latitute,
              longitude: longitute,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          />

          {/* <Searchbar
            placeholder="Search"
            style={{
              position: 'absolute',
              top: 20,
              margin: 10,
              borderRadius: 25,

              zIndex: 1000,
            }}
            icon="menu"
            onIconPress={() => {}}
          /> */}
          {/* =================search=============== */}
          <View style={styles.search}>
            <View style={styles.searchLeft}>
              <Image
                source={require('../../images/map.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <View style={styles.searchMiddele}>
              <TextInput
                style={{fontSize: 17, fontWeight: '700'}}
                placeholder="Search Here"
                placeholderStyle={{fontWeight: 'bold'}}
              />
            </View>
            <View style={styles.searchRight}>
                <View style={{width:'50%', height:'100%',justifyContent:'center', alignItems:'center'}}>

              <FontAwesome name="microphone" size={24} color="black" />
                </View>
                <View style={{width:'50%', height:'100%',justifyContent:'center', alignItems:'center'}}>
                <Image
                source={require('../../images/map.png')}
                style={{width: 30, height: 30}}
              />
                </View>
            </View>
          </View>
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
            {/* {data.category.map((category, index) => (
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
       ))}   */}
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

                zIndex: 10,
              },
            ]}
            {...panResponder.panHandlers}>
            <View
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
              </View>
            </View>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({
  searchRight: {width: '25%', height: '100%', borderRadius: 25, flexDirection:'row'},
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
