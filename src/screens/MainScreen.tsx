import React from 'react'
import { useState } from 'react'
import {View, Text} from 'react-native'
import {styles} from '../theme/appTheme'
import BotonCalculadora from '../components/BotonCalculadora'

const MainScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [valorSuma, setValorSuma] = useState('0w')

    const cancel = ():void => {
        setNumero('0')
    }

    const armarNumero = (numeroTexto:string):void => {


        numero === '0' ? 
            numeroTexto === '.' ?
                setNumero('0' + numeroTexto) 
                :
                setNumero(numeroTexto)
        : 
        setNumero(numero + numeroTexto)
    }

    const cambioSigno = ():void =>{
        if (numero !== '0'){
            numero.includes('-') ? setNumero( numero.replace('-','')) : setNumero('-' + numero)
        }
    }

    const borrarNumero = ():void => {
        var textoCortado = numero.slice(0, numero.length-1)

        numero.length == 1 || textoCortado == '-' ? setNumero('0') : setNumero(textoCortado)
    }

    // const suma = () => {
    //     setNumero( )
    // }


    return (
        <View style={styles.containerCalculadora}>
            <Text style={styles.resultadoPequeno}>
                {numeroAnterior}
            </Text>
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
                <BotonCalculadora texto={"/"} colorBoton={"#FF9427"} accion={cancel}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"7"} accion={armarNumero}/>
                <BotonCalculadora texto={"8"} accion={armarNumero}/>
                <BotonCalculadora texto={"9"} accion={armarNumero}/>
                <BotonCalculadora texto={"x"} colorBoton={"#FF9427"} accion={cancel}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"4"} accion={armarNumero}/>
                <BotonCalculadora texto={"5"} accion={armarNumero}/>
                <BotonCalculadora texto={"6"} accion={armarNumero}/>
                <BotonCalculadora texto={"-"} colorBoton={"#FF9427"} accion={cancel}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"1"} accion={armarNumero}/>
                <BotonCalculadora texto={"2"} accion={armarNumero}/>
                <BotonCalculadora texto={"3"} accion={armarNumero}/>
                <BotonCalculadora texto={"+"} colorBoton={"#FF9427"} accion={cancel}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora ancho texto={"0"} accion={armarNumero}/>
                <BotonCalculadora texto={"."} accion={armarNumero}/>
                <BotonCalculadora texto={"="} colorBoton={"#FF9427"} accion={cancel}/>

            </View>
            
        </View>
    )
}

export default MainScreen
