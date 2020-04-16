import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, Animated, Dimensions, SafeAreaView,TouchableOpacity} from 'react-native';
import { Thumbnail,Card } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {WebView} from 'react-native-webview'
import Header from './Header'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

const avatarurl = 'https://i.pinimg.com/originals/8e/53/c9/8e53c951fb0bb3e20452eb1c6eb90fb0.png'


var images = [
  { id: 1, src: require('../assets/1.jpg') },
  { id: 2, src: require('../assets/2.jpg') },
  { id: 3, src: require('../assets/3.jpg') },
  { id: 4, src: require('../assets/4.jpg') },
  
]

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      activeImage: null
    }
  }
  componentWillMount() {
    this.allImages = {}
    this.oldPosition = {}
    this.position = new Animated.ValueXY()
    this.dimensions = new Animated.ValueXY()
    this.animation = new Animated.Value(0)
    this.activeImageStyle = null
  }

  openImage = (index) => {

    this.allImages[index].measure((width, height, pageX, pageY) => {
      this.oldPosition.x = pageX
      this.oldPosition.y = pageY
      this.oldPosition.width = width
      this.oldPosition.height = height

      this.position.setValue({
        x: pageX,
        y: pageY
      })

      this.dimensions.setValue({
        x: width,
        y: height
      })

      this.setState({
        activeImage: images[index]
      }, () => {
        this.viewImage.measure(( dWidth, dHeight, dPageX, dPageY) => {

          Animated.parallel([
            Animated.timing(this.position.x, {
              toValue: dPageX,
              duration: 300
            }),
            Animated.timing(this.position.y, {
              toValue: dPageY,
              duration: 300
            }),
            Animated.timing(this.dimensions.x, {
              toValue: dWidth,
              duration: 300
            }),
            Animated.timing(this.dimensions.y, {
              toValue: dHeight,
              duration: 300
            }),
            Animated.timing(this.animation, {
              toValue: 1,
              duration: 300
            })
          ]).start()
        })
      })
    })
  }
  closeImage = () => {
    Animated.parallel([
      Animated.timing(this.position.x, {
        toValue: this.oldPosition.x,
        duration: 300
      }),
      Animated.timing(this.position.y, {
        toValue: this.oldPosition.y,
        duration: 250
      }),
      Animated.timing(this.dimensions.x, {
        toValue: this.oldPosition.width,
        duration: 250
      }),
      Animated.timing(this.dimensions.y, {
        toValue: this.oldPosition.height,
        duration: 250
      }),
      Animated.timing(this.animation, {
        toValue: 0,
        duration: 250
      })
    ]).start(() => {
      this.setState({
        activeImage: null
      })
    })
  }

  render() {
    const{navigation} = this.props

    const activeImageStyle = {
      width: this.dimensions.x,
      height: this.dimensions.y,
      left: this.position.x,
      top: this.position.y
    }

    const animatedContentY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [250, 0]
    })

    const animatedContentOpacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    })

    const animatedContentStyle = {
      opacity: animatedContentOpacity,
      transform: [{
        translateY: animatedContentY
      }]
    }

    const animatedCrossOpacity = {
      opacity: this.animation
  }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        
        <ScrollView style={{ flex: 1 }}>
          {images.map((image, index) => {
            return (
              <>
              <TouchableWithoutFeedback
                onPress={() => this.openImage(index)}
                key={image.id}>
                <Animated.View
                  style={{ height: SCREEN_HEIGHT - 150, width: SCREEN_WIDTH, padding: 15 }}
                ><TouchableOpacity onPress={()=> navigation.navigate('ProfileA')}>
                    <Thumbnail source={{uri:avatarurl}} style={{marginLeft:160,marginBottom:20}}></Thumbnail>
                    </TouchableOpacity>
                  <Image
                    ref={(image) => (this.allImages[index] = image)}
                    source={image.src}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                  >
                    </Image>
                </Animated.View>
              </TouchableWithoutFeedback>
                <Card style={{borderRadius:20,height:40}}>
                  <Icon name={'thumbs-o-up'} size={30} style={{marginLeft:20,marginTop:4}}></Icon>
                  <Text style={{textAlign:'right',marginRight:330,marginTop:-22}}>1</Text>
                  <Text style={{textAlign:'right',marginRight:290,marginTop:-17}}>Curtir</Text>
                  <Icon name={'share'} size={30} style={{marginLeft:260,marginTop:-20}}></Icon>
                  <Text style={{textAlign:'right',marginTop:-23,marginRight:10}}>Compartilhar</Text>
                  </Card>

                  </>
)
          })}
        </ScrollView>
        <View style={StyleSheet.absoluteFill}
          pointerEvents={this.state.activeImage ? "auto" : "none"}
        >
          <View style={{  zIndex: 1001 }} ref={(view) => (this.viewImage = view)}>
            <Animated.Image
              source={this.state.activeImage ? this.state.activeImage.src : null}
              style={[{ resizeMode: 'cover', top:0, left: 0}, activeImageStyle]}
            >
            </Animated.Image>
            <TouchableWithoutFeedback onPress={() => this.closeImage()}>
              <Animated.View style={[{ position: 'absolute', top: 30, right: 30 }, animatedCrossOpacity]}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black',marginTop:20}}>X</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
          <Animated.View style={[{ flex: 1, backgroundColor: 'white', padding:0, paddingTop:0 }, animatedContentStyle]}>
         <Header></Header>
         <WebView source={{uri:'https://www.nike.com.br/Produto/Tenis-Jordan-Mars-270-Masculino/153-169-223-99654?gridPosition=A4'}} />
          </Animated.View>
        </View>
          </SafeAreaView>
   
   );
    
  }
}
