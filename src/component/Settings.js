import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Icon from  'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.settingsWrapper}>
        <View style={styles.header}>
        <AntDesign name="left" color="black" size={25} color="white" onPress={() => {
                this.props.navigation.navigate("Menu");
              }}/>
         <Text style={{color:'white', fontSize: 20, marginRight:80}}>Settings</Text>
       
        </View>
        <View style={styles.profile}>
          <Image source={require('./assets/profile.png')} style={{width:30, height:30, tintColor:'#21041b'}}/>
          <Text style={{fontSize:15, paddingLeft:10}}>User profile</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('./assets/terms.png')} style={{width:30, height:30, tintColor:'#21041b'}}/>
          <Text style={{fontSize:15, paddingLeft:10}}>Terms and condition</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('./assets/privacy.png')} style={{width:30, height:30, tintColor:'#21041b'}}/>
          <Text style={{fontSize:15, paddingLeft:10}}>Privacy policy</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('./assets/reviews.png')} style={{width:30, height:30, tintColor:'#21041b'}}/>
          <Text style={{fontSize:15, paddingLeft:10}}>Reviews</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('./assets/about.png')} style={{width:30, height:30, tintColor:'#21041b'}}/>
          <Text style={{fontSize:15, paddingLeft:10}}>About garble</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('./assets/signOut.png')} style={{width:30, height:30, tintColor:'#21041b'}}/>
          <Text style={{fontSize:15, paddingLeft:10}}>Sign out</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  settingsWrapper:{
  flex: 1,
  flexDirection: 'column',
  },
  header: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: '#21041b',
    paddingTop: 5
  },
  profile: {
    flexDirection: "row",
    marginTop:50,
    marginLeft:12,
  }
})