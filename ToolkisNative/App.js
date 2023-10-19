import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./views/Home.jsx"
import Products from './views/Products.jsx';
import Login from './views/Login.jsx';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from './views/Register.jsx';
import Favorites from './views/Favorites.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import Cart from './views/Cart.jsx';
import Details from './views/Details.jsx';


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={"Home"} component={Home}/>
        <Drawer.Screen name={"Products"} component={Products}/>
        <Drawer.Screen name={"Login"} component={Login}/>
        <Drawer.Screen name={"Register"} component={Register}/>
        <Drawer.Screen name={"Cart"} component={Cart}/>
        <Drawer.Screen name={"Details"} component={Details}/>
    </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

