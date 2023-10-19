import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import allProducts from '../redux/actions/actionProducts';
import allCategories from '../redux/actions/actionCategories';
import actionCart from '../redux/actions/actionCart';
import { useNavigation } from '@react-navigation/native';



const Products = () => {
  const dispatch = useDispatch();
  const { allItems, category, subcategories } = useSelector((store) => store.itemsReducer);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([])
  const { cart } = useSelector((store) => store.cartReducer);
  const navigation = useNavigation()

  const goToProductDetail = (product) => {
    navigation.navigate('Details', { product });
  };

  const handleCart = (id)=>{
    const itemCart = allItems.find(item => item._id === id)
    dispatch(actionCart(itemCart))
  }
  useEffect(() => {
    if (allItems.length === 0) {
      dispatch(allProducts());
    }
  }, []);

  useEffect(() => {
    if (category.length === 0) {
      dispatch(allCategories());
    }
  }, []);

  useEffect(() => {
    if (subcategories.length === 0) {
      dispatch(allCategories());
    }
  }, []);

  const filterOption = (filterValue, option) => {
    return option.name.toLowerCase().includes(filterValue.toLowerCase());
  };
  const onFilterChange = (filterValue) => {
    setFilteredCategories(category.filter((category) => filterOption(filterValue, category)));
  };

  useEffect(() => {
    // Filtrar productos cuando cambie el término de búsqueda, la categoría o la subcategoría
    const filtered = allItems.filter((product) => {
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSubcategory = selectedSubcategory === '' || product.subcategory.toLowerCase() === selectedSubcategory.toLowerCase();

      return matchesSearchTerm && matchesCategory && matchesSubcategory;
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedSubcategory, allItems]);

  return (
    <View style={styles.contain}>
      <View style={styles.contain2}>
        <View style={styles.inputFiltros}>
          <View>
            <Text style={styles.titulo}>Search your product</Text>
            <TextInput
              style={styles.input}
              placeholder="        Cordless Welder"
              onChangeText={(text) => setSearchTerm(text)}
            />
          </View>
          <View style={styles.primerSelect}>
            <SelectDropdown
              data={category}
              onSelect={(selectedCategory, index) => {
                
                setSelectedCategory(selectedCategory.name)
            }}
              buttonTextAfterSelection={(selectedCategory) => {
                
                return selectedCategory.name;
                
              }}
              rowTextForSelection={(item, index) => {
                return item.name;
              }}
              defaultButtonText="Category"
              filterOption={filterOption}
            onFilterChange={onFilterChange}
            />
          </View>
          <View style={styles.segundoSelect}>
            <SelectDropdown
              data={subcategories}
              onSelect={(selectedSubcategory, index) => setSelectedSubcategory(selectedSubcategory.name_sub)}
              buttonTextAfterSelection={(selectedSubcategory) => {
                return selectedSubcategory.name_sub;
              }}
              rowTextForSelection={(item, index) => {
                return item.name_sub;
              }}
              defaultButtonText="Subcategories"
            />
          </View>
        </View>
        <FlatList
          data={filteredProducts}
          numColumns={1}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Image style={styles.picture} source={{ uri: item.photo }} />
                <View style={styles.details.toLocaleString("en-US", { style: "currency", currency: "USD" })}>
                  <Text numberOfLines={3} style={styles.descriptions}>
                    {item.description}
                  </Text>
                </View>

                <Text style={styles.price}>${item.price}</Text>
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
            );
          }}
        />
      </View>
    </View>
  );
};





const styles = StyleSheet.create({
    
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
    inputFiltros: {
        width: 300,
        height: 250,
        backgroundColor: "#0e4355b2",
        alignItems:"center",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    titulo:{
        color: "white",
        textAlign: "center",
        paddingBottom: 10,
        fontWeight:"bold",
        fontSize: 15
    },
    input:{
        height:30,
        width:180,
        backgroundColor: "white",
        marginBottom: 10
    },
    segundoSelect: {
        marginTop:10
    },
    card:{
        height: 500,
        width: 300,
        backgroundColor: "#0e4355b2",
        marginTop: 20,
        borderRadius: 20,
        marginBottom:30,
        alignItems: "center"
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
    }
})

export default Products
