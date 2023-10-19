import React from 'react'
import { useRoute } from '@react-navigation/native';

import { Image, ScrollView, StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux'


const Details = () => {
    const route = useRoute();
    const { product } = route.params;

  return (
    <ScrollView style={styles.scroll}>
        <View style={styles.contain}>
            <View style={styles.contain2}>
                <View style={styles.nameview}>
                    <Text style={styles.name}>
                        {product.name}
                    </Text>
                </View>
                <View style={styles.picture}>
                    <Image style={styles.photo} source={{uri: product.photo}}/>
                </View>
                <View style={styles.details}>
                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                </View>
                <Text style={styles.price}>
                    ${product.price}
                </Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: '#f0ebe3'
    },
    contain:{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    contain2:{
        height: 650,
        width: 320,
        backgroundColor: "#0e4355b2",
        marginTop: 30,
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    picture:{
        width: 280,
        height: 200,
        objectFit: "contain",
        marginLeft: 30,
        marginTop: 30
        
    },
    photo:{
        width:250,
        height: 250,
        objectFit: "contain",
        borderRadius: 20,
        marginBottom: 10
    },
    details:{
        width: 280,
        height: 200,
        marginLeft: 30,
        marginTop: 80,
        textAlign: "justify"
    },
    description: {
        color: "white",
    },
    nameview:{
        marginTop:10
    },
    name:{
        color:"white",
        fontSize:20,
        fontWeight: "bold"
    },
    price:{
        marginTop: 25,
        color:"white",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 180
    }
})

export default Details
