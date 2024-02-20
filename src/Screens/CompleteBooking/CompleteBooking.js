import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Social from 'react-native-vector-icons/dist/FontAwesome';
import Gmail from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Book from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CompleteBooking({route}) {
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const {MovieName, moviePrice, movieLocation, movieImage, Count} =
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
              navigation.goBack('');
            }}
            className=""
            name="angle-left"
            size={30}
            color="black"
          />
          <Text className="font-bold text-center text-black text-xl flex-1 pl-10">
            Complete Your Booking
          </Text>
          <View className="bg-red-500 px-2.5 py-1 rounded-full items-center justify-center">
            <Text className="text-white">1:30pm</Text>
          </View>
        </View>
        <View className="items-center">
          <ImageBackground
            source={require('../../assets/Big-Ticket.png')}
            resizeMode="contain"
            style={{
              height: hp(30),
              width: wp(100),
              position: 'relative',
              // bottom: 40,
            }}>
            <View
              className="relative top-5 items-center justify-between mx-12 my-3"
              style={{flexDirection: 'row'}}>
              <View className="items-left justify-around w-48 space-y-1 mt-1">
                <Text className="text-xl" style={{color: '#1bc0f6'}}>
                  {MovieName}
                </Text>
                <Text className="text-md text-black">{movieLocation}</Text>
              </View>
              <Image
                source={movieImage}
                alt="MovieImage"
                style={{height: 50, width: 80}}
              />
            </View>
            <View className="relative top-6 mt-2">
              <View
                className="items-center justify-evenly mx-5 mt-2"
                style={{flexDirection: 'row'}}>
                <View
                  className="items-center space-x-12"
                  style={{flexDirection: 'row'}}>
                  <View>
                    <Text className="text-xl text-black">Selected Tickets</Text>
                    <Text className="text-xs text-black">
                      Each Ticket {moviePrice}
                    </Text>
                  </View>
                  <View className="bg-blue-300 px-2.5 py-1 rounded-full">
                    <Text className="text-black">{Count}</Text>
                  </View>
                </View>
                <Text className="text-xl text-green-400">{moviePrice}</Text>
              </View>
              <View
                className="items-center justify-start relative left-12 mt-3 space-x-2"
                style={{flexDirection: 'row'}}>
                <Icon name="location-dot" size={15} color="black" />
                <Text className="text-md text-black">{movieLocation}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* Send Ticket Contact */}
        <View className="mx-4 space-y-3 mb-4">
          <Text className="text-black text-start font-bold text-md">
            Send it
          </Text>
          <View className="items-center border border-gray-300 rounded-xl py-4 space-y-5">
            <View className="items-center flex-row space-x-4">
              <Social name="whatsapp" size={40} color="lightgreen" />
              <TextInput
                placeholder="Number"
                className="border bg-gray-200 border-gray-100 w-72 rounded-md pl-5"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
            <View className="items-center flex-row space-x-4">
              <Gmail name="gmail" size={40} color="#1bc0f6" />
              <TextInput
                placeholder="Email"
                className="border bg-gray-200 border-gray-100 w-72 rounded-md pl-5"
                value={text}
                onChangeText={setText}
              />
            </View>
          </View>
        </View>
        {/* Booking Summary */}
        <View className="mx-4 space-y-3 my-2">
          <View className="flex-row items-center space-x-2">
            <Book name="book" size={25} color="black" />
            <Text className="text-black text-start font-bold text-md">
              Booking Summary
            </Text>
          </View>
          <View className="border border-gray-300 rounded-xl px-2 py-2">
            <View className="items-center flex-row justify-between w-full px-6 py-2 border-b border-gray-200">
              <View className='items-start'>
                <Text className="text-md text-black font-bold">Ticket</Text>
                <Text className="text-xs text-black">2 Ticket @ 240 each</Text>
              </View>
              <Text className="text-md text-green-300 font-bold">
                {moviePrice}
              </Text>
            </View>
            <View className="items-center flex-row justify-between w-full px-6 py-3 border-b border-gray-200">
              <Text className="text-md text-black font-bold">Taxes & Fees</Text>
              <Text className="text-md text-green-300 font-bold">
                {moviePrice}
              </Text>
            </View>
            <View className="items-center flex-row justify-between w-full px-6 py-3">
              <Text className="text-md text-black font-bold">Total</Text>
              <Text className="text-md text-green-300 font-bold">
                {moviePrice}
              </Text>
            </View>
          </View>
        </View>
        <View className="items-center justify-center mt-10">
          <TouchableOpacity
            style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
            className="items-center justify-center rounded-md px-40 py-4 mb-5">
            <Text
              className="font-bold text-white"
              style={{fontSize: 20}}
              onPress={() => {
                navigation.navigate('ProfileHelpFeedback2');
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
