import React, { useRef, useState  } from 'react'
import {View, Text} from 'react-native'
import {styles} from '../theme/appTheme'
import BotonCalculadora from '../components/BotonCalculadora'

enum Operadores {
    sumar, resta, multiplir, dividir
}

const MainScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
 
    const ultimaOperacion = useRef<Operadores>()

    const cancel = ():void => {setNumero('0'); setNumeroAnterior('0')} 

    const armarNumero = (numeroTexto:string):void => {

        const re = /\..*/ //RegExp busca puntos

        if(numero.match(re) === null ){
            numero === '0' ? 
                numeroTexto === '.' ? setNumero('0' + numeroTexto) : setNumero(numeroTexto)
            : 
                setNumero(numero + numeroTexto)
        } else if(numeroTexto !== '.'){
            setNumero(numero + numeroTexto)
        }   
    }

    const cambioSigno = ():void =>{
        if (numero !== '0'){
            numero.includes('-') ? setNumero( numero.replace('-','')) : setNumero('-' + numero)
        }
    }

    const borrarNumero = ():void => {
        var textoCortado = numero.slice(0,-1)
        numero.length == 1 || textoCortado == '-' ? setNumero('0') : setNumero(textoCortado)
    }

    const cambiarNumeroAnterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else {
            setNumeroAnterior(numero)
        } 
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumeroAnterior()
        ultimaOperacion.current = Operadores.dividir

    }

    const btnMultiplicar = () => {
        cambiarNumeroAnterior()
        ultimaOperacion.current = Operadores.multiplir
    }

    const btnSumar = () => {
        cambiarNumeroAnterior()
        ultimaOperacion.current = Operadores.sumar
    }

    const btnRestar = () => {
        cambiarNumeroAnterior()
        ultimaOperacion.current = Operadores.resta
    }

    // const suma = (num1:number, num2:number) => {
    //     setNumero(String(num1+num2))
    // }

    // const resultado = (operacion) => {
    //     operacion(Number(numero), Number(numeroAnterior))
    // }


    return (
        <View style={styles.containerCalculadora}>

            {(numeroAnterior !== '0') && (
                <Text style={styles.resultadoPequeno}>
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
                <BotonCalculadora texto={"="} colorBoton={"#FF9427"} accion={cancel}/>

            </View>
            
        </View>
    )
}

export default MainScreen
