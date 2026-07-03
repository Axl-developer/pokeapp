import { useTrainerStore } from "@/store/trainer.store";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { images } from "../../constants/trainerImages";
import { useRestartTrainer } from "../../hooks/useRestartTrainer";
import { getAge } from "../../utils/getAge";
import { Favorite } from "./Favorite";


export const Profile = () => {

  const trainer = useTrainerStore( state => state.trainer );

  const { restartTrainer } = useRestartTrainer();

  return (
    <Animated.View
        entering={FadeInDown.duration(300)}
        exiting={FadeOutUp.duration(300)}
        style={style.container}>
        <View style={style.target}>
            <Image
                style={style.perfil}
                source={trainer?.sex ? images.male : images.female}
            />
            <Text style={style.name}>{trainer?.name}</Text>
            <Text style={style.city}>{trainer?.city}</Text>
            <Text style={style.region}>{trainer?.region}</Text>
            <Text style={style.age}>{getAge(trainer?.birthDate ?? '')} años</Text>
        </View>
        <Pressable style={style.buton} onPress={restartTrainer}>
            <Text style={style.butonText} >Cerrar sesión</Text>
        </Pressable>
        <Favorite />
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
        width: 200,
        height: 200,
        borderRadius: 9999,
        borderWidth: 3,
        borderColor: "#df6262",
    },
    name: {
        fontSize: 40,
        fontWeight:'400',
        marginBottom: 20,
    },
    city: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    region:{
        fontSize: 15,
    },
    age: {
        fontWeight: 'bold',
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
        fontSize: 18,
        fontWeight: '500',
    }
})