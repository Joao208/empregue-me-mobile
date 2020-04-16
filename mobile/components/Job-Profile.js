import React from "react";
import { StyleSheet, Text, View, SafeAreaView,ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Thumbnail,Card, Right, Image, Subtitle} from 'native-base'
import {Title, Paragraph, Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapView, { Marker } from "react-native-maps";


const nommmapa ='Apple'

export default function Profile({navigation}) {

const nomevaga = navigation.getParam('nomevaga')
const imagensrelacinadas = navigation.getParam('imagensrelacinadas')
const salario = navigation.getParam('salario')
const cidade = navigation.getParam('cidade')
const logoempresa = navigation.getParam('logoempresa')


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <TouchableOpacity onPress={() => navigation.navigate('Navigation')}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                  <Thumbnail style={styles.thumb} source={{uri:imagensrelacinadas}} ></Thumbnail>
                  <View>
                    <Thumbnail style={styles.logo} source={{uri:logoempresa}}></Thumbnail>
                  </View>
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Title>{nomevaga}<Icon name="check-circle-o" size={20} color={'blue'}></Icon></Title>
                   <TouchableOpacity>
                     <Button>
                   <Text>Salvar</Text>
                   </Button>
                   <Button>
                   <Text>Enviar Curriculo</Text>
                   </Button>
                   </TouchableOpacity>
                  </View>
                  <Card style={styles.cardsobre}>
                    <Title>Sobre:</Title>
                        <Subtitle>O que precisamos:</Subtitle>
                        <Text></Text>
                        <Subtitle>Salario:</Subtitle>
                        <Text style={{fontWeight:'bold'}}>{salario}</Text>
                        <Subtitle>Outros beneficios:</Subtitle>
                        <Text></Text>
                  </Card>
                  <Card style={{alignItems:'center'}}>
                    <Title>Vagas relacionadas:</Title>
                    <TouchableOpacity style={{alignItems:'center'}}>
                    <Thumbnail source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT45p8zjo_F-ru5HtfgM29sAiXgYPhBcF4V8SJkV1NbN7AlPxYA'}} style={styles.thumbs}></Thumbnail><Text style={styles.textem}>Atendente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                    <Thumbnail source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUn0nPP6xJ-S7aum2gyN07OoLtQdUbt-cuDFWrZO9VyP_IpwQw'}} style={styles.thumbs}></Thumbnail><Text style={styles.textem}>Atendente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                    <Thumbnail source={{uri:'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/2d2d2b97-4d46-4887-91b3-9c4e24630677/202001031335_Zfh2_i.png'}} style={styles.thumbs}></Thumbnail><Text style={styles.textem}>Atendente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                    <Thumbnail source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9yJOKtv1Bq5vxS-opCLRRJfbWs_KmTeYO7qxkFUzWMTx4x1HS'}} style={styles.thumbs}></Thumbnail><Text style={styles.textem}>Atendente</Text>
                    </TouchableOpacity>
                  </Card>
                  <Card>
                    <Title style={{textAlign:'center'}}>Ache a Vaga No {nommmapa} Maps</Title>
                    <MapView initialRegion={{latitude:-22.0542426,longitude:-46.9902287}} style={styles.map}>
                      <Marker coordinate={{latitude:-22.0542426,longitude:-46.9902287}}>
                      <Thumbnail source={{uri:logoempresa}}></Thumbnail>
                      </Marker>
                    </MapView>
                  </Card>
                  <Card style={{height:300,alignItems:'center'}}>
                    <Title style={{textAlign:'center'}}>Google Add</Title>
                    <Thumbnail style={styles.add} source={{uri:'https://www.pertech.com.br/wp-content/uploads/2016/09/pp95-cinza-square-600x439.jpg'}}></Thumbnail>
                  </Card>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    thumb:{
      height:250,
      width:500,
      borderRadius:0,
      alignItems:'center'
    },
    logo:{
      marginTop:-20,
      height:80, 
      width:80,
      shadowColor: "#fff",
      shadowOffset: { width: 100, height: 100 },
      shadowRadius: 20,
      shadowOpacity: 1,
    },
    cardsobre:{
      marginTop:20,
      textAlign:'center',
      alignItems:'center'
    },
    thumbs:{
      marginBottom:10,
    },
    textem:{
      color:'black',
      fontSize:18,
      marginBottom:5,
      shadowColor: "#fff",
      shadowOffset: { width: 100, height: 100 },
      shadowRadius: 20,
      shadowOpacity: 1,
    },
    map:{
      height:300,
      width:450,
    },
    add:{
      borderRadius:0,
      height:300,
      width:400
    }
});