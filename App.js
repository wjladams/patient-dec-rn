import React from 'react';
import Welcome from './components/Welcome';
import Info from './components/Info';
import PatientForm from './components/PatientForm';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigatior = createStackNavigator({
  Home: {screen: Welcome},
  Info: {screen: Info},
  PatientForm: {screen: PatientForm}
});

const App = createAppContainer(AppNavigatior);

export default App;