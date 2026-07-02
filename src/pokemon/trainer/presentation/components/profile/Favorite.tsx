import { StyleSheet, Text, View } from "react-native"


export const Favorite = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Favoritos</Text>
    </View>
  )
}


const style = StyleSheet.create({
    container:{
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
    },
})