import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form() {
    const [height, setHeight] = useState(null)


    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="EX. 1.75" keyboardType="numeric" />
                <Text>Peso</Text>
                <TextInput placeholder="EX. 65" keyboardType="numeric" />
                <Button title="calcular IMC" />
            </View>

            <ResultIMC messageResultImc={messageIMC} resultImc={imc} />
        </View>
    )
}