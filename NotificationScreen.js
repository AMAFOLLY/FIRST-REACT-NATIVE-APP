import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';






const NotificationScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
     <Text> Vous n'avez pas encore de notification</Text>
      
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  
  },
   
});

