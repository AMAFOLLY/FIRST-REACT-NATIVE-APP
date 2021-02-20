 
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './HomeScreen'
import RestaurentScreen from './RestaurentScreen';
import EvenementScreen from './TopevenementScreen';
import AnnoncesScreen from './AnnoncesScreen';
import DormirScreen from './DormirScreen';
import DistractionScreen from './DistractionScreen';
import BienetreScreen from './BienetreScreen';
import CardItemDetails from './CardItemDetails';
import McardItemDetails from './McardItemDetails';
import RcardItemDetails from './McardItemDetails';
import NotificationScreen from './NotificationScreen';
import ProfilScreen from './ProfilScreen';
import SettingsScreen from './SettingsScreen';
import RelookingScreen from './RelookingScreen';
import ShoppingScreen from './ShoppingScreen';
import DiscothequeScreen from './DiscothequeScreen';
import AnnoncescardDetails from './AnnoncesCardDetailsScreen';


const  AnnonceStack = createStackNavigator();
const  NotificationStack = createStackNavigator();
const DiscothequeStack = createStackNavigator();
const BienetreStack = createStackNavigator();
const DodoStack = createStackNavigator();
const ShoppingStack = createStackNavigator();
const RestoStack = createStackNavigator();
const DistractionStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const  RelookingStack = createStackNavigator();
const EvenementStack = createStackNavigator();



const MaintabScrseen = () => {
  return (
    
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      inactiveColor="grey"
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Acceuil',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Notifications ',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      
       <Tab.Screen
        name="Profile"
        component={ProfilScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
       
    </Tab.Navigator>   
  );
};

const styles = StyleSheet.create({
   
});

export default MaintabScrseen;


const EvenementStackScreen =({navigation}) =>(
  <EvenementStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <EvenementStack.Screen name="Topevent" component={EvenementScreen} options={({route}) =>({
       headerBackTitleVisible:false,
       headerTitle:false,
       headerTransparent:true,
      
    })} />
    < EvenementStack.Screen name="MCardit" component={McardItemDetails} options={({route}) =>({
     headerBackTitleVisible:false,
     headerTitle:false,
     headerTransparent:true, 
    })}/>
  </EvenementStack.Navigator>
)   

const AnnonceStackScreen =({navigation}) =>(
  <AnnonceStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <AnnonceStack.Screen name="Annonce" component={AnnoncesScreen} options={({route}) =>({
       headerBackTitleVisible:false,
       headerTitle:false,
       headerTransparent:true,
      
    })} />
    < AnnonceStack.Screen name="AnnoncesCard" component={AnnoncescardDetails} options={({route}) =>({
     headerBackTitleVisible:false,
     headerTitle:false,
     headerTransparent:true, 
    })}/>
  </AnnonceStack.Navigator>
)   

const NotificationStackScreen =({navigation}) =>(
  <NotificationStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <NotificationStack.Screen name="Dormir" component={ NotificationScreen} options={({route}) =>({
       headerBackTitleVisible:false,
       headerTitle:false,
       headerTransparent:true,
      
    })} />
    < NotificationStack.Screen name="Cardit" component={CardItemDetails} options={({route}) =>({
     headerBackTitleVisible:false,
     headerTitle:false,
     headerTransparent:true, 
    })}/>
  </ NotificationStack.Navigator>
)

const DodoStackScreen =({navigation}) =>(
  <DodoStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <DodoStack.Screen name="Dormir" component={DormirScreen} options={({route}) =>({
       headerBackTitleVisible:false,
       headerTitle:false,
       headerTransparent:true,
      
    })} />
    <DodoStack.Screen name="Cardit" component={CardItemDetails} options={({route}) =>({
     headerBackTitleVisible:false,
     headerTitle:false,
     headerTransparent:true, 
    })}/>
  </DodoStack.Navigator>
)

const RelookingStackScreen =({navigation}) =>(
  <RelookingStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <RelookingStack.Screen name="Relook" component={ RelookingScreen} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true, 

    })} />
    <RelookingStack.Screen name="RCardit" component={RcardItemDetails} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true,
    
    })}/>
  </RelookingStack.Navigator>
)

const ShoppingStackScreen =({navigation}) =>(
  <ShoppingStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <ShoppingStack.Screen name="Shopping" component={ ShoppingScreen} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true, 

    })} />
    <ShoppingStack.Screen name="RCardit" component={RcardItemDetails} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true,
    
    })}/>
  </ShoppingStack.Navigator>
)


const RestoStackScreen =({navigation}) =>(
  <RestoStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <RestoStack.Screen name="Manger" component={RestaurentScreen} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true, 

    })} />
    <RestoStack.Screen name="MCardit" component={McardItemDetails} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true,
    
    })}/>
  </RestoStack.Navigator>
)

const DistractionStackScreen =({navigation}) =>(
  <DistractionStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <DistractionStack.Screen name=" Distraire" component={DistractionScreen} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true, 

    })} />
    <DistractionStack.Screen name="MCardit" component={McardItemDetails} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true,
    
    })}/>
  </DistractionStack.Navigator>
)

const BienetreStackScreen =({navigation}) =>(
  <BienetreStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <BienetreStack.Screen name=" bien" component={BienetreScreen} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true, 

    })} />
    <BienetreStack.Screen name="MCardit" component={McardItemDetails} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true,
    
    })}/>
  </BienetreStack.Navigator>
)

const DiscothequeStackScreen =({navigation}) =>(
  <DiscothequeStack.Navigator screenOptions={{
    headerLeft: null,
  }}>
    <DiscothequeStack.Screen name=" disco" component={DiscothequeScreen} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true, 

    })} />
    <DiscothequeStack.Screen name="MCardit" component={McardItemDetails} options={({route}) =>({
      headerBackTitleVisible:false,
      headerTitle:false,
      headerTransparent:true,
    
    })}/>
  </DiscothequeStack.Navigator>
)



const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
      headerLeft: null,
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          headerShown:null  
        }} />

        <HomeStack.Screen name="Dodo" component={DodoStackScreen} options={{
        headerBackTitleVisible:false,
        headerTitle:false,
        headerTransparent:true,
        
    
      }}/>

        <HomeStack.Screen name="Relooking" component={RelookingStackScreen} options={{
            headerBackTitleVisible:false,
            headerTitle:false,
            headerTransparent:true, 
        }} />

        <HomeStack.Screen name="Shopping" component={ShoppingStackScreen} options={{
            headerBackTitleVisible:false,
            headerTitle:false,
            headerTransparent:true, 
        }} />

        <HomeStack.Screen name="Topevent" component={EvenementStackScreen} options={{
            headerBackTitleVisible:false,
            headerTitle:false,
            headerTransparent:true, 
        }} />

        <HomeStack.Screen name="Restaurent" component={RestoStackScreen} options={{
            headerBackTitleVisible:false,
            headerTitle:false,
            headerTransparent:true, 
        }} />

        <HomeStack.Screen name="Distraction" component={DistractionStackScreen} options={{
            headerBackTitleVisible:false,
            headerTitle:false,
            headerTransparent:true, 
        }} />

        <HomeStack.Screen name="Bienetre" component={ BienetreStackScreen} options={{
            headerBackTitleVisible:false,
            headerTitle:false,
            headerTransparent:true, 
        }} />

        <HomeStack.Screen name="Discotheque" component={DiscothequeStackScreen} options={{
            headerBackTitleVisible:false,
            headerTitle:false,
            headerTransparent:true, 
        }} />

        <HomeStack.Screen name="Annonces" component={AnnonceStackScreen} options={{
            headerBackTitleVisible:false,
            headerTitle:false,
            headerTransparent:true, 
        }} />


           

        
         
         
         </HomeStack.Navigator>
  );
  
   

   

   


