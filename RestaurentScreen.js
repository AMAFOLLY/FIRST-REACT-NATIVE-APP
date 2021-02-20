import React ,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,ImageBackground,StatusBar,ScrollView,Image,FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { SliderBox } from "react-native-image-slider-box";





import Cardone from '../components/Cardone'


const images = [
  require('../assets/mang1.jpg'),
  require('../assets/mang2.jpg'),        
];



const RestaurentScreen = ({navigation}) => {

  const[Restaurent,setRestaurent] =useState(null);
  const[loading,setloading] = useState(true);

  useEffect (() => {
    const fetchRestaurent = async () => {
       try{
         const list =[];
          await firestore()
         .collection('Restaurent')
         .get()
         .then((querySnapshot) =>{
           

           querySnapshot.forEach(doc => {
             const{description,coordinate,latitude,longitude,image,title,contact,galerie,galerie1,galerie2,galerie3,galerie4,galerie5,galerie6,galerie7,galerie8,galerie9,} = doc.data();

             list.push({
               id: doc.id,
               title:title,
               image:image,
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
            setRestaurent(list);
            if (loading){
              setloading(false);
            }
         console.log('Restaurent:',Restaurent)
       }catch(e){
         console.log(e);
       }
    } 

    fetchRestaurent();
 },[]);

    const renderItem = ({item}) => {
        return (
            <Cardone
                itemData={item}
                onPress={()=> navigation.navigate('MCardit', {itemData: item})}
            />
        );
      };
    return(
       <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent'  />
            <View>
            <ImageBackground 
                source={require('../assets/manger.png')}
                style={{width:"100%",height:100}}
                imageStyle={{borderBottomRightRadius:40}}
            >
              
             
            </ImageBackground>
       </View>

       <View >
         <SliderBox images={images}
        sliderBoxHeight={180}
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
        imageLoadingColor="grey"
         />
      </View> 
       <View style={styles.flat}>
        <FlatList
            data={Restaurent}
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

export default RestaurentScreen;