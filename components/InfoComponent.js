import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Info extends React.Component {
    static navigationOptions = {
        title: 'Info'
    };

    render() {
        return (
            <Swiper showsButtons={true} loop={false}>
                 <WebView
                        source={{ uri: 'file:///android_asset/html/1.html' }}
                        scalesPageToFit />
                    <WebView
                        source={{ uri: 'file:///android_asset/html/2.html' }}
                        scalesPageToFit />
                    <WebView
                        source={{ uri: 'file:///android_asset/html/3.html' }}
                        scalesPageToFit />
            </Swiper>
        );
    }
}

