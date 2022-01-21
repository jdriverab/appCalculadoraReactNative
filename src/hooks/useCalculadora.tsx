import { useRef, useState } from 'react';

enum Operadores {
    sumar, resta, multiplir, dividir
}

const useCalculadora = () => {

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
        const res = calcular()

        if(numero.endsWith('.')){
            numeroAnterior === '0' ? setNumeroAnterior(numero.slice(0,-1)) : setNumeroAnterior(res.slice(0,-1));
        }else {
            numeroAnterior === '0' ? setNumeroAnterior(numero) : setNumeroAnterior(res)
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


    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch(ultimaOperacion.current){

            case Operadores.sumar: 
                return `${num1 + num2}`
            break;

            case Operadores.resta:
                return `${num2 - num1}`
            break;
            case Operadores.dividir:

                return (num1 === 0 && num2 === 0 ? 'Error' : `${num2 / num1}`)

            break;
            case Operadores.multiplir:
                return `${num1 * num2}`
            break;

            default: 
                return `0`
            break
        }
    }
    
    const resultado = () => {
        const res = calcular()
        setNumero (res)
        setNumeroAnterior('0')
    }


  return {
    numero,
    numeroAnterior,
    cancel,
    armarNumero,
    cambioSigno,
    borrarNumero,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    calcular,
    resultado,
  }
};

export default useCalculadora;
