 import React from "react";
 import { SafeAreaView, View, Text, FlatList, StyleSheet,ScrollView, Image, Dimensions} from "react-native";
 import news_data from './news_data.json';
 import NewsCard from "./components/NewsCard";
 import news_banner_data from './news_banner_data.json';

 function App(){
  
  return(
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.header}>News</Text>

      <FlatList 
        ListHeaderComponent={()=>(
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(banner_news => <Image style={styles.banner_image} source={{uri:banner_news.imageUrl}}/>)}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={({item}) => <NewsCard news={item} />}
      />
    </SafeAreaView>
  );
 }

 const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eceff1',
  },
  header:{
    textAlign:'center',
    fontSize:50,
    fontWeight:'bold',
    color:'black',
  },
  banner_image:{
    height:Dimensions.get('window').height/5,
    width:Dimensions.get('window').width/2,
  }
 });
 export default App;