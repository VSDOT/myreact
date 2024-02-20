import {View, Text, StatusBar, FlatList, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Alert from 'react-native-vector-icons/dist/Feather';
import { useNavigation } from '@react-navigation/native';

export default function ProfileTicketStatus() {

    const navigation = useNavigation();

  const AmountStatus = [
   
  ];
  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#1bc0f6" />
      <View
        className="items-center space-x-20 pt-2 pb-6 pl-4"
        style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
        <Icon onPress={() => { navigation.goBack() }} className="" name="arrow-left-long" size={30} color="white" />
        <Text className="font-bold text-center text-white text-xl">
          Ticket Status
        </Text>
      </View>
      <View className="flex-1 mx-6 my-4">
        <FlatList
          numColumns={2}
          style={{marginHorizontal: 5}}
          data={AmountStatus}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View className="space-y-4">
              <Image className="w-56 h-44" source={item.image} />
              <Text className="text-bold text-3xl">{item.title}</Text>
            </View>
          )}
          ListEmptyComponent={
            <View className="items-center justify-center space-y-2 mt-60">
              <Alert name="alert-circle" size={40} color="gray" />
              <View className='items-center'>
                <Text className="text-2xl text-gray-500 font-bold">No Account Details .</Text>
                <Text className="text-xl text-gray-500 font-bold">Only for Ticket Uploader page .</Text>
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
}
