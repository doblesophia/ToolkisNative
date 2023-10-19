
import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import banner1 from "../public/blackadn.png"
import festool from "../public/festool_orig.jpg"

const styles = StyleSheet.create({
    wrapper:{
        height:200,
        marginTop: 20,
        borderRadius:20
    },
    photo1:{
        height:200,
        width:360
    }
})

export default class SwiperComponent extends Component {
    render() {
      return (
        <Swiper style={styles.wrapper} showsButtons={false}>
          <View style={styles.slide1}>
            <Image style={styles.photo1} source={banner1}/>
          </View>
          <View style={styles.slide2}>
          <Image style={styles.photo1} source={festool}/>
          </View>
        </Swiper>
      )
    }
  }
   
  AppRegistry.registerComponent('myproject', () => SwiperComponent)
