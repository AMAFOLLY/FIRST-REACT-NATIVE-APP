import React ,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,ImageBackground,StatusBar,ScrollView,Image,FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';






import Cardone from '../components/Cardone'


 


const DistractionScreen = ({navigation}) => {

  const[Distraction,setDistraction] =useState(null);
  const[loading,setloading] = useState(true);

  useEffect (() => {
    const fetchDistraction = async () => {
       try{
         const list =[];
          await firestore()
         .collection('Distraction')
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
            setDistraction(list);
            if (loading){
              setloading(false);
            }
         console.log('Distraction:',Distraction)
       }catch(e){
         console.log(e);
       }
    } 

    fetchDistraction();
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
                source={require('../assets/distraction.png')}
                style={{width:"100%",height:150}}
                imageStyle={{borderBottomRightRadius:40}}
            >
              
             
            </ImageBackground>
       </View>

        
       <View style={styles.flat}>
        <FlatList
            data={Distraction}
            renderItem={renderItem}
            initialNumToRender={4}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            style={{marginTop:15}}
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

export default DistractionScreen;