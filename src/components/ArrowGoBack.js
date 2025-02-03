import { StyleSheet, Pressable } from 'react-native'
import { colors } from '../globals/colors';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ArrowGoBack = () => {

    const navigation = useNavigation()

  return (
            <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color={colors.secondary} />
            </Pressable>
  )
}

export default ArrowGoBack

const styles = StyleSheet.create({
    goBack:{
        position:"absolute",
        left:15,
      }
})