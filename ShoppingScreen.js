import React ,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,ImageBackground,StatusBar,ScrollView,Image,FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';






import Cardone from '../components/Cardone'





 









const ShoppingScreen = ({navigation}) => {

  const[Shopping,setShopping] =useState(null);
  const[loading,setloading] = useState(true);

  useEffect (() => {
    const fetchShopping = async () => {
       try{
         const list =[];
          await firestore()
         .collection('Shopping')
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
            setShopping(list);
            if (loading){
              setloading(false);
            }
         console.log('Shopping:',Shopping)
       }catch(e){
         console.log(e);
       }
    } 

    fetchShopping();
 },[]);

    const renderItem = ({item}) => {
        return (
            <Cardone
                itemData={item}
                onPress={()=> navigation.navigate('RCardit', {itemData: item})}
            />
        );
      };
    return(
       <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent'  />
            <View>
            <ImageBackground 
                source={require('../assets/Shopping.png')}
                style={{width:"100%",height:150}}
                imageStyle={{borderBottomRightRadius:40}}
            >
              
             
            </ImageBackground>
       </View>

        
       <View style={styles.flat}>
        <FlatList
            data={Shopping}
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

export default ShoppingScreen;