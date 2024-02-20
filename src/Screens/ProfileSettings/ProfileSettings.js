import {View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {Text} from 'react-native-paper';

export default function ProfileSettings() {
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
          Settings
        </Text>
      </View>
      <View className="my-5 space-y-2">
        <View className="items-center justify-between border-b-2 border-gray-400 px-8 py-3" style={{ flexDirection:'row' }}>
          <Text className='text-xl text-gray-500'>Clear cache Data</Text>
          <Icon name="angle-right" size={20} color="gray" />
        </View>
        <View className="items-center justify-between border-b-2 border-gray-400 px-8 py-3" style={{ flexDirection:'row' }}>
          <Text className='text-xl text-gray-500'>Check App Update</Text>
          <Icon name="angle-right" size={20} color="gray" />
        </View>
      </View>
    </ScrollView>
  );
}
