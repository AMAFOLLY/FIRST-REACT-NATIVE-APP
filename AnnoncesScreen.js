import React ,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,ImageBackground,StatusBar,ScrollView,Image,FlatList} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import { SliderBox } from "react-native-image-slider-box";




import Cardone from '../components/Cardone'















const AnnoncesScreen = ({navigation}) => {

  const[Annonces,setAnnonces] =useState(null);
  const[loading,setloading] = useState(true);

  useEffect (() => {
    const fetchAnnonces = async () => {
       try{
         const list =[];
          await firestore()
         .collection('Annonces')
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
            setAnnonces(list);
            if (loading){
              setloading(false);
            }
         console.log('Annonces:',Annonces)
       }catch(e){
         console.log(e);
       }
    } 

    fetchAnnonces();
 },[]);

    const renderItem = ({item}) => {
        return (
            <Cardone 
                itemData={item}
                onPress={()=> navigation.navigate('AnnoncesCard', {itemData: item})}
            />
        );
      };
    return(
       <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent'  />
            <View>
            <ImageBackground 
                source={require('../assets/blu8.png')}
                style={{width:"100%",height:100}}
                imageStyle={{borderBottomRightRadius:40}}
            >
              
             
            </ImageBackground>

       </View>

       
       <View style={styles.flat}>
        <FlatList
            data={Annonces}
            renderItem=    {renderItem}
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

export default AnnoncesScreen;