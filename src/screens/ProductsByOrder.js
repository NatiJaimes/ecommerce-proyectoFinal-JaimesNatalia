import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CardProductOrder from '../components/CardProductOrder'
import { colors } from '../globals/colors'

const ProductsByOrder = ({route}) => {

    const {order} = route.params
    console.log(order)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos del Pedido</Text>
      <FlatList
        data={order.products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (<CardProductOrder product={item} total={order.total}/>)}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: USD ${order.total}</Text>
      </View>
    </View>
  )
}

export default ProductsByOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      title: {
        fontSize: 24,
        marginBottom: 10,
      },
      totalText: {
        fontSize: 20,
        fontWeight: 'bold',
      },


})