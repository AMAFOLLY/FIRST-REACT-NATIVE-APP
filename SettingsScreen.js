import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";




 


    
    


 
  

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#f0f8ff' barStyle="dark-content"/>

        <View>
            <Text> reglages</Text>
        </View>
        
            
         

</View>
  );
};

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f0f8ff',

},
    
 
});

export default SettingsScreen;
