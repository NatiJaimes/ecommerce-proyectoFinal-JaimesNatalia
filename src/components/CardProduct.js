import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'
import { useNavigation } from '@react-navigation/native'

const CardProduct = ({product}) => {

    const {title,thumbnail,price,stock} = product
    const {width, height} = useWindowDimensions()
    const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("ItemDetail",{product})}>
        <Image style={styles.image} source={{uri:thumbnail}} resizeMode="cover"/>
        <View>
            <Text style={width > 550 ? styles.title : styles.titleMin}>{title}</Text>
            <View style={styles.containerText}>
                <Text style={width > 550 ? styles.text : styles.textMin}>Precio: USD ${price}</Text>
                <Text style={width > 550 ? styles.text : styles.textMin}>Stock: {stock}</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default CardProduct

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        margin:10,
        borderRadius:5,
        padding:10,
        flexDirection:"row",
        gap:10,
        alignItems:"center"
    },
    image:{
        minWidth:50,
        minHeight:50,
        maxWidth:150,
        maxHeight:150,
        width:"15vw",
        height:"15vw",
    },
    titleMin:{
        color:colors.secondary,
        fontSize:14,
        padding:5,
        width:"90%",
    },
    title:{
        color:colors.secondary,
        fontSize:18,
        padding:5,
    },
    containerText:{
        flexDirection:"row",
        gap:20,
        padding:10,
    },
    textMin:{
        color:colors.secondary,
        fontSize:12,
    },
    text:{
        color:colors.secondary,
        fontSize:16,
    }

})