import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
export default function Home () {
    
    let [text, setText] = useState("");

    function Calcular(){

        let texto = "O número é impar"
        let num = parseInt(text);
        if (num % 2 == 0){
            texto = "O número é par"
        }

        alert(texto);
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Número Impar ou Par</Text>

            <TextInput onChangeText={setText} style={styles.input} placeholder="Digite o número"></TextInput>

            <TouchableOpacity onPress={Calcular} style={styles.button}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFA500',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        margin: 30
    },

    input:{
        backgroundColor: '#FFF',
        fontSize: 20,
        marginTop: 15,
        padding: 15,
        borderRadius: 10,
        textAlign: 'center'
    },
    
    button:{
        backgroundColor: '#EE2C2C',
        padding: 15,
        marginTop: 40,
        borderRadius: 10,
        width: 100,
        alignItems: 'center'
    },

    buttonText:{
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold'
    }
});