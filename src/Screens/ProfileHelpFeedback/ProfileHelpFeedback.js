import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';

export default function ProfileHelpFeedback() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1">
      <StatusBar backgroundColor="#1bc0f6" />
      <View
        className="items-center space-x-16 pt-2 pb-6 pl-4"
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
          Help & Feedbacks
        </Text>
      </View>
      <View className="mx-6 my-10 space-y-6">
        <View>
          <Text className="text-xl mb-5 text-gray-500">Login</Text>
          <Text className="text-xl text-gray-500">
            Where can the customers look for information
          </Text>
          <Text className="text-xl text-gray-500">
            regarding the Movies , Sports
          </Text>
          <Text className="text-xl text-gray-500">and other events .</Text>
        </View>
        <Text className="text-xl text-gray-500">offers</Text>
        <Text className="text-xl text-gray-500">Ticket Booking</Text>
        <Text className="text-xl text-gray-500">Payments</Text>
        <Text className="text-xl text-gray-500">Seller and Buyer History</Text>
        <Text className="text-xl text-gray-500">Email / SMS</Text>
      </View>
      <View className="items-center justify-center mt-40">
        <TouchableOpacity
          style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
          className="items-center justify-center rounded-xl px-32 py-4">
          <Text
            className="font-bold text-white"
            style={{fontSize: 20}}
            onPress={() => {
              navigation.navigate('ProfileHelpFeedback2');
            }}>
            Feedbacks
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
