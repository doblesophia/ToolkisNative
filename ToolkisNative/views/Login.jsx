import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import login from '../redux/actions/actionsLogin'



const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const {user} = useSelector((store)=>store.userReducer)

    const signin = async () => {
        let data = { 
            email: email,
            password: password
        };
        dispatch(login(data))}

  return (
    <ScrollView style={styles.fondo}>
        <View style={styles.contain}>
            <View style={styles.welcomeback}>
                <Text style={styles.textoBienvenida}>
                    Welcome Back!
                </Text>
                <Text style={styles.textoBienvenida2}>
                    Sign in, and keep enjoying our shopping experience!s
                </Text>
            </View>
            <View style={styles.formulario}>
                <View>
                    <Text>
                        Email:
                    </Text>
                    <TextInput onChangeText={(text) => setEmail(text)} style={styles.textinput} />
                </View>
                <View>
                    <Text>
                        Password:
                    </Text>
                    <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.textinput}/>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonlogin} onPress={async()=>{
                await signin()
                if(user){
                    navigation.navigate("Home")
                } 
                }}>
                    <Text style={styles.textobotones}>Login</Text>
                </TouchableOpacity>
                <Text>You don't have an account? Create One!</Text>
                <TouchableOpacity style={styles.buttonlogin} onPress={()=>navigation.navigate('Register')}>
                    <Text style={styles.textobotones}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    fondo:{
        backgroundColor: '#f0ebe3'
    },
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
        height: 270,
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
export default Login
