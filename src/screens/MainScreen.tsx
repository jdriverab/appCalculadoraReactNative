import React from 'react'
import {View, Text} from 'react-native'
import {styles} from '../theme/appTheme'
import BotonCalculadora from '../components/BotonCalculadora'

const MainScreen = () => {
    return (
        <View style={styles.containerCalculadora}>
            <Text style={styles.resultadoPequeno}>
                Hola
            </Text>
            <Text style={styles.resultado}>
                Hola
            </Text>


            <View style={styles.filas}>

                <BotonCalculadora texto={"C"} colorBoton={"#9B9B9B"}/>
                <BotonCalculadora texto={"+/-"} colorBoton={"#9B9B9B"}/>
                <BotonCalculadora texto={"del"} colorBoton={"#9B9B9B"}/>
                <BotonCalculadora texto={"/"} colorBoton={"#FF9427"}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"7"}/>
                <BotonCalculadora texto={"8"}/>
                <BotonCalculadora texto={"9"}/>
                <BotonCalculadora texto={"x"} colorBoton={"#FF9427"}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"4"}/>
                <BotonCalculadora texto={"5"}/>
                <BotonCalculadora texto={"6"}/>
                <BotonCalculadora texto={"-"} colorBoton={"#FF9427"}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora texto={"1"}/>
                <BotonCalculadora texto={"2"}/>
                <BotonCalculadora texto={"3"}/>
                <BotonCalculadora texto={"+"} colorBoton={"#FF9427"}/>

            </View>

            <View style={styles.filas}>

                <BotonCalculadora ancho texto={"0"}/>
                <BotonCalculadora texto={"."}/>
                <BotonCalculadora texto={"="} colorBoton={"#FF9427"}/>

            </View>
            
        </View>
    )
}

export default MainScreen
