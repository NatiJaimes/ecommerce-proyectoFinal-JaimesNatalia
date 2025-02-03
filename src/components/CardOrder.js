import { StyleSheet, Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../globals/colors';

const CardOrder = ({order}) => {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>{order.createdAt}</Text>
                <Text style={styles.text}>Total: USD ${order.total}</Text>
            </View>
            <Feather name="search" size={28} color={colors.secondary} />
        </View>
    )
}

export default CardOrder

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colors.primary,
        margin:10,
        padding:20,
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:5
    },
    text:{
        color:colors.secondary,
        fontSize:17,
        paddingVertical:5,
    }
})