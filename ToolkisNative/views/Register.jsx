import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


const Register = () => {
    const navigation = useNavigation()
  return (
    <ScrollView>
      <View style={styles.contain}>
      <View style={styles.welcomeback}>
                <Text style={styles.textoBienvenida}>
                    Welcome!
                </Text>
                <Text style={styles.textoBienvenida2}>
                    Sign up, and unlock full acces to our app!
                </Text>
            </View>
            <View style={styles.formulario}>
                <View>
                    <Text>
                        Email:
                    </Text>
                    <TextInput style={styles.textinput}/>
                </View>
                <View>
                    <Text>
                        Password:
                    </Text>
                    <TextInput style={styles.textinput}/>
                </View>
                <View>
                    <Text>
                        Photo (Optional):
                    </Text>
                    <TextInput style={styles.textinput}/>
                </View>
                <View>
                    <Text>
                        Phone Number (Optional):
                    </Text>
                    <TextInput style={styles.textinput}/>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonlogin}>
                    <Text style={styles.textobotones}>Register</Text>
                </TouchableOpacity>
                <Text>You already have an account? Sign up!</Text>
                <TouchableOpacity style={styles.buttonlogin} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.textobotones} >Login</Text>
                </TouchableOpacity>
            </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    
  contain:{
      flex: 1,
  backgroundColor: '#f0ebe3',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 30
  },
  welcomeback:{
      backgroundColor: "#053b50",
      width:320,
      height: 150,
      marginTop: 30,
      borderRadius: 20,
      justifyContent:"space-evenly",
      alignItems: "center"
  },
  textoBienvenida:{
      color: "white",
      fontSize: 20,
      fontWeight: "bold",

  },
  textoBienvenida2:{
      color: "white",
      textAlign: "center",
      paddingBottom: 10
  },
  formulario:{
      width: 320,
      height: 350,
      marginTop: 20,
      alignItems: "center",
      justifyContent: "space-evenly",
      borderRadius: 20
  },
  textinput:{
      height: 30,
      backgroundColor: "white",
      width: 250,
      marginTop: 10     
  },
  buttons:{
      width: 320,
      height: 220,
      
      alignItems: "center",
      display:"flex",
      justifyContent: "space-evenly"
  },
  buttonlogin: {
      backgroundColor: "#7D9D9C",
      width: 150,
      height: 40,
      alignItems: "center",
      display: "flex",
      justifyContent:"center",
      borderRadius: 10
  },
  textobotones:{
      color:"white",
      fontWeight: "bold"
  }
})

export default Register
