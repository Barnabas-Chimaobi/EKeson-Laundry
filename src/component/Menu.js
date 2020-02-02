import React, {Component} from 'react'
import {View, Text,Image, StyleSheet, ScrollView } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

export default class Menu extends Component {
  static navigationOptions = {
    header: () => {
      header : 'null'
    }
  }
  render(){
    return(
      <ScrollView>
      <View style={styles.menuContainer}>
         <Image
            source={require('./assets/laundry23.png')}
            style={styles.backgroundImage}
         />
         <View  style={styles.logo}>
           <Text style={styles.eeee}>E&</Text>
           <Text style={styles.ffff}>F</Text>
         </View>
        <View style={styles.servicesContainer}>
           <View style={styles.fumigation}>
             
             <Text style={{fontSize:20, paddingTop:5, marginLeft: 60}}>Ekeson Laundry Services</Text>
           </View>
         
         <View style={styles.secondRow}>
           <View style={styles.firstSubSecondRow} >
             <Image
             source={require('./assets/laundry1.png')} style={{height:40, width:60,alignSelf:'center'}}
             />
             <Text style={{alignSelf:'center'}}  onPress={() => {
                this.props.navigation.navigate("Collection");
              }}> Dry Cleaning</Text>
           </View>
           <View style={styles.firstSubSecondRow}>
             <Image
             source={require('./assets/laundrylogo1.png')} style={{height:40, width:60, alignSelf:'center'}}
             />
             <Text style={{alignSelf:'center'}} onPress={() => {
                this.props.navigation.navigate("Collection");
              }}>Ironing Clothes</Text>
           </View>
           <View style={styles.firstSubSecondRow}>
             <Image
             source={require('./assets/mattress.png')} style={{height:40, width:60,alignSelf:'center'}}
             />
             <Text style={{alignSelf:'center',marginLeft: 12}} onPress={() => {
                this.props.navigation.navigate("Collection");
              }}>Mattress/Interior Cleaning Services</Text>
           </View>
           <View style={styles.firstSubSecondRow}>
             <Image
             source={require('./assets/carwash.png')} style={{height:40, width:60,alignSelf:'center'}}
             />
             <Text style={{alignSelf:'center'}} onPress={() => {
                this.props.navigation.navigate("Collection");
              }}>Car Wash</Text>
           </View>
          </View> 
        </View>
        <View style={styles.footer}>
          <AntDesign name="setting" size={25} color="white" style={styles.setting} onPress={() => {
                this.props.navigation.navigate("Settings");
              }}/>
         <Image source={require('./assets/waste-collection.png')} style={{height:40, width:40, alignSelf:'center'}}/>
         <Image source={require('./assets/recycleImg.png')} style={{height:40, width:40,alignSelf:'center', tintColor: "white"}}/>
        </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height:300,
    width: 400,
    flex: 1,

  },
  servicesContainer: {
    marginTop: 100
  },
  fumigation: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    margin:5
    
  },
  secondRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 8,
   
  },
  firstSubSecondRow: {
   width: 140,
   height: 100,
   backgroundColor:'white',
   borderRadius: 10,
   margin:5,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#21041b',
    justifyContent:'space-around'
  },
  setting: {
    width:30,
     height:30,

    alignSelf: 'center'
  },
  logo:{
    height:100,
     width:100,
     marginTop:-200,
     marginLeft: 60,
     alignSelf: 'center'
    },
    eeee: {
      color: 'white',
      fontSize: 40
    },
    ffff: {
      color: 'white',
      fontSize: 40,
      marginTop: -30
    }
})