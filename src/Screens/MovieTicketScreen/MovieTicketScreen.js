import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Alert from 'react-native-vector-icons/dist/Feather';
import Upload from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {ScrollView} from 'react-native-virtualized-view';
import Ticket from '../../Components/Ticket';
import {useNavigation} from '@react-navigation/native';

export default function SportsTicketScreen() {
  const navigation = useNavigation();
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
      count: 3,
      title: 'Got',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'chennai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 2,
      count: 8,
      title: 'Avengers',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Dubai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 3,
      count: 2,
      title: 'Panther',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Chennai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 4,
      count: 6,
      title: 'Bat Man',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Chennai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 5,
      count: 3,
      title: 'Super Man',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Chennai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 6,
      count: 4,
      title: 'Hulk',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Chennai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 7,
      count: 2,
      title: 'Wakanada',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Chennai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 8,
      count: 1,
      title: 'Leo',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Chennai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 9,
      count: 2,
      title: 'Ant Man',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Chennai , no.1 , MainRoad , vadapalani -621212',
    },
    {
      id: 10,
      count: 5,
      title: 'Thor',
      price: '₹20.00',
      image: require('../../assets/TheaterImg.jpg'),
      Location: 'Chennai , no.1 , MainRoad , vadapalani -621212',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className="items-center justify-center py-3 space-x-2"
        style={{flexDirection: 'row'}}>
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
            backgroundColor: '#f1f1f9',
            width: windowWidth > 500 ? 430 : 300,
            height: windowHeight > 600 ? 48 : 56,
            shadowColor: 'gray',
          }}
        />
        <View>
          <Icon name="location-dot" size={25} color="black" />
        </View>
      </View>
      <ScrollView>
        <View className="items-center my-2">
          <Image
            style={{
              width: windowWidth > 500 ? 490 : 340,
              height: windowHeight > 600 ? 180 : 300,
              borderRadius: 20,
            }}
            source={require('../../assets/TheaterImg.jpg')}
          />
        </View>
        <View className="justify-center items-center my-2 mt-0">
          <TouchableOpacity
            style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
            className="px-20 py-3 rounded-full items-center space-x-2">
            <Upload name="file-upload-outline" size={20} color="white" />
            <Text
              className="font-bold text-white"
              style={{fontSize: windowWidth > 500 ? 25 : 20}}
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}>
              Upload Tickets
            </Text>
          </TouchableOpacity>
        </View>
        <View
          className="items-center justify-between px-5 py-2 border-t-2 border-b-2 border-gray-300"
          style={{flexDirection: 'row'}}>
          <Text className="font-bold text-black text-xl">Recent tickets</Text>
          <View
            className="items-center space-x-2"
            style={{flexDirection: 'row'}}>
            <Upload name="calendar-month-outline" size={23} color="black" />
            <Text className="font-bold text-black text-md">
              Select the Date
            </Text>
          </View>
        </View>
        <FlatList
          numColumns={2}
          style={{marginHorizontal: 2, marginBottom: 80}}
          data={MovieTickets}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Ticket
              video={item.image}
              MovieName={item.title}
              price={item.price}
              Location={item.Location}
              Count={item.count}
            />
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
      </ScrollView>
    </SafeAreaView>
  );
}
