import {View, Text, StatusBar, Image, ScrollView , Dimensions} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen() {
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

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + windowHeight > 600 ? hp(3.4) : hp(3))),
      100,
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + windowHeight > 600 ? hp(3.4) : hp(3))),
      300,
    );

    setTimeout(() => navigation.navigate('OnbordScreen2'), 2500);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#1bc0f6',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="#1bc0f6" />
      {/* Logo with rings */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{padding: ring2padding}}>
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{padding: ring1padding}}>
          <Image
            className="rounded-full p-10"
            source={require('../../assets/welcome-logo.jpg')}
            style={{width: windowWidth > 600 ? hp(15) : hp(20), height: windowHeight > 600 ? hp(20) : hp(15)}}
          />
        </Animated.View>
      </Animated.View>
      {/* Logo with rings */}
      {/* Title and Punch Line */}
      <View className="flex items-center space-y-2">
        <Text
          style={{fontSize: windowWidth > 600 ? hp(4) : hp(5)}}
          className="font-bold text-white tracking-widest">
          Ticket Resale
        </Text>
        <Text
          style={{fontSize: windowWidth > 600 ? hp(1.7) : hp(2)}}
          className="font-bold text-white tracking-widest">
          Movie , Sports and other Events
        </Text>
      </View>
      {/* Title and Punch Line */}
    </ScrollView>
  );
}
