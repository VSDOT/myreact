import {View, Text} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-virtualized-view';

export default function ProfileTerms1() {
  return (
    <ScrollView className="mx-6 my-10 space-y-6">
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
    </ScrollView>
  );
}
