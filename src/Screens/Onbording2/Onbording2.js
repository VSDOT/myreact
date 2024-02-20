import { View, Text, ScrollView , Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const isLandscape = width > height;

export default function Onbording2() {
    const navigation = useNavigation();
    const swiperRef = useRef(null);

    const handleScrollToNext = () => {
      // Scroll to the next slide
      swiperRef.current.scrollBy(1, true);
    };

    const messageList = [
        { id: 1, title: "Welcome to Online Ticket Resale App", Disc: "Movie , Sports and Other Events our Ticket selling or buying one of the best app", image: require('../../assets/Animations/Animation2.json') },
        { id: 2, title: "Find and Online Ticket Resale App", Disc: "Movie , Sports and Other Events our Ticket selling or buying one of the best app", image: require('../../assets/Animations/Animation1.json') },
        { id: 3, title: "Find and Online Ticket Buying App", Disc: "Movie , Sports and Other Events our Ticket selling or buying one of the best app", image: require('../../assets/Animations/Animation3.json') }
    ];

    return (
        <ScrollView className="flex-1 bg-white">
            <Swiper ref={swiperRef} loop={false}
                paginationStyle={{
                    position: "absolute",
                    bottom: 20
                }}
                activeDotColor='#1bc0f6'
                activeDotStyle={{ width: 20, height: 8 }}
            >
                {
                    messageList.map((item) => {
                        return (
                            <View className="relative bottom-14 justify-center items-center h-full space-y-10" key={item.id}>
                                <StatusBar backgroundColor="white" barStyle="dark-content" />
                                <View className="rounded-full" style={{ backgroundColor: "#1bc0f6" }}>
                                    <LottieView style={{ width: width * 0.7, height: width * 0.7 }} source={item.image} autoPlay loop />
                                </View>
                                <View className="space-y-3">
                                    <Text style={{ fontSize: 20 }} className="text-black text-center font-bold px-16">{item.title}</Text>
                                    <Text style={{ fontSize: 15 }} className="text-black text-center px-12">{item.Disc}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </Swiper>
            <View className="relative bottom-44 left-0 right-0 justify-center items-center">
                <TouchableOpacity onPress={handleScrollToNext} style={{ backgroundColor: "#1bc0f6" }} className="px-24 py-4 rounded-full">
                    <Text className="font-bold text-white" style={{ fontSize: 17 }}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View className="absolute top-28 left-0 right-12 justify-end items-end">
                <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen') }}>
                    <Text className="font-extrabold" style={{ fontSize: 17, color: "#1bc0f6" }}>Skip</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}