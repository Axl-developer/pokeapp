import { useTrainerStore } from "@/store/trainer.store";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { useRestartTrainer } from "../hooks/useRestartTrainer";


export const Perfil = () => {

  const trainer = useTrainerStore( state => state.trainer );

  const { restartTrainer } = useRestartTrainer();

  return (
    <Animated.View
        entering={FadeInDown.duration(300)}
        exiting={FadeOutUp.duration(300)}
        style={style.container}>
        <View style={style.target}>
            <View style={style.perfil}/>
            <Text style={style.name}>{trainer?.name}</Text>
            <Text style={style.city}>{trainer?.city}</Text>
            <Text style={style.city}>{trainer?.age} años</Text>
        </View>
        <Pressable style={style.buton} onPress={restartTrainer}>
            <Text style={style.butonText} >Cerrar sesión</Text>
        </Pressable>
        <Text>Favoritos</Text>
    </Animated.View>
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    target: {
        paddingTop: 100,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    perfil: {
        backgroundColor:'grey',
        borderRadius: '50%',
        marginBottom: 30,
        height: 150,
        width: 150,
    },
    name: {
        fontSize: 40,
        fontWeight:'400',
        marginBottom: 20,
    },
    city: {
        fontWeight: 'bold'
    },
    buton: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    butonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
})