import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Welcome extends React.Component {

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to Patient Decisions</Text>
                <Text style={styles.startButton} onPress = {() => navigate('Info')}>Start here</Text>
                <Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 50,
        paddingTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    startButton: {
        fontSize: 30,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});