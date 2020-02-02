import React, {Component} from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity}  from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"

export default class Collection extends Component {
  render() {
    return(
      <View style={styles.container}>
          <View style={styles.membership}>
          <AntDesign name="left" color="black" size={25} color="white" style={styles.back} onPress={() => {
                this.props.navigation.navigate("Menu");
              }}/>
            <Text style={{paddingTop: 20, fontSize: 20, color: 'white'}}>REGISTRATION FORM</Text>
          </View>
          <View style={styles.allNameContainer}>
            <View style={styles.name}>
              <Text>Name</Text>
              <TextInput style={styles.nameTextInput}/>
            </View>
            <View style={styles.surname}>
              <Text>Surname</Text>
              <TextInput style={styles.nameTextInput}/>
            </View>
          </View>
          <View style={styles.otherInformation}>
            <View style={styles.email}>
              <Text style={styles.nameArea}>Email</Text>
              <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.email}>
              <Text style={styles.nameArea}>Address</Text>
              <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.email}>
              <Text style={styles.nameArea}>Phone no</Text>
              <TextInput style={styles.textInput}/>
            </View>
          </View>
          <TouchableOpacity style={styles.opacity}>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
membership: {
borderWidth:0.1,
borderColor: '#21041b',
height: 80,
backgroundColor: '#21041b',
flexDirection: "row",
justifyContent: "space-evenly"
},
back: {
  marginTop: 20
},
allNameContainer: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "flex-start",
  marginBottom: 80
},
name: {
  margin: 15
},
surname: {
  marginTop: 15,
  marginLeft: 15
},
nameTextInput: {
  borderWidth: 1,
  borderColor: "#d2d5dd",
  width: 140,
  height: 35,
  borderRadius: 5,
  backgroundColor: "#d2d5dd"
},
otherInformation: {
  marginLeft: 15
},
textInput: {
  borderWidth: 1,
  borderColor: "#d2d5dd",
  width: 310,
  height: 35,
  borderRadius: 5,
  backgroundColor: "#d2d5dd",
  marginTop: 15
},
nameArea: {
marginTop: 15
},
opacity: {
 alignSelf: "center",
 marginTop: 40,
 borderWidth: 1,
 width: 120 ,
 height: 35,
 borderRadius: 7,
 backgroundColor: "#21041b",
 borderColor: "#21041b"
},
submit: {
  textAlign: "center",
  paddingTop: 5,
  color: 'white'
}
})