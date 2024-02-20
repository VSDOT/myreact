import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

export default function Ticket({video, MovieName, price, Location , Count}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('TicketBookingScreen', {
          movieName: MovieName,
          MoviePrice: price,
          MovieImage: video,
          MovieLocation: Location,
          count : Count
        })
      }>
      <ImageBackground
        source={require('../assets/Ticket-Img.png')}
        className="flex-1 items-center justify-center"
        resizeMode="stretch"
        style={{shadowColor: 'black', height: 200}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TicketBookingScreen', {
              movieName: MovieName,
              MoviePrice: price,
              MovieImage: video,
              MovieLocation: Location,
              count : Count
            })
          }>
          <View className="space-y-2 items-center overflow-hidden">
            <Image source={video} style={{width: 130, height: 70}} />
            <View
              className="items-center justify-center space-x-8 mb-4"
              style={{flexDirection: 'row'}}>
              <Text
                className="font-bold text-black text-md"
                style={{color: '#1bc0f6'}}>
                {MovieName}
              </Text>
              <Text className="font-bold text-black text-md">{price}</Text>
            </View>
            <View
              className="space-x-1 ml-1"
              style={{flexDirection: 'row' , width : 150}}>
              <Icon name="location-dot" size={13} color="black" style={{ marginTop: 1 }} />
              <Text className="font-bold text-black text-xs">{Location}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
