import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import ProfileTerms1 from '../ProfileTerms1';
import ProfileTerms2 from '../ProfileTerms2';
const Tab = createMaterialTopTabNavigator();
export default function ProfileTermsTopBar() {
  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#1bc0f6" />
      <View
        className="items-center space-x-20 pt-2 pb-6 pl-4"
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
          Terms & Conditions
        </Text>
      </View>
      <Tab.Navigator
        initialRouteName="Terms & Conditions"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#f2f7fd',
          },
          tabBarActiveTintColor: '#1bc0f6',
          tabBarLabelStyle: {fontSize: 15},
        }}>
        <Tab.Screen name="Terms & Conditions" component={ProfileTerms1} />
        <Tab.Screen name="Privacy policy" component={ProfileTerms2} />
      </Tab.Navigator>
    </View>
  );
}
