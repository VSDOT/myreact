import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function TicketBookingScreen({route}) {
  const navigation = useNavigation();
  const {movieName, MoviePrice, MovieLocation, MovieImage, count} =
    route.params;
  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView>
        <StatusBar backgroundColor="#ffffff" />
        <View
          className="items-center justify-between pt-2 mx-3"
          style={{flexDirection: 'row'}}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            className=""
            name="angle-left"
            size={30}
            color="black"
          />
          <Text className="font-bold text-center text-black text-xl flex-1 pl-10">
            Booking Start
          </Text>
          <View className='bg-red-500 px-2.5 py-1 rounded-full items-center justify-center'><Text className='text-white'>1:30pm</Text></View>
        </View>
        <View className='items-center'>
          <ImageBackground
            source={require('../../assets/Big-Ticket.png')}
            resizeMode="contain"
            style={{
              height: hp(40),
              width: wp(100),
              position: 'relative',
              bottom: 40,
            }}>
            <View
              className="relative top-16 items-center justify-between mx-12 my-3"
              style={{flexDirection: 'row'}}>
              <View className="items-left justify-around w-48 space-y-1 mt-1">
                <Text className="text-xl" style={{color: '#1bc0f6'}}>
                  {movieName}
                </Text>
                <Text className="text-md text-black">{MovieLocation}</Text>
              </View>
              <Image
                source={MovieImage}
                alt="MovieImage"
                style={{height: 50, width: 80}}
              />
            </View>
            <View className="relative top-16 mt-2">
              <View
                className="items-center justify-evenly mx-5 mt-2"
                style={{flexDirection: 'row'}}>
                <View>
                  <Text className="text-xl text-black">Ticket Count</Text>
                  <Text className="text-xs text-black">
                    Each Ticket {MoviePrice}
                  </Text>
                </View>
                <View
                  className="items-center space-x-3"
                  style={{flexDirection: 'row'}}>
                  <TouchableOpacity className="bg-blue-200 px-1.5 py-1 rounded-full">
                  <Icon name='minus' size={15} color='black'/>
                  </TouchableOpacity>
                  <Text className="text-black text-md">{count}</Text>
                  <TouchableOpacity className="bg-blue-200 px-1.5 py-1 rounded-full">
                    <Icon name='plus' size={15} color='black'/>
                  </TouchableOpacity>
                </View>
                <Text className="text-xl text-green-400">{MoviePrice}</Text>
              </View>
              <View
                className="items-center justify-start relative left-12 mt-3 space-x-2"
                style={{flexDirection: 'row'}}>
                <Icon name="location-dot" size={15} color="black" />
                <Text className="text-md text-black">{MovieLocation}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View className="items-center justify-center mt-80">
          <TouchableOpacity
            style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
            className="items-center justify-center rounded-md px-40 py-4 mb-5">
            <Text
              className="font-bold text-white"
              style={{fontSize: 20}}
              onPress={() => {
                navigation.navigate('CompleteBooking', {
                  MovieName: movieName,
                  moviePrice: MoviePrice,
                  movieImage: MovieImage,
                  movieLocation: MovieLocation,
                  Count: count,
                });
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
