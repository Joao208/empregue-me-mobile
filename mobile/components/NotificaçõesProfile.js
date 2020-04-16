import React from "react";
import { StyleSheet, Text, View, SafeAreaView,ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Thumbnail} from 'native-base'
import {WebView} from 'react-native-webview'

const thumb = 'https://img.r7.com/images/folha-carteira-de-trabalho-emprego-vagas-28022019165601102?dimensions=394x222'

export default function Profile({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.titleBar}>
                    <TouchableOpacity onPress={() => navigation.navigate('Navigation')}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                  <Thumbnail style={styles.thumb} source={{uri:thumb}}>
                  </Thumbnail>
                  </View>
                  <WebView style={{marginTop:10}} source={{uri:'https://g1.globo.com/ap/amapa/noticia/2020/03/17/veja-as-vagas-de-emprego-do-sine-macapa-para-o-dia-18-de-marco.ghtml'}} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: "#FFF"
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    thumb:{
      height:200,
      width:500,
      borderRadius:0
    },
});