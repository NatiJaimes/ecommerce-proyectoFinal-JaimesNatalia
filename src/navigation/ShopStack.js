import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductsByCategory from '../screens/ProductsByCategory';
import ItemDetail from '../screens/ItemDetail';
import Header from '../components/Header';

const ShopStack = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={({route}) => ({
        header: () => {
            return <Header title={
                route.name === "Home" ? "Categorías" :
                route.name === "ProductsByCategory" ? route.params.category :
                "Detalle"
                }/>
            }
        })}
    >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ProductsByCategory' component={ProductsByCategory}/>
        <Stack.Screen name='ItemDetail' component={ItemDetail}/>
    </Stack.Navigator>
  )
}

export default ShopStack