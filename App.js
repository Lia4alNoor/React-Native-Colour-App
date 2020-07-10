import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
export default function App() {

    //Use state is called hook , used hook functionality to upto our components
    //          toSave bg Colour and change colour => returns array. State value +function that changes the value
    const [backgroundColor, setBackgroundColor] = useState("blue");
    //State value => you want to chnchane iit 
    return (

        <View style={[styles.container, { backgroundColor }]}>

            <TouchableHighlight style={styles.button} onPress={() => setBackgroundColor("yellow")}>
                <View style={styles.row}>
                    <View style={[styles.sample, { backgroundColor: "yellow" }]}></View>
                    <Text style={styles.buttonText}>Yellow</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={() => setBackgroundColor("yellow")}>
                <View style={styles.row}>
                    <View style={[styles.sample, { backgroundColor: "yellow" }]}></View>
                    <Text style={styles.buttonText}>Yellow</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={() => setBackgroundColor("salmon")}>
                <View style={styles.row}>
                    <View style={[styles.sample, { backgroundColor: "salmon" }]}></View>
                    <Text style={styles.buttonText}>Salmon</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={() => setBackgroundColor("orange")}>
                <View style={styles.row}>
                    <View style={[styles.sample, { backgroundColor: "orange" }]}></View>
                    <Text style={styles.buttonText}>Orange</Text>
                </View>
            </TouchableHighlight>


            <TouchableHighlight style={styles.button} onPress={() => setBackgroundColor("blue")}>
                <View style={styles.row}>
                    <View style={[styles.sample, { backgroundColor: "blue" }]}></View>
                    <Text style={styles.buttonText}>Blue</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={() => setBackgroundColor("green")}>
                <View style={styles.row}>
                    <View style={[styles.sample, { backgroundColor: "green" }]}></View>
                    <Text style={styles.buttonText}>Green</Text>
                </View>
            </TouchableHighlight>


        </View>
    ); //Return 


}//App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 10,
        padding: 20,
        backgroundColor: "rgba(255,255,245,0.5)",
        borderRadius: 1000, //IF bradius > width/2|height 
        borderWidth: 3,
        textAlign: "center",
        alignSelf: "stretch",
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center"
    },
    sample: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderRadius: 15,
        borderTopColor: "pink"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"

    }


});
