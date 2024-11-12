import React from "react";
import { View } from "react-native";
import { WebView } from 'react-native-webview';
import { globalStyles } from "../styles/styles";

const WebScreen = ({imageUrl}) => {
    console.log(imageUrl);
    return(
        <View style= {globalStyles.containerImage}>
            <WebView
                originWhitelist={['*']}
                allowFileAccessFromFileURLs={true}
                allowUniversalAccessFromFileURLs={true}
                source={{ url: imageUrl, headers: { 'Cache-Control': 'no-cache' }}}
            />
        </View>
    )
}


export default WebScreen; 