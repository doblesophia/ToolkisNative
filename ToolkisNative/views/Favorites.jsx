import React from 'react'
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

const Favorites = () => {
  return (
   <ScrollView>
    <View style={styles.contain}>
        <View style={styles.contain2}>
            <Text style={styles.favoritetitle}>Favorites</Text>
        </View>
        <View style={styles.product}>
            <View style={styles.picture}>
                <Image style={styles.picture2} source={{uri: "https://oviedo.cl/pub/media/catalog/product/cache/3382ce866297830d1cac6148906dcaa1/7/2/72112.jpg"}}/>
            </View>
            <View style={styles.info}>
                <Text>Name of the product</Text>
                <Text>$Price</Text>
                <TouchableOpacity style={styles.delete}>
                    <Text>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addCart}>
                    <Text>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
   </ScrollView>
  )
}

export default Favorites
const styles = StyleSheet.create({
    
    contain:{
        flex: 1,
    backgroundColor: '#f0ebe3',
    alignItems: 'center',
    justifyContent: 'center',
    },
    contain2:{
        flex: 1,
    backgroundColor: '#f0ebe3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
    },
    favoritetitle:{
        color:"black",
        fontSize: 20,
        fontWeight: "bold"
    },
    product:{
        width: "100%",
        height: 250,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#0e4355b2"
        
        
    },
    picture:{
        width: "50%",
        height:200,
        marginTop: 15,
        justifyContent: "center",
        alignItems:"center"
    },
    picture2:{
        width:"75%",
        height:"75%"
    },
    info:{
        width: "50%",
        height:200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        

    },
    delete:{
        backgroundColor: "red",
        height:25,
        borderRadius: 8,
        width: 100
    },
    addCart:{
        backgroundColor:"green",
        height: 25,
        width: 100,
        borderRadius: 8
    }
})