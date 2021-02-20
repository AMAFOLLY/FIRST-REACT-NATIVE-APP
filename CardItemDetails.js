import React, {useRef} from 'react';
import {View,Image,StyleSheet,Dimensions,StatusBar,Platform,TouchableOpacity} from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';
import {Text } from "native-base";
import ImageModal from 'react-native-image-modal';



import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;



  

 
const CardItemDetails = ({route}) => {

  const itemData = route.params.itemData;
  const navTitleView = useRef(null);
  
  
 



  return (

    
    <View style={styles.container}>
        
        <ImageHeaderScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          renderHeader={() => <Image source={{uri:itemData.image}} style={styles.image} />}
          

          renderForeground={() => (
            <View style={styles.titleContainer}>
               
            </View>
          )}

          renderFixedForeground={() => (
            <Animatable.View style={styles.navTitleView} ref={navTitleView}>
               
            </Animatable.View>
          )}
        >
        <TriggeringView style={styles.section}
         onHide={() => navTitleView.current.fadeInUp(200)}
         onDisplay={() => navTitleView.current.fadeOut(100)}
         >
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Aperçu</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome name="star" size={21} color="#FF6347" />
              <Text style={{marginHorizontal: 2, fontSize:15,}}>{itemData.rating}</Text>
               
            </View>
            </View>
        </TriggeringView>

        <View style={styles.section1}>

           

          <View >
            <Text style={styles.titre}> {itemData.title} </Text>
            
           <Text style={styles.sectionContent}> {itemData.description} </Text>
        
            <View style={{flexDirection:"row",marginTop:8}}>
              <Feather name="phone-call" color="#000000" size={20}/>
              <Text style={styles.cardContact}>{itemData.contact}</Text>
            </View>
          </View>


          
          
          

             


          <View style={styles.reservation}>
              <View style={styles.reservationContainer} >
                <Text style={styles.reserver}> {itemData.reservation} </Text>
              </View>

          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galerie}>

              <ImageModal
                resizeMode="cover"
                style={styles.gale}
                source={{uri:itemData.galerie, }}
              />
  
               <ImageModal 
                resizeMode="cover"
                style={styles.gale}
                source={{uri:itemData.galerie1, }} 
               />
               <ImageModal resizeMode="cover"
                style={styles.gale}
                source={{uri:itemData.galerie2,}} 
               />
               <ImageModal  resizeMode="cover"
                style={styles.gale}
                source={{uri:itemData.galerie3,}} 
               />
               <ImageModal  resizeMode="cover"
                style={styles.gale}
                source={{uri:itemData.galerie4, }} 
               />
               <ImageModal  resizeMode="cover"
                style={styles.gale}
                source={{uri:itemData.galerie5,}} 
               />
               <ImageModal  resizeMode="cover"
                style={styles.gale}
                source={{uri:itemData.galerie6,}} 
               />
               <View >
               
               </View>
               
               
          </ScrollView>
        </View>
         
          
          
       

         

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sexe}>
          <View style={styles.categories}>
            {itemData.categorie.map((categorie,index) => (
              <View style={styles.categoryContainer} key={index}>
                <FontAwesome name="tag" size={16} color="#000000" />
                <Text style={styles.category}>{categorie}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={[styles.section2, {height: 250}]}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1}}
            region={{
              latitude: itemData.coordinate.latitude,
              longitude: itemData.coordinate.longitude,
              latitudeDelta: 6.313168488385122,
              longitudeDelta: 1.382099882596095,
            }}>
            <MapView.Marker
              coordinate={itemData.coordinate}
              image={require('../assets/map_marker.png')}
            />
          </MapView>
        </View>

    </ImageHeaderScrollView>
    </View>
  );
};

export default CardItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    color:"#000"
  },
  name: {
    fontWeight: 'bold',
  },
   
  section: {
    padding: 4,
    backgroundColor:"#FFD700"
  },
  section1: {
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  
  },
  section2: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    
  },
  sexe:{
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
    
    
    
  },
  categories: {
    flexDirection: 'row',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: "#FFD700",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 10,
    fontWeight:"bold"
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
   reservsec:{
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  reservation:{
    flexDirection: 'row',
    marginTop:"40%",
    marginLeft:"34%"
  },
  reservationContainer:{
    flexDirection: 'row',
    backgroundColor: "#FFD700",
    borderRadius: 20,
    marginTop: 3,
    padding:10,
    paddingHorizontal: 15,
  },
  reserver: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 10,
    fontWeight:"bold"
  },
  galerie:{
    
    flexDirection:"row",
   
  },
  gale:{
    height:150,
    width:150,
    margin:5,
    borderRadius:12,
    
  },
  galecontainer:{
    height:200,
    width:200,
    margin:5,
    borderRadius:20,
    borderWidth:3,
    alignItems:"center",
    justifyContent:"center",
  },
  cardContact: {
    fontWeight: 'bold',
    marginLeft:"4%",
  },
  titre:{
    margin:10,
    color:"#FFD700",
    fontWeight:"bold",
  },
  
});
