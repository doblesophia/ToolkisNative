import React, {useEffect} from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import Carousel from '../components/Carousel'
import christmas from "../public/pexels-laura-james-6102053.jpg"
import { useSelector } from 'react-redux'
import actionCart from '../redux/actions/actionCart'
import pictureShipping from "../public/shipping.png"
import creditCard from "../public/payment.png"






const Home = () => {


  return (
    <ScrollView style={styles.scroll}> 
      <View style={styles.contain}>
        <View style={styles.contain2}>
          <View style={styles.logo}>
            <Text style={styles.t}>T</Text>
            <Text style={styles.oolki}>oolki</Text>
            <Text style={styles.s}>s.</Text>
          </View>
          <Carousel/>
          <View style={styles.christmass}>
            <ImageBackground style={styles.photonavidad} source={christmas}>
              <View style={styles.sales}>
                <Text style={styles.salesText}>Christmas Sales</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.name}>Paint Can Opener</Text>
                <Image style={styles.picture} source={{ uri: "https://cdn.paintsupply.com/wp-content/uploads/2016/06/022384060203.jpg" }} />
                <View style={styles.details}>
                  <Text numberOfLines={3} style={styles.descriptions}>
                  Convenient paint can opener tool for easy access to paint cans.
                  </Text>
                </View>

                <Text style={styles.price}>$3</Text>
                <TouchableOpacity style={styles.buttonProduct} onPress={() => goToProductDetail(item)}>
                  <Text style={styles.textobutton}>See more</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonProduct} onPress={()=>{
                    if (!cart.find(item=> item._id === item._id)) {
                       handleCart(item?._id);
                       navigation.navigate("Cart")
                    }
                   }} >
                  <Text style={styles.textobutton}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        <View style={styles.shipping}>
           <Text style={styles.freeshipping}>Free shipping</Text>
           <View style={styles.rounded}>
           <Image style={styles.pictureshipping} source={pictureShipping}/>
           </View>
           <Text style={styles.door}>At your door in 24hs or less!</Text>            
        </View>
        <View style={styles.shipping}>
           <Text style={styles.freeshipping}>We accept </Text>
           <View style={styles.rounded}>
           <Image style={styles.pictureshipping} source={creditCard}/>
           </View>
           <Text style={styles.door}>Credit, debit, PayPal and cash</Text>            
        </View>
        </View>
      </View>
    </ScrollView>
    
  )
}
const styles=StyleSheet.create({
  scroll:{
    backgroundColor: '#f0ebe3'
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
marginTop: 30
},
logo:{
  width: 360,
  height: 200,
  backgroundColor: "#053b50",
  display:"flex",
  flexDirection: "row",
  alignItems:"center",
  justifyContent: "center",
  borderRadius: 10
},
t:{
color: "#eea221",
fontSize: 120,
fontWeight: "900",

},
oolki:{
color:"white",
fontSize:80,
marginTop:33,
marginLeft: -25
},
s:{
  color:"#eea221",
  fontSize:80,
  marginTop: 33
},
christmass:{
  marginTop: 30,
  width:360,
  height:600,
  display:"flex",
  flexDirection: "column",
  justifyContent:"center",
  alignItems:"center",
  marginBottom:30
},
photonavidad:{
  width:360,
  height:630
},
sales:{
  height: 100,
  display: "flex",
  justifyContent: "center",
  alignItems:"center"
  
},
salesText:{
  color:"white",
  fontWeight:"bold",
  fontSize:30
},
card:{
  height: 500,
  width: 300,
  backgroundColor: "#0e4355b2",
  borderRadius: 20,
  marginBottom:30,
  alignItems: "center",
  marginLeft:30
},
name:{
  color:"white",
  fontSize: 15,
  margin: 15,
  fontWeight: "bold"
  
},
picture:{
  width: 270,
  height: 220,
  borderRadius: 10,
  paddingBottom: 30,
},
price:{
  display: "flex",
  textAlign: "right",
  marginBottom: 15,
  marginTop: 5,
  paddingLeft: 150,
  fontWeight: "bold",
  color: "white"
},
buttonProduct:{
  width: 270,
  height:30,
  backgroundColor: "#053b50",
 borderRadius: 10,
 margin:5
},
textobutton:{
  color:"white",
  textAlign: "center",
  fontWeight: "bold",
},
details:{
  marginTop: 15,
  marginBottom: 10,
},
descriptions:{
  color:"white",
  padding: 5
},
shipping:{
  width: 360,
  height: 300,
  backgroundColor: "#053b50",
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  marginBottom: 20

},
freeshipping:{
  color:"white",
  fontSize: 30,
  marginBottom:20
},
door:{
  color:"white",
  fontSize:23,
  marginTop: 20
},
pictureshipping:{
  height:100,
  width:100
},
rounded:{
  backgroundColor:"white",
  height:120,
  width:120,
  borderRadius: 100,
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}
})

export default Home