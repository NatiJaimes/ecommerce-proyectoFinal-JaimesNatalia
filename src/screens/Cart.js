import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CardCartProduct from '../components/CardCartProduct'
import { colors } from '../globals/colors'
import { usePostOrdersMutation } from '../services/orders'
import { useSelector } from 'react-redux'
import { useGetCartQuery, useDeleteCartMutation } from '../services/cart'
import { useEffect, useState } from 'react'
import EmptyListComponent from '../components/EmptyListComponent'
import LoadingSpinner from '../components/LoadingSpinner'
import { useNavigation } from '@react-navigation/native'

//container puede ir en componente aparte
const Cart = () => {
    
    const navigation = useNavigation()
    const [triggerPost] = usePostOrdersMutation()
    const [triggerDeleteCart] = useDeleteCartMutation()
    const localId = useSelector(state => state.user.localId)
    const {data:cart, isLoading} = useGetCartQuery({localId})
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        if(cart){
        setTotal(cart.reduce((acc,item) => acc + item.price * item.quantity ,0 ))
        }
    },[cart])

    const confirmCart = () => {
        const createdAt = new Date().toLocaleString()
        const order = {
        products:cart,
        createdAt,
        total
        }
        triggerPost({order,localId})
        triggerDeleteCart({localId})
        navigation.navigate("OrdersStack")
    }

    if(isLoading) return <LoadingSpinner/>
    if(!cart) return <EmptyListComponent message="No hay productos en el carrito"/>

    return (
        <View style={styles.container}>
        <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CardCartProduct product = {item}/>}
            />
            <View style={styles.containerTotal}>
                <Text style={styles.text}>Total: USD ${total}</Text>
                <Pressable style={styles.button} onPress={confirmCart}>
                    <Text style={styles.buttonText}>Finalizar Compra</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:"relative",
    },
    containerTotal:{
        backgroundColor:colors.secondary,
        width:"100%",
        padding:15,
        justifyContent:"space-around",
        position:"absolute",
        bottom:0
    },
    text:{
        fontSize:16,
        fontWeight:"bold",
        paddingBottom:15,
        paddingHorizontal:15,
    },
    button:{
        backgroundColor:colors.primary,
        padding:15,
        alignItems:"center",
        borderRadius: 5,
    },
    buttonText:{
        fontSize:20,
        color: colors.secondary,
    }
})