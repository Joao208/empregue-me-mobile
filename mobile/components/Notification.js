import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Header, Thumbnail, Text,Left} from 'native-base';
import {TouchableOpacity} from 'react-native'
import { Ionicons } from "@expo/vector-icons";



const NotificaçõesNovas = [

    { 
        thumb_notificacao_antigas:'https://2497.cdn.simplo7.net/static/2497/sku/tecido-tricoline-100-algodao-liso-tricoline-100-algodao-lisa-cinza-escuro-dx896--p-1521487476197.jpg',
        notificacao_antigas:'Achamos o emprego ideal para voce João'
    },
    {
        thumb_notificacao_antigas:'https://2497.cdn.simplo7.net/static/2497/sku/tecido-tricoline-100-algodao-liso-tricoline-100-algodao-lisa-cinza-escuro-dx896--p-1521487476197.jpg',
        notificacao_antigas:'Achamos o emprego ideal para voce João'

    },
    { 
        thumb_notificacao_antigas:'https://2497.cdn.simplo7.net/static/2497/sku/tecido-tricoline-100-algodao-liso-tricoline-100-algodao-lisa-cinza-escuro-dx896--p-1521487476197.jpg',
        notificacao_antigas:'Achamos o emprego ideal para voce João'
    },
    { 
        thumb_notificacao_antigas:'https://2497.cdn.simplo7.net/static/2497/sku/tecido-tricoline-100-algodao-liso-tricoline-100-algodao-lisa-cinza-escuro-dx896--p-1521487476197.jpg',
        notificacao_antigas:'Achamos o emprego ideal para voce João'
    },
    { 
        thumb_notificacao_antigas:'https://2497.cdn.simplo7.net/static/2497/sku/tecido-tricoline-100-algodao-liso-tricoline-100-algodao-lisa-cinza-escuro-dx896--p-1521487476197.jpg',
        notificacao_antigas:'Achamos o emprego ideal para voce João'
    },
    { 
        thumb_notificacao_antigas:'https://2497.cdn.simplo7.net/static/2497/sku/tecido-tricoline-100-algodao-liso-tricoline-100-algodao-lisa-cinza-escuro-dx896--p-1521487476197.jpg',
        notificacao_antigas:'Achamos o emprego ideal para voce João'
    },

 ]
 


const Notification = ({navigation}) => {
    return (
<>
<Header>
         <TouchableOpacity onPress={() => navigation.navigate('Navigation')}>
                <Left style={{marginRight:350}}>
                <Ionicons name='ios-arrow-back' size={40}></Ionicons>
                </Left>
            </TouchableOpacity>
        </Header>
<ScrollView>
    <Card style={{marginBottom:20,marginTop:20}}>
        <Title style={{fontSize:20}}>Notificações</Title>
        {
               NotificaçõesNovas.map((u, i) => {
                return(
                    <Card key={i} style={{height:100,marginTop:10}}>
                        <TouchableOpacity onPress={() => navigation.navigate('NotificaçõesProfile')}>
                        <Thumbnail source={{uri:u.thumb_notificacao_antigas}} style={{alignItems:'center',marginTop:20}}>

                        </Thumbnail>
                      <Text style={{textAlign:'center',marginTop:-30,marginLeft:30,fontWeight:'bold'}}>{u.notificacao_antigas}</Text>
                      <Text style={{color:'#bbb',textAlign:'center'}}>O seu emprego ideal é ...</Text>
                      </TouchableOpacity>
                    </Card>
                )
            })   
            }
    </Card>
</ScrollView>
</>
    )
}

export default Notification

