import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { colors } from '../globals/colors';

const Search = ({onChangeKeyword}) => {

    const [textInput,setTextInput] = useState("")
    const [error,setError] = useState("")

    const search = () => {
        const regex = /[+\-*/%@#&]/
        if(regex.test(textInput)){
            return setError("Caracter no válido")
        }
        setError("")
        onChangeKeyword(textInput)
    }

    const removeSearch = () => {
        onChangeKeyword("")
        setTextInput("")
        setError("")
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerInput}>
            <TextInput value={textInput} style={styles.input} placeholder='Buscar' placeholderTextColor={"black"} onChangeText={(text)=>setTextInput(text)}/>
            <Pressable style={styles.button} onPress={search}>
                <Feather name="search" size={25} color={colors.secondary} />
            </Pressable>
            <Pressable style={styles.button} onPress={removeSearch}>
                <MaterialCommunityIcons name="window-close" size={25} color={colors.secondary} />
            </Pressable>
        </View>
        <Text style={styles.error}>{error ? error : ""}</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingTop:5,
    },
    containerInput:{
        backgroundColor:"#00a6fb",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    input:{
        backgroundColor:"#E2EAFC",
        borderRadius:4,
        margin:5,
        paddingLeft:10,
        flex:1,
    },
    button:{
        margin:5,
    },
    error:{
        color:"red",
        fontWeight:"bold",
        marginLeft:10,
    }
})