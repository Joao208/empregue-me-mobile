import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Header,Card, Text,Right, Left, Title, Thumbnail } from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import {TouchableOpacity,StyleSheet} from 'react-native'

const Messages = ({navigation}) => {
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
            <Card style={{marginTop:-3}}>
                <Title style={{fontSize:30}}>Mensagens:</Title>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Card style={{height:80}}>
                        <Thumbnail 
                        source={{uri:'https://madeirasgasometro.vteximg.com.br/arquivos/ids/170687-1000-1000/pp95-cinza-square.jpg?v=636800587299230000'}}
                        style={{marginTop:10}}
                        >
                       
                        </Thumbnail>
                        <Text style={{textAlign:'center',fontSize:27,marginTop:-48,marginLeft:-200}}>João</Text>
                        <Text style={{textAlign:'center',color:'#bbb'}}>Pode deixar estarei ai amanha,obg</Text>
                        
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Card style={{height:80}}>
                        <Thumbnail 
                        source={{uri:'https://madeirasgasometro.vteximg.com.br/arquivos/ids/170687-1000-1000/pp95-cinza-square.jpg?v=636800587299230000'}}
                        style={{marginTop:10}}
                        >
                       
                        </Thumbnail>
                        <Text style={{textAlign:'center',fontSize:27,marginTop:-48,marginLeft:-200}}>João</Text>
                        <Text style={{textAlign:'center',color:'#bbb'}}>Pode deixar estarei ai amanha,obg</Text>
                        
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Card style={{height:80}}>
                        <Thumbnail 
                        source={{uri:'https://madeirasgasometro.vteximg.com.br/arquivos/ids/170687-1000-1000/pp95-cinza-square.jpg?v=636800587299230000'}}
                        style={{marginTop:10}}
                        >
                       
                        </Thumbnail>
                        <Text style={{textAlign:'center',fontSize:27,marginTop:-48,marginLeft:-200}}>João</Text>
                        <Text style={{textAlign:'center',color:'#bbb'}}>Pode deixar estarei ai amanha,obg</Text>
                        
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Card style={{height:80}}>
                        <Thumbnail 
                        source={{uri:'https://madeirasgasometro.vteximg.com.br/arquivos/ids/170687-1000-1000/pp95-cinza-square.jpg?v=636800587299230000'}}
                        style={{marginTop:10}}
                        >
                       
                        </Thumbnail>
                        <Text style={{textAlign:'center',fontSize:27,marginTop:-48,marginLeft:-200}}>João</Text>
                        <Text style={{textAlign:'center',color:'#bbb'}}>Pode deixar estarei ai amanha,obg</Text>
                        
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Card style={{height:80}}>
                        <Thumbnail 
                        source={{uri:'https://madeirasgasometro.vteximg.com.br/arquivos/ids/170687-1000-1000/pp95-cinza-square.jpg?v=636800587299230000'}}
                        style={{marginTop:10}}
                        >
                       
                        </Thumbnail>
                        <Text style={{textAlign:'center',fontSize:27,marginTop:-48,marginLeft:-200}}>João</Text>
                        <Text style={{textAlign:'center',color:'#bbb'}}>Pode deixar estarei ai amanha,obg</Text>
                        
                    </Card>
                    </TouchableOpacity>

                </ScrollView>
            </Card>
            <Card style={{marginTop:10}}>
              <Title> Manage my network </Title> 
                <Ionicons name='md-contacts' size={25}></Ionicons><Text style={{textAlign:'center'}}>Connections</Text><Text style={styles.number}>68</Text>
                <Ionicons name='ios-phone-portrait' size={25}></Ionicons><Text style={{textAlign:'center'}}>Contacts</Text><Text style={styles.number}>900</Text>
                <Ionicons  name='ios-person-add'size={25}></Ionicons><Text style={{textAlign:'center'}}>People I Follow</Text><Text style={styles.number}>223</Text>
                <Ionicons  name='md-chatbubbles'size={25}></Ionicons><Text style={{textAlign:'center'}}>Groups</Text><Text style={styles.number}>152</Text>
                <Ionicons  name='md-clipboard'size={25}></Ionicons><Text style={{textAlign:'center'}}>Page</Text><Text style={styles.number}>22</Text>
                <Ionicons  name='ios-pricetag'size={25}></Ionicons><Text style={{textAlign:'center'}}>Hashtag</Text><Text style={styles.number}>120</Text>
                </Card>
        </ScrollView>
        </>
    )
}

export default Messages

const styles = StyleSheet.create({
    number:{
        textAlign:'right'
    }
})