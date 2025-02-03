import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Orders from "../screens/Orders";
import Header from "../components/Header";
import ProductsByOrder from "../screens/ProductsByOrder";

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator screenOptions={({route}) => ({
        header: () => { return <Header title="Ordenes"/> }
    })}>
        <Stack.Screen name='Orders' component={Orders}/>
        <Stack.Screen name='ProductsByOrder' component={ProductsByOrder}/>
    </Stack.Navigator>
  )
}

export default OrdersStack