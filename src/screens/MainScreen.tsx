import React, { useRef, useState } from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import BotonCalculadora from '../components/BotonCalculadora';
import useCalculadora from '../hooks/useCalculadora';

const MainScreen = () => {

    const {numero, numeroAnterior, cancel, armarNumero, cambioSigno, borrarNumero, btnDividir, btnMultiplicar, btnSumar, btnRestar, resultado} = useCalculadora()

    return (
        <View style={styles.containerCalculadora}>

            {(numeroAnterior !== '0') && (
                <Text style={styles.resultadoPequeno} 
                numberOfLines={1}
                adjustsFontSizeToFit>
                    {numeroAnterior}
                </Text>)
            }
            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>


            <View style={styles.filas}>

                <BotonCalculadora texto={"C"} colorBoton={"#9B9B9B"} accion={cancel}/>
                <BotonCalculadora texto={"+/-"} colorBoton={"#9B9B9B"} accion={cambioSigno}/>
                <BotonCalculadora texto={"del"} colorBoton={"#9B9B9B"} accion={borrarNumero}/>
                <BotonCalculadora texto={"/"} colorBoton={"#FF9427"} accion={btnDividir}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"7"} accion={armarNumero}/>
                <BotonCalculadora texto={"8"} accion={armarNumero}/>
                <BotonCalculadora texto={"9"} accion={armarNumero}/>
                <BotonCalculadora texto={"x"} colorBoton={"#FF9427"} accion={btnMultiplicar}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"4"} accion={armarNumero}/>
                <BotonCalculadora texto={"5"} accion={armarNumero}/>
                <BotonCalculadora texto={"6"} accion={armarNumero}/>
                <BotonCalculadora texto={"-"} colorBoton={"#FF9427"} accion={btnRestar}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"1"} accion={armarNumero}/>
                <BotonCalculadora texto={"2"} accion={armarNumero}/>
                <BotonCalculadora texto={"3"} accion={armarNumero}/>
                <BotonCalculadora texto={"+"} colorBoton={"#FF9427"} accion={btnSumar}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora ancho texto={"0"} accion={armarNumero}/>
                <BotonCalculadora texto={"."} accion={armarNumero}/>
                <BotonCalculadora texto={"="} colorBoton={"#FF9427"} accion={resultado}/>

            </View>
            
        </View>
    )
}

export default MainScreen
