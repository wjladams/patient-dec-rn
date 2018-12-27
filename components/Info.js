import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Info extends React.Component {
    static navigationOptions = {
        title: 'Info',
        headerLeft: null
    };

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            patient: navigation.getParam('patient')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome to WeDecide</Text>
                    <Text style={styles.title}>{this.state.patient.name}</Text>
                </View>
                <Swiper showsButtons={true} loop={false}>
                    <WebView style={styles.WebView}
                        source={{ uri: 'file:///android_asset/html/1.html' }}
                        scalesPageToFit />
                    <WebView
                        source={{ uri: 'file:///android_asset/html/2.html' }}
                        scalesPageToFit />
                    <WebView
                        source={{ uri: 'file:///android_asset/html/3.html' }}
                        scalesPageToFit />
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    webView: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    }
});

