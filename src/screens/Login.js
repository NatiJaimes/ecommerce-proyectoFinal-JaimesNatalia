import {useState} from 'react'
import { View, Text ,StyleSheet, Pressable} from 'react-native'
import { colors } from '../globals/colors'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useLoginMutation } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'
import { loginSchema } from '../validations/loginSchema'
import { deleteSesion, insertSession } from '../config/dbSqlite'

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const navigation = useNavigation()
  const [triggerLogin] = useLoginMutation()
  const dispatch = useDispatch()
  const onSubmit = async () => {
    try {
        loginSchema.validateSync({email,password})
        const response = await triggerLogin({email,password})
        const user = {
            email:response.data.email,
            idToken:response.data.idToken,
            localId:response.data.localId,
        }
        dispatch(setUser(user))
        await deleteSesion()
        await insertSession(user.localId,user.email,user.idToken)
    } catch (error) {
        switch(error.path){
            case "email":
                setEmailError(error.message)
                setPasswordError("")
                break
            case "password":
                setPasswordError(error.message)
                setEmailError("")
                break
        }
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Ingresar</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
            error={emailError}
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={passwordError}
          />
          <SubmitButton onPress={onSubmit} title="Ingresar"/>
          <View style={styles.containerSignup}>
            <Text style={styles.sub}>¿No tienen una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate("Signup")} >
              <Text style={styles.subLink}>Registrarme</Text>
            </Pressable>
          </View>
      </View>
    </View>
  )
}
export default Login
const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"90%",
      backgroundColor:colors.primary,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:22,
      color:colors.secondary,
    },
    sub:{
        fontSize:14,
        color:colors.secondary,
    },
    subLink:{
        fontSize:14,
        color:colors.secondary,
        fontStyle:"italic",
        textDecorationLine:"underline",
    },
    containerSignup:
    {
        flexDirection:"row",
        gap:10,
        marginTop:5
    }
})