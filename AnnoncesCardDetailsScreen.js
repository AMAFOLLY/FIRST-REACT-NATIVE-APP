import React, {useRef} from 'react';
import {View,Image,StyleSheet,Dimensions,StatusBar,Platform,} from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';
import {Text } from "native-base";
import ImageModal from 'react-native-image-modal';



import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

 
const AnnoncescardDetails = ({route}) => {
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


          
          
          

             


           
          
        </View>
         
          
          
       

         

        

         
    </ImageHeaderScrollView>
    </View>
  );
};

export default AnnoncescardDetails;

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
