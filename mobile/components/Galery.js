import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Image,TouchableOpacity } from 'react-native';
import {Header,Left} from 'native-base'
import data from './Data'
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";

let {width} = Dimensions.get('window')

let numberGrid = 3
let widthGrid = width / numberGrid

export default class Galery extends Component {
  state = {
    data: data 
  }
    
  renderItem = ({item}) => {
   return <View>
     <Image source={{uri: item.avatar}} style={styles.itemImage} />
     </View>
  }
  
  render()  {
    const{navigation} = this.props
    return( 
    <>
    <Header>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Left style={{marginRight:350}}>
                <Ionicons name='ios-arrow-back' size={40}></Ionicons>
                </Left>
            </TouchableOpacity>

    </Header>
    <ScrollView>
    <FlatList  
          keyExtractor={(_, index) => index} 
          contentContainerStyle={styles.container}
          numColumns={numberGrid} data={this.state.data} 
          renderItem={this.renderItem} />
          </ScrollView>
  </>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemImage:{
    width: widthGrid,
    height: widthGrid,
    margin:2

  }
});
