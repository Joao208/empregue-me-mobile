import React from 'react';
import {Header} from 'native-base'
import {LinearGradient} from  'expo-linear-gradient'
import {Text} from 'react-native'

const Headerr = () => (
    <LinearGradient
    colors={['#1E90FF', '#00BFFF', '#87CEEB']}
    style={{height:100}}>
        <Text style={{fontSize:30,color:'#fff',textAlign:'center',marginTop:40}}>Empregue.me</Text>
        <Header style={{backgroundColor:'transparent'}}></Header>
    </LinearGradient>
)

export default Headerr

