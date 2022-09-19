import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions, StyleSheet,TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function HeaderScreen() {
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
    //const imageWidth = Object.entries(dimensions.window).width;

    return (
        <View>
            <Image
                resizeMode={"contain"}
                style={{
                    width: Object.entries(dimensions.window).width,
                    backgroundColor: Colors.lighter,
                    minHeight: 10,
                    maxHeight: 150
                }}
                source={require('../../Assets/images/AAC-Logo.png')}
            />
        </View>
    )
}