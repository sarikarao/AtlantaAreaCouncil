import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions, StyleSheet,TouchableOpacity } from 'react-native';



export default function LandingScreen() {
    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");
    const [dimensions, setDimensions] = useState({ window, screen });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            "change",
            ({ window, screen }) => {
                setDimensions({ window, screen });
            }
        );
        return () => subscription?.remove();
    });
    //const dimensions = Dimensions.get('window');

    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Image 
                resizeMode={"contain"}
                source={require('../../Assets/images/bert-adams-logo.png')}
                style={{
                    width: Object.entries(dimensions.window).width,
                    paddingHorizontal: 10,
                    height: 50,
                    backgroundColor: '#fff'
                }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    btn: {
        backgroundColor: 'transparent'
    }
});