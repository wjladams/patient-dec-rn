import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Tcomb from 'tcomb-form-native';

const patient = Tcomb.struct({
    name: Tcomb.String,
    age: Tcomb.Number,
    gender: Tcomb.maybe(Tcomb.String),
});

const Form = Tcomb.form.Form;

export default class PatientForm extends React.Component {
    static navigationOptions = {
        title: 'Patient'
    };

    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        var value = this.refs.form.getValue();
        if (value != null) {
            const { navigate } = this.props.navigation;
            navigate('Info', {patient: value});
        }
    }

    render() {
        const options = {};

        return (
            <View style={styles.container}>
                <Form ref="form"
                    type={patient}
                    options={options}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save and Proceed</Text>
                </TouchableHighlight>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'flex-start',
        justifyContent: 'center'
    }
});