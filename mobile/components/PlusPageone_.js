import React from 'react'
import { Card, View,Text } from 'native-base'
import { StyleSheet,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Lottie from 'lottie-react-native'
import camera from './camera.json'
import postar from './postar.json'
import evolução from './evolução.json'
import Header from './Header'

const PlusPageone = ({navigation}) => {
    return(
        <>
        <Header></Header>
        <ScrollView>
        <View style={{flex:'1fr 1fr',flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Plus')}>
        <Card style={{marginRight:10,width:205,height:400,alignItems:'center'}}>
        <Lottie source={camera} style={styles.camera} autoPlay></Lottie>
        <Text style={{marginTop:-40,fontWeight:'bold'}}>Poste uma foto </Text>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity>
        <Card style={{width:205,height:400,marginRight:10,alignItems:'center'}}>
        <Lottie source={postar} style={styles.camera} autoPlay></Lottie>
        <Text style={{marginTop:-40,fontWeight:'bold'}}>No que esta pensando? </Text>
        </Card>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:100}}>
        <Card style={{marginTop:-80,alignItems:'center',height:340}}>
        <TouchableOpacity>
        <Lottie source={evolução} style={styles.evolução} autoPlay></Lottie>
        <Text style={{marginTop:-10,fontWeight:'bold',textAlign:'center'}}>Mostre sua evolução profissional</Text>
        </TouchableOpacity>
        </Card>
        </View>
        </ScrollView>
        </>
    )
}

export default PlusPageone


const styles = StyleSheet.create({
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:54,
        marginHorizontal: 16
    },
    camera:{
        height:400,
        width:100
    },
    evolução:{
        height:300
    }
})