import {View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Ticket from 'react-native-vector-icons/dist/FontAwesome';
import Help from 'react-native-vector-icons/dist/Ionicons';
import Logout from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view'; 

export default function ProfileScreen() {

  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1">
      <StatusBar backgroundColor='#1bc0f6'/>
      <View
        className="items-center space-x-24 pt-8 pb-44 pl-4"
        style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
        <Icon onPress={() => { navigation.goBack() }} className="" name="arrow-left-long" size={30} color="white" />
        <Text className="pl-2 font-bold text-center text-white text-xl">
          Profile
        </Text>
      </View>
      <View className="items-center justify-center">
        <View
          className="absolute z-10 bottom-0 bg-white w-36 h-36 rounded-full items-center justify-center"
          style={{shadowColor: 'gray', elevation: 20}}>
          <Icon className="" name="user" size={80} color="black" />
        </View>
        <View
          className="bg-white w-11/12 rounded-3xl py-4 absolute items-center justify-end"
          style={{shadowColor: 'gray', elevation: 20}}>
          <Text className="pt-14 text-xl text-gray-500">12345676879</Text>
        </View>
      </View>
      <View className='mx-4 mt-20 mb-24'>
        <View className="bg-white rounded-2xl space-y-4 py-3" style={{ shadowColor : 'gray' , elevation : 70 }}>
          <View className="items-center justify-start py-3 px-4 mx-2 space-x-6 border-b-2 border-gray-200" style={styles.ProfileList}>
            <Icon className="" name="credit-card" size={20} color="black" />
            <Text onPress={() => navigation.navigate('ProfileAmountStatus')} className='text-xl text-gray-500'>Amount Status</Text>
          </View>
          <View className="items-center justify-start py-3 px-4 mx-2 space-x-6 border-b-2 border-gray-200" style={styles.ProfileList}>
            <Ticket className="" name="ticket" size={25} color="black" />
            <Text onPress={() => navigation.navigate('ProfileTicketStatus')} className='text-xl text-gray-500'>Ticket Status</Text>
          </View>
          <View className="items-center justify-start py-3 px-4 mx-2 space-x-6 border-b-2 border-gray-200" style={styles.ProfileList}>
            <Help className="" name="help-buoy" size={25} color="black" />
            <Text onPress={() => navigation.navigate('ProfileHelpFeedback')} className='text-xl text-gray-500'>Help & feedbacks</Text>
          </View>
          <View className="items-center justify-start py-3 px-4 mx-2 space-x-6 border-b-2 border-gray-200" style={styles.ProfileList}>
            <Icon className="" name="file-circle-question" size={21} color="black" />
            <Text onPress={() => navigation.navigate('ProfileTermsTopBar')} className='text-xl text-gray-500'>Terms & Conditions</Text>
          </View>
          <View className="items-center justify-start py-3 px-4 mx-2 space-x-6 border-b-2 border-gray-200" style={styles.ProfileList}>
            <Help className="" name="settings-outline" size={25} color="black" />
            <Text  onPress={() => navigation.navigate('ProfileSettings')} className='text-xl text-gray-500'>Settings</Text>
          </View>
          <View className="items-center justify-start py-2 px-4 mx-2 space-x-6" style ={{ flexDirection : 'row' }}>
            <Logout className="" name="logout" size={25} color="red" />
            <Text className='text-xl text-red-700'>Logout</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  ProfileList : {
    flexDirection :'row' ,
  }
})