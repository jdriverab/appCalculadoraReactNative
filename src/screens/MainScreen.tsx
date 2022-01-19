import React from 'react'
import {View, Text} from 'react-native'
import {styles} from '../theme/appTheme'

const MainScreen = () => {
    return (
        <View style={styles.containerCalculadora}>
            <Text style={styles.resultado}>
                Hola
            </Text>
            <Text style={styles.resultadoPequeno}>
                Hola
            </Text>


            <View>

                <View style={styles.boton}>
                    <Text style={styles.botonTexto}>1</Text>
                </View>

            </View>
            
        </View>
    )
}

export default MainScreen
