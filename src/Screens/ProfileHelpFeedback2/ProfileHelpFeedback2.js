import {View, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {RadioButton, Text} from 'react-native-paper';

export default function ProfileHelpFeedback2() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [feedBackMsg, setFeedBackMsg] = useState('');

  const handleSubmit = () => {
    setEmail('');
    setPhone('');
    setFeedBackMsg('');
  };
  const [value, setValue] = useState('first');
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
      <View className="mx-6 mt-5">
        <Text className="text-xl text-gray-500">
          Please Select Feedback type
        </Text>
      </View>
      <View className="mx-6 my-5">
        <RadioButton.Group
          className="space-y-5"
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View
            className="items-center border-b-2 border-gray-300 pb-4 space-x-5"
            style={{flexDirection: 'row'}}>
            <RadioButton value="Bugs" />
            <Text className="text-xl text-gray-500">Bugs</Text>
          </View>
          <View
            className="items-center border-b-2 border-gray-300 pb-4 space-x-5"
            style={{flexDirection: 'row'}}>
            <RadioButton value="Feature" />
            <Text className="text-xl text-gray-500">Feature</Text>
          </View>
          <View
            className="items-center border-b-2 border-gray-300 pb-4 space-x-5"
            style={{flexDirection: 'row'}}>
            <RadioButton value="Feedbacks" />
            <Text className="text-xl text-gray-500">Feedbacks</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View>
        <View className="mx-6">
          <Text className="text-xl text-gray-500">
            Please Enter Contact and Mobile Number
          </Text>
        </View>
        <TextInput
          value={email}
          onChangeText={setEmail}
          className="mx-6 px-4 text-md my-2 border-2 border-gray-400 rounded-md"
          placeholder="Email"
        />
        <TextInput
          value={phoneNumber}
          onChangeText={setPhone}
          className="mx-6 px-4 text-md my-2 border-2 border-gray-400 rounded-md"
          placeholder="Phone Number"
        />
        <TextInput
          value={feedBackMsg}
          onChangeText={setFeedBackMsg}
          multiline={true}
          numberOfLines={8}
          className="mx-6 px-4 text-md my-2 border-2 border-gray-400 rounded-md"
          placeholder="Enter Your Feedbacks"
        />
      </View>
      <View className="items-center justify-center mt-5">
        <TouchableOpacity
          style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
          className="items-center justify-center rounded-xl px-32 py-4">
          <Text
            className="font-bold text-white"
            style={{fontSize: 20}}
            onPress={handleSubmit}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
