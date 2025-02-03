import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';



import { colors } from '../globals/colors';

const TabBarIcon = ({text, icon}) => {
  return (
    <View style={styles.container}>
        <Ionicons name={icon} size={24} color={colors.secondary} />
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        width:60,
        alignItems:"center",
    },
    text:{
        color:colors.secondary,
    }
})