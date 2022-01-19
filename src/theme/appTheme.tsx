import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    fondo: {
        flex:1,
        backgroundColor:"black",
    },
    
    containerCalculadora: {
        flex:1,
        paddingHorizontal: "2%",
        // backgroundColor:"green",
        justifyContent:"flex-end",

    },

    resultado:{
        color:"white",
        fontSize:60,
        textAlign:"right",
    },

    resultadoPequeno: {
        color:"rgba(255 , 255 , 255 , 0.5)",
        fontSize:30,
        textAlign:"right",
    },
    filas:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:18,
        paddingHorizontal:10,

    },

    boton:{
        height:60,
        borderRadius:100,
        justifyContent:"center",
        marginHorizontal:"1%",
    },

    botonTexto:{
        textAlign:"center",
        padding:"3%",
        fontSize:30,
        fontWeight: "300",
    },
});