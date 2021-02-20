import React ,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,ImageBackground,StatusBar,ScrollView,Image,FlatList} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import { SliderBox } from "react-native-image-slider-box";




import Card from '../components/Card'





const images = [

  require('../assets/mang1.jpg'),
  require('../assets/mang2.jpg'),       
  
     
];











const DormirScreen = ({navigation}) => {

  const[Domir,setDomir] =useState(null);
  const[loading,setloading] = useState(true);

  useEffect (() => {
    const fetchDomir = async () => {
       try{
         const list =[];
          await firestore()
         .collection('Domir')
         .get()
         .then((querySnapshot) =>{
           

           querySnapshot.forEach(doc => {
             const{description,coordinate,latitude,longitude,image,title,rating,reservation,categorie,contact,galerie,galerie1,galerie2,galerie3,galerie4,galerie5,galerie6,galerie7,galerie8,galerie9,} = doc.data();

             list.push({
               id: doc.id,
               title:title,
               image:image,
               rating:rating,
               reservation:reservation,
               categorie:categorie,
               contact:contact,
               galerie:galerie,
               galerie1:galerie1,
               galerie2:galerie2,
               galerie3:galerie3,
               galerie4:galerie4,
               galerie5:galerie5,
               galerie6:galerie6,
               galerie7:galerie7,
               galerie8:galerie8,
               galerie9:galerie9,
               coordinate:coordinate,
               latitude:latitude,
               longitude:longitude,
               description:description,
              
             });
           })
         })
            setDomir(list);
            if (loading){
              setloading(false);
            }
         console.log('Domir:',Domir)
       }catch(e){
         console.log(e);
       }
    } 

    fetchDomir();
 },[]);

    const renderItem = ({item}) => {
        return (
            <Card 
                itemData={item}
                onPress={()=> navigation.navigate('Cardit', {itemData: item})}
            />
        );
      };
    return(
       <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent'  />
            <View>
            <ImageBackground 
                source={require('../assets/Dormir.png')}
                style={{width:"100%",height:100}}
                imageStyle={{borderBottomRightRadius:40}}
            >
              
             
            </ImageBackground>

       </View>

       <View >
         <SliderBox images={images}
        sliderBoxHeight={180}
        paginationBoxVerticalPadding={40}
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
        paddingVertical: 30
        }}
        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5,}}
        imageLoadingColor="grey"
         />
      </View> 
       <View style={styles.flat}>
        <FlatList
            data={Domir}
            renderItem={renderItem}
            initialNumToRender={4}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            style={{marginTop:10}}
        />
      </View>
       </View>
    );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    flat:{
     flex:1,
    width: '90%',
    alignSelf: 'center'
    },
})

export default DormirScreen;