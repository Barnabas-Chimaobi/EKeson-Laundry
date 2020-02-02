import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native'
export default class Splash extends Component {

  componentDidMount() {
    setTimeout(() => {
       this.load();
          }, 4000);
    }

   load = () => {
        this.props.navigation.push("Menu");
    };

  render() {
    return(
      <ImageBackground source={require('./assets/laundry23.png')} style={{width: '100%', height: '100%'}}>
        <View  style={styles.logo1}>
           <Text style={styles.eeee}>E&</Text>
           <Text style={styles.ffff}>F</Text>
         </View>
        <Image source={require('./assets/laundrylogo1.png')} style={styles.image}/>
     <Text style={styles.logo}>WELCOME TO EKESON LAUNDRY AND DRY CLEANING SERVICES</Text>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  splash:{
    width: 480,
    height: 800,

   
  },
  logo: {
    // width: 100,
    // height: 100,
    flex: 1,
    alignSelf: 'center',
    color: "#ffffff",
    fontStyle: 'italic',
    textAlign: "center",
    textDecorationLine: "underline",

  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    // marginTop:150
  },
  eeee: {
    color: 'white',
    fontSize: 40
  },
  ffff: {
    color: 'white',
    fontSize: 40,
    marginTop: -30
  },
  logo1:{
    height:100,
     width:100,
     marginTop:200,
     marginLeft: 60,
     alignSelf: 'center'
    },
})