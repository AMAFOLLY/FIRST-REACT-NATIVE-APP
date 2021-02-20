import React ,{useState,useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box"


const images = [
    require('../assets/moov.jpg'),    
    require('../assets/du1.jpg'),       
    require('../assets/du3.jpg'),
    require('../assets/du4.jpg'),
    require('../assets/slider4.jpg'),
    require('../assets/akla.png'),
    require('../assets/esigslideracceuil.jpg')   
  ];
  

const HomeScreen = ({navigation,item}) => {



  
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#f0f8ff' barStyle="light-content" />

        
        <View style={{
      height:60,
                    }} >
        <Image
              source={require("../assets/nom.png")} 
              resizeMode="cover"
              style={{
                width:150,
                height:60,
                margin:5,

              }}
            />
          </View>
          
    <ScrollView  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

        <View style={{height:50}}>
    </View>

    <View >
        <SliderBox
        images={images}
        sliderBoxHeight={250}
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 10
        }}
        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
        imageLoadingColor="grey" />
    </View> 

    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      
    <TouchableOpacity onPress={()=>navigation.navigate("Dodo")}>
        <View style={styles.cardcat}>
          <View style={styles.cardImgWrapp}> 
          <Image
              source={require('../assets/Dormir.png')} 
              resizeMode="cover"
              style={styles.cardcatImg}
            />   
            
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Relooking")}>
        <View style={styles.cardcat}>
          <View style={styles.cardImgWrapp}> 
          <Image
              source={require('../assets/Relooking.png')} 
              resizeMode="cover"
              style={styles.cardcatImg}
            />   
            
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>navigation.navigate("Shopping")}>
        <View style={styles.cardcat}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/Shopping.png')} 
              resizeMode="cover"
              style={styles.cardcatImg}
            />
          </View>
        </View>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={()=>navigation.navigate("Restaurent")}>
        <View style={styles.cardcat}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/manger.png')} 
              resizeMode="cover"
              style={styles.cardcatImg}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>navigation.navigate("Distraction")}>
        <View style={styles.cardcat}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/distraction.png')} 
              resizeMode="cover"
              style={styles.cardcatImg}
            />
          </View>
        </View>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() =>navigation.navigate("Bienetre")}>
        <View style={styles.cardcat}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/bien.png')} 
              resizeMode="cover"
              style={styles.cardcatImg}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>navigation.navigate("Discotheque")}>
        <View style={styles.cardcat}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/disco.png')} 
              resizeMode="cover"
              style={styles.cardcatImg}
            />
          </View>
        </View>
      </TouchableOpacity>
      
      
    </ScrollView>
    
     {/*categorie*/}
     <View style={styles.tvue}>
    <Text style={styles.text}>Categories</Text>
    
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <TouchableOpacity onPress={()=>navigation.navigate("Topevent")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/evenementweddy.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>BABY VAA </Text>
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate("Topevent")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/evenementmasta.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Masta Popa</Text>
          <Text>Sortie D'album</Text>
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate("Topevent")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annonce2.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Afia MALA</Text> 
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate("Topevent")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annonce3.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>John keder</Text>
          <Text style={styles.cardTitle}>concerts ACOUSTIQUE</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate("Topevent")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/evenement5.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Bar Italiano</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate("Topevent")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/evenement7.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Soirée FLUO</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate("Topevent")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/evenement8.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>SALON de L'entrepreneuriat </Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate("Topevent")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/evenement9.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Love KARAOKE</Text>
           
        </View>
      </View>
    </TouchableOpacity>
    </ScrollView>

     
     {/*top evenement*/}
     <View style={styles.tvue}>
        <View style={{width:"75%"}}>
          <Text style={styles.text}>Top Evenements</Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate("Topevent")}>
          <View style={{ flexDirection:"row",}}>
          <Text style={{marginTop:10,marginLeft:5,color:'#808080',fontSize:15}}>voir plus</Text>
          <View style={{marginTop:12,}}>
          <Feather
          name='chevron-right'
          color="grey"
          size={20}
          />
          </View>
          
          </View>
        </TouchableOpacity>
        </View>
       
     </View>
   
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annonce.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>COURS AFROBEAT</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annoncesnaky.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Nash et Snaky</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annoncekaliendi.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>kaliendi</Text> 
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annonce4.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>The job</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annonce6.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>AFRO CARIBBEAN</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annonceyahweh.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>YAHWEH</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/esigannonce.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>ESIG</Text>
           
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/annoncewedy.jpg")} 
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>BABY VAA</Text>
          <Text style={styles.cardTitle}>KIKO WEDY</Text>
           
        </View>
      </View>
    </TouchableOpacity>

</ScrollView> 

     
      {/*annonces*/}
      <View style={styles.tvue}>
          <View style={{width:"75%"}}>
          <Text style={styles.text}>Annonces</Text>
          </View>
        <TouchableOpacity onPress={() => navigation.navigate("Annonces")}>
          <View style={{ flexDirection:"row",}}>
          <Text style={{marginTop:10,marginLeft:5,color:'#808080',fontSize:15}}>voir plus</Text>
          <View style={{marginTop:12,}}>
          <Feather
          name='chevron-right'
          color="grey"
          size={20}
          />
          </View>
          
          </View>
        </TouchableOpacity>
     </View>

      
      
</ScrollView>

</View>
  );
};

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f0f8ff',
borderWidth:0,
borderTopWidth:0,
},
    
card: {
height: 200,
width:200,
margin:10,
elevation: 5,
},
    
cardone: {
height: 200,
width:'100%',
marginTop:7,
marginBottom:10,
elevation: 5,
},
          
cardImgWrapper:{
flex:5, 
},
    
cardImgWrapperone:{
flex:5, 
},
     
    
cardImgWrapp:{
flex:5, 
borderRadius: 8,
},
    
cardImg: {
height: '100%',
width: '100%',
borderRadius: 8,
borderBottomLeftRadius:0,
borderBottomRightRadius:0,   
},
    
cardImgone: {
height: '100%',
width: '100%',
              
},
           
          
cardInfo: {
height:50,
backgroundColor: '#fff',
padding:5,
borderBottomLeftRadius:8,
borderBottomRightRadius:8,
},
cardTitle: {
fontWeight: 'bold',
marginLeft:2,
},
cardDetails: {
fontSize:12,
color: '#444',
},
cardcatImg: {
height: '100%',
width: '100%',
borderRadius: 8,
             
}, 
    
cardcat: {
height: 120,
width:120,
margin:10,
elevation: 5,
marginTop:30,
},
text:{
margin:5,
marginLeft:10,
color:'#808080',
fontSize:20
},
tvue:{
  flexDirection:"row",
},
cardImgG:{
height: '60%',
width: '80%',
borderRadius: 80,
marginLeft:15,
marginTop:20,
},
cardG:{
height: 200,
width:140,
margin:10,
elevation: 5,
backgroundColor:'#fff',
borderRadius: 10,
},
cardTitleG: {
fontWeight: 'bold',
marginLeft:35,
marginTop:5,
},
faux1:{
height:80,
},
faux:{
margin:5,
width:160,
height:60,
},
});

export default HomeScreen;
