            import React, { useState, useEffect } from 'react';
            import { Text, View,TouchableOpacity} from 'react-native';
            import { Camera } from 'expo-camera';
            import {  Header, Item, Icon, Input,Left  } from 'native-base'
            import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
            import { Ionicons } from "@expo/vector-icons";

            export default function App({navigation}) {
              const [hasPermission, setHasPermission] = useState(null);
              const [type, setType] = useState(Camera.Constants.Type.back);
            
              useEffect(() => {
                (async () => {
                  const { status } = await Camera.requestPermissionsAsync();
                  setHasPermission(status === 'granted');
                })();
              }, []);
            
              if (hasPermission === null) {
                return <View />;
              }
              if (hasPermission === false) {
                return <Text>No access to camera</Text>;
              }
              return (
                <View style={{ flex: 1 }}>
                  <Camera style={{ flex: 1 }} type={type}>
                   
                  <Header searchBar rounded
                                        style={{
                                            position: 'absolute', backgroundColor: 'transparent',
                                            left: 0, top: 0, right: 0, zIndex: 100, alignItems: 'center',
                                            flex:'1fr 1fr'
                                        }}
                                    >
          <TouchableOpacity onPress={() => navigation.navigate('Treatment')}>
                <Left style={{marginRight:50}}>
                <Ionicons name='ios-arrow-back' size={40} color={'white'}></Ionicons>
                </Left>
            </TouchableOpacity>

                                        <View style={{ flexDirection: 'row', flex: 4 }}>
                                            <Item style={{ backgroundColor: 'transparent' }}>
                                                <Icon name="ios-search" style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}></Icon>
            
                                                <Input
                                                    placeholder="Search"
                                                    placeholderTextColor="white"
                                                />
            
            
                                            </Item>
                                        </View>
            
                                        <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
                                            <Icon name="ios-flash" style={{ color: 'white', fontWeight: 'bold' }} />
                                            <Icon
                                                           onPress={() => {
                                                            setType(
                                                              type === Camera.Constants.Type.back
                                                                ? Camera.Constants.Type.front
                                                                : Camera.Constants.Type.back
                                                            );
                                                          }}
                                              
                                                name="ios-reverse-camera" style={{ color: 'white', fontWeight: 'bold' }} />
                                        </View>
                                    </Header>
            
                                    <View style={{marginTop:740 }}>
                                        <View style={{ alignItems: 'center' }}>
                                          <TouchableOpacity>
                                            <MaterialCommunityIcons name="circle-outline"
                                                style={{ color: 'white', fontSize: 100}}
                                            ></MaterialCommunityIcons>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                  </Camera>
                </View>
              );
            }