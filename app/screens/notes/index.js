import {StyleSheet, Text, View, Image, FlatList, TextInput} from 'react-native';
import React from 'react';
import moment from 'moment';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import Item from './Item';
const data = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
];
const Notes = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <View style={styles.container}>
        {/* <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer} */}
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          data={data}
          renderItem={() => {
            return (
              <View>
                <View style={styles.singleItem}>
                  <Item />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{moment().format('DD-MM-YYYY')}</Text>
                  <Text>{moment().format('hh:mm a')}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={Item => Item.id.toString()}
        />
        {/* {data.map((item, i) => {
            return (
              <View>
                <View style={styles.singleItem}>
                  <Item />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{moment().format('DD-MM-YYYY')}</Text>
                  <Text>{moment().format('hh:mm a')}</Text>
                </View>
              </View>
            );
          })}
        </BottomSheetScrollView> */}
      </View>
      <View style={styles.bottonSendView}>
        <View style={{width: '80%', height: '100%'}}>
          <TextInput
            style={{paddingLeft: 15, fontSize: 13}}
            fontSize={20}
            placeholder="Type Here"
          />
        </View>
        <View
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../images/send.png')} />
        </View>
      </View>
    </>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  singleItem: {
    borderRadius: 8,
    marginVertical: 15,
    width: '100%',
    height: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  bottonSendView: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderTopColor: '#757575',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  contentContainer: {},
});
