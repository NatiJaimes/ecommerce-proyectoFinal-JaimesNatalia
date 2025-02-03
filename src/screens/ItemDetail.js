import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../globals/colors'
import { useGetProductCartQuery, usePostCartMutation } from '../services/cart'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Counter from '../components/Counter'
import { useState } from 'react'

//ProductDetail
const ItemDetail = ({route}) => {

  const [quantity,setQuantity] = useState(1)
  const navigation = useNavigation()
  const {product} = route.params
  const localId = useSelector(state => state.user.localId)
  const [triggerAddProduct] = usePostCartMutation()
  const {data:productCart} = useGetProductCartQuery({localId,productId:product.id})
  
  const increment = () => {
    const cartQuantity = productCart ? productCart.quantity : 0
    if(quantity >= (product.stock - cartQuantity )) return
    setQuantity(quantity + 1)
  }
  const decrement = () => {
    if(quantity === 1) return
    setQuantity(quantity - 1)
  }

  const  handleAddproduct = async () => {
    const cartQuantity = productCart ? productCart.quantity : 0
    if((product.stock - cartQuantity) === 0 ) return
    const newQuantity = quantity + cartQuantity
    const cartProduct = {
      ...product,
      quantity:newQuantity
    }
    const result = await triggerAddProduct({localId,cartProduct})
    setQuantity(1)
    navigation.navigate("CartStack")
  }

  return (
    <View>
      <Image source={{uri:product.thumbnail}} style={styles.image}/>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description} - Stock: {product.stock} Unidades.</Text>
      <Text style={styles.price}>USD ${product.price}</Text>
      <View style={styles.counter}>
        <Counter quantity={quantity} increment={increment} decrement={decrement}/>
      </View>
      <Pressable style={styles.button}  onPress={handleAddproduct}>
          <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>


    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:300,
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
    padding:"4%",
    width:"96%",

  },
  description:{
    fontSize:18,
    paddingHorizontal:15,
    paddingVertical:5,
    textAlign:"center",
  },
  price:{
    fontSize:26,
    fontWeight:"bold",
    paddingHorizontal:30,
    paddingVertical:25,
  },
  button:{
    backgroundColor:colors.primary,
    margin:15,
    padding:15,
    alignItems:"center",
    borderRadius:10,
  },
  textButton:{
    fontSize:22,
    color:colors.secondary,
  },
  counter:{
    alignItems:"center",
  }
})