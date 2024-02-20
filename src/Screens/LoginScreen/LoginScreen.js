import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';

const countryCodes = [
  {code: 'IN', label: 'India'},
  {code: 'US', label: 'United States'},
  // Add more country codes as needed
];

export default function LoginScreen() {
  let navigation = useNavigation();
  let [phoneNumber, setPhoneNumber] = useState('');
  let [selectedCountryCode, setSelectedCountryCode] = useState('IN');
  let [isChecked, setIsChecked] = useState(false);
  let [seconds, setSeconds] = useState(60);
  let [modalVisible, setModalVisible] = useState(false);

  let startTimer = () => {
    setSeconds(60);
  };

  useEffect(() => {
    let interval;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  let handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  let handleCountryCodeSelect = code => {
    setSelectedCountryCode(code);
    setModalVisible(false);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center mt-10">
        <Text
          className="text-4xl font-bold text-center"
          style={{color: '#1bc0f6'}}>
          Sign Up
        </Text>
        <Text
          className="text-base font-bold text-center px-10 py-5"
          style={{color: 'black'}}>
          Simply enter your phone number to sign in or create an account
        </Text>
        <View className="mx-10" style={{flexDirection: 'row'}}>
          {/* Country Code Input */}
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View className="bg-gray-100 px-5 items-center justify-center">
              <Text style={styles.countryCodeLabel}>
                +{selectedCountryCode}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          {/* Phone Number Input */}
          <View className="flex-1">
            {/* <Text style={styles.countryCodeInputLabel}>Phone Number:</Text> */}
            <TextInput
              value={phoneNumber}
              className="bg-gray-100 px-5 py-5"
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
        <View className="mt-8">
          <Text className="text-left">OTP verification</Text>
        </View>
        <View style={styles.container}>
          {seconds > 0 ? (
            <Text
              style={
                styles.timerText
              }>{`Resend OTP in ${seconds} seconds`}</Text>
          ) : (
            <TouchableOpacity onPress={startTimer}>
              <Text style={styles.resendText}>
                I didn't receive code. Resend code
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{flexDirection: 'row'}}
          className="justify-start items-center mt-10">
          <Checkbox.Android
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={handleCheckboxToggle}
          />
          <Text>Remind me.</Text>
        </View>
        <View className="justify-center items-center my-10">
          <TouchableOpacity
            style={{backgroundColor: '#1bc0f6'}}
            className="px-24 py-4 rounded-full">
            <Text
              className="font-bold text-white"
              style={{fontSize: 17}}
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        {/* Country Code Modal */}
        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {countryCodes.map(country => (
                <TouchableOpacity
                  key={country.code}
                  onPress={() => handleCountryCodeSelect(country.code)}>
                  <Text style={styles.modalItem}>
                    {country.label} +{country.code}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  timerText: {
    fontSize: 16,
    color: 'gray',
  },
  resendText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  countryCodeContainer: {
    backgroundColor: '#f1f1f9',
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  countryCodeLabel: {
    fontSize: 16,
  },
  countryCodeInputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  phoneNumberInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  modalItem: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
