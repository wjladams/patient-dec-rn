import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Info extends React.Component {
    static navigationOptions = {
        title: 'Info'
    };

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    /*
    componentDidMount() {
        const content = MediaLibrary.getAssetsAsync();
        this.setState(YAML.parse(content));
    }*/

    render() {
        return (
            <Swiper showsButtons={true} loop={false} index={0}>
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