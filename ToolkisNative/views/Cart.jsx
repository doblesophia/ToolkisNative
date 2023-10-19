import React from 'react'
import { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { eliminateOne, eliminateAll, restOne, addOne } from "../redux/actions/actionEliminateOne";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);
  console.log(cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    console.log(cart);
    if (cart.length > 0) {
      total = cart.reduce((acc, item) => acc + item?.total, 0);
    }
    console.log(total);
    setTotalPrice(total);
  }, [cart]);

  const [preferenceId, setPreferenceId] = useState(null);


  return (

      <ScrollView style={styles.scroll}>
        <View style={styles.contain}>
          <View style={styles.contain2}>
            <View>
              <Text style={styles.products}>Products</Text>
            </View>
            {cart.length > 0 && <FlatList
            data={cart}
            numColumns={1}
            keyExtractor={(item) => String(item._id)}
            renderItem={({ item }) => {
              return (
            <View style={styles.cardCarrito}>
              <View style={styles.img}>
                <Image
                  style={styles.photo}
                  source={{
                    uri: item.product.photo
                  }}
                />
              </View>
              <View>
                <Text style={styles.qty}>Qty.</Text>
              </View>
              <View style={styles.divmenos}>
                <TouchableOpacity style={styles.borderButton} onPress={() => dispatch(restOne(item.product?._id))} >
                  <Text style={styles.menos}> - </Text>
                </TouchableOpacity>
              </View>
              <Text>{item.quantity}</Text>
              <View style={styles.divmenos}>
                <TouchableOpacity style={styles.borderButton} onPress={() => dispatch(addOne(item.product?._id))}>
                  <Text style={styles.menos}> + </Text>
                </TouchableOpacity>
              </View>
              <Text>${item.product.price}</Text>
            </View>)}}/>}
          </View>
  
          <View style={styles.price}>
            <Text style={styles.pricetext}>TOTAL: ${totalPrice.toFixed(2)}</Text>
          </View>
  
          <View>
            <TouchableOpacity style={styles.addmore}>
              <Text style={styles.addmoretext}>Add more products</Text>
            </TouchableOpacity>
          </View>
  
          <View>
            <TouchableOpacity style={styles.clear}>
              <Text style={styles.cleartext}>Clear cart</Text>
            </TouchableOpacity>
          </View>
  
          <View>
            <TouchableOpacity style={styles.purchase}>
              <Text style={styles.purchasetext}>Complete purchase</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
    );
  }
  

const styles = StyleSheet.create({
  scroll:{
  backgroundColor:"#f0ebe3"
  }, 
  contain:{
  flex: 1,
  backgroundColor: '#f0ebe3',
  alignItems: 'center',
  justifyContent: 'center',
  },
  contain2:{
      flex:1,
  backgroundColor: '#f0ebe3',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 30,
  marginBottom: 30,
  
  },
  products:{
    fontWeight:"bold",
    fontSize: 20,
    marginBottom: 12,
  },
  cardCarrito:{
    backgroundColor: "#9ca3af",
    width: 320,
    height: 100,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  photo:{
    width: 60,
    height:60,
    marginLeft: 5,
    objectFit: "contain"
  },
  img:{
    width: 60,
    height:60,
  },
  borderButton:{
    borderWidth: 2,
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  menos:{
    
  },
  divmenos:{
    width:30,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },  
  price:{
    marginTop: 10,
    marginLeft: 130,
    marginBottom: 10
  },
  pricetext:{
    fontWeight: "bold",
    fontSize:15
  },
  qty:{
    marginLeft: 5
  },
  addmore:{
    backgroundColor: "#7D9D9C",
    marginTop: 10,
    height:35,
    width: 260,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  addmoretext:{
    color: "white",
    fontWeight: "bold"
  },
  clear:{
    backgroundColor: "#ef4444",
    marginTop: 10,
    height:35,
    width: 260,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cleartext:{
    color: "white",
    fontWeight: "bold"
  },
  purchase:{
    backgroundColor: "#7D9D9C",
    marginTop: 10,
    height:35,
    width: 260,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  purchasetext:{
    color: "white",
    fontWeight: "bold"
  }
})

export default Cart
