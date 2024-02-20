import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {Searchbar} from 'react-native-paper';
import File from 'react-native-vector-icons/dist/AntDesign';
import Alert from 'react-native-vector-icons/dist/Feather';
import {ScrollView} from 'react-native-virtualized-view';

export default function TicketDetailScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Responsive Screen
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions({window});
    });
    return () => subscription?.remove();
  });

  const {window} = dimensions;
  let windowWidth = window.width;
  let windowHeight = window.height;
  // Responsive Screen

  const MovieTickets = [
    {
      id: 1,
      title: 'Got',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 2,
      title: 'Avengers',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 3,
      title: 'Hulk',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 4,
      title: 'Super Man',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 5,
      title: 'Bat Man',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 6,
      title: 'Black Panther',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 7,
      title: 'Spider Man',
      Details: 'ahamed@gmail.com',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StatusBar backgroundColor="#1bc0f6" />
        <View
          className="items-center space-x-24 pt-2 pb-6 pl-4"
          style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            className=""
            name="arrow-left-long"
            size={30}
            color="white"
          />
          <Text className="font-bold text-center text-white text-xl">
            Amount Status
          </Text>
        </View>
        <View
          className="items-center py-3"
          style={{backgroundColor: '#f2f7fd'}}>
          <Searchbar
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            inputStyle={{
              fontSize: 18,
              color: 'gray',
              borderRadius: 20,
              paddingBottom: 20,
            }}
            style={{
              borderRadius: 10,
              backgroundColor: '#f6f6f6',
              width: windowWidth > 500 ? 430 : 340,
              height: windowHeight > 600 ? 48 : 56,
              shadowColor: 'gray',
              borderWidth: 1,
              borderColor: 'gray',
            }}
          />
        </View>
        <View
          className="items-center justify-around bg-gray-100 py-3"
          style={{flexDirection: 'row'}}>
          <Text className="text-xl text-black">Ticket</Text>
          <Text className="text-xl text-black">Send It</Text>
        </View>
        <View className="items-center pt-3">
          <FlatList
            numColumns={1}
            style={{marginHorizontal: 2, marginBottom: 80}}
            data={MovieTickets}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                className="items-center justify-between space-x-28 py-4"
                style={{flexDirection: 'row'}}>
                <View className='space-x-2 items-center' style={{flexDirection: 'row'}}>
                  <File name="pdffile1" size={25} color="black" />
                  <Text className='text-md text-black font-bold'>{item.title}</Text>
                </View>
                <Text>{item.Details}</Text>
              </View>
            )}
            ListEmptyComponent={
              <View
                className="mt-20 items-center justify-center space-x-4"
                style={{flexDirection: 'row'}}>
                <Alert name="alert-circle" size={30} color="gray" />
                <Text>No Items Found</Text>
              </View>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
