import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from '../theme/appTheme'

interface BotonesCalculadora {
    texto:string,
    // color?: "#2D2D2D" | "#FF9427",
    colorBoton?: string,
    ancho?: boolean,
    accion: (numeroTexto:string) => void,
}

// type color {
//     stri
// }

const BotonCalculadora = ({texto, colorBoton = "#2D2D2D", ancho = false, accion}:BotonesCalculadora) => {
  return (

    <TouchableOpacity onPress={()=> accion(texto)}>

        <View style={
                [styles.boton, {backgroundColor: colorBoton, width: (ancho ? 120 : 60)}]
            }>
            <Text style={
                [styles.botonTexto, {color: (colorBoton === "#9B9B9B" ? "black" : "white") }]
                }>
                    
                {texto}
            </Text>
        </View>

    </TouchableOpacity>
  )
};

export default BotonCalculadora;
