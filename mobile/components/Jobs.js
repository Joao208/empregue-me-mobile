import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {Header} from 'native-base'
import { StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const users = [
    {
        empresapitch:'Lanches e Diversos',
        nomeempresa:'Snack-Food Truck',
        nomeempresa2:'Snack',
        nomevaga :'Atendente de caixa',
        cidade :'São João Da Boa Vista',
        salario :'2.000,00',
        logo:'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/ec69a5d9-bfb8-4e63-a9e8-d272cd5b8e55/202001092128_JYjj_i.jpg',
        imagensrelacinadas:'https://russelservicos.com.br/wp-content/uploads/2016/12/operador-de-caixa-eventos.jpg'
    },
    {
        empresapitch:'Tecnologia e Inovação',
        nomeempresa:'Lost Tech Softwares',
        nomeempresa2:'Lost Tech',
        nomevaga :'Programador',
        cidade :'Aguaí',
        salario :'2.000,00',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkwOf5jRFcRjfV7ppFMGJ9yNKy8R6Cwtpl3V-MUHBLcZMQZnqJ',
        imagensrelacinadas:'https://blog.certisign.com.br/wp-content/uploads/2019/09/dia-do-programador.blog_.jpg'
    },{
        empresapitch:'Onde sempe e mais gostoso comprar',
        nomeempresa:'Marino-Supemercados',
        nomeempresa2:'Marino',
        nomevaga :'Repositor',
        cidade :'São João Da Boa Vista',
        salario :'1.000,00',
        logo:'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/c4/f3/60/c4f3607e-1cd7-ede5-4359-56b9d20c1561/source/512x512bb.jpg',
        imagensrelacinadas:'https://vagastododia.com.br/wp-content/uploads/2018/11/REPOSITOR-DE-MERCADORIA.jpg'
    },
]



const Jobs = ({navigation}) => (
    <>
    <Header></Header>
    <ScrollView>
    {
        users.map((u, i) => {
            return(
  <Card key={i} style={styles.card}>
    <Card.Title style={{marginRight:50}} title={u.nomeempresa} subtitle={u.empresapitch} left={(props) => <Avatar.Image {...props} source={{uri:u.logo}} icon="folder" />} />
    <Card.Content>
            <Title>{u.nomeempresa2}</Title>
        <Paragraph>Vaga de {u.nomevaga} em {u.cidade}, Salario:R${u.salario}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri:u.imagensrelacinadas }} />
    <Card.Actions>
        <TouchableOpacity onPress={() => navigation.navigate('Job_Profile',{imagensrelacinadas:u.imagensrelacinadas,nomevaga:u.nomevaga,salario:u.salario,cidade:u.cidade,logoempresa:u.logo})}>
      <Button color={'blue'}>Ver Vaga</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Company_Profile',{nomeempresaa:u.nomeempresa,logoempresa:u.logo})}>
      <Button color={'blue'}>Ver empresa</Button>
      </TouchableOpacity>
    </Card.Actions>
  </Card>
    )
})   
}
</ScrollView>
  </>
);

export default Jobs;

const styles = StyleSheet.create({
    card:{
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1,
        marginBottom:10,
        marginTop:5

    }
})