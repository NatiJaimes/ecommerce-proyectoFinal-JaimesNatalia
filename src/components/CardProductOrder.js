import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'

const CardProductOrder = ({product, total}) => {

    console.log(product)
    const {title,thumbnail,price, quantity} = product

  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image style={styles.image} source={{uri:thumbnail}}/>
        </View>
        <View style={styles.containerText}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.containerPrice}>
                <Text style={styles.text}>Precio: USD ${price}</Text>
                <Text style={styles.text}>Cantidad: {quantity}</Text>
            </View>
        </View>
    </View>
  )
}

export default CardProductOrder

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colors.primary,
        marginVertical:5,
        borderRadius:5,
        padding:15,
    },
    image:{
        width:70,
        height:70,
    },
    containerText:{
        width:"80%",
        marginLeft:10,
    },
    title:{
        color:colors.secondary,
        fontSize:17,
        padding:5,
    },
    containerPrice:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        color:colors.secondary,
        fontSize:12,
        paddingRight:10,
        marginHorizontal:5,
        marginVertical:5,
    }
})