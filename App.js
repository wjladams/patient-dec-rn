import React from 'react';
import Welcome from './components/WelcomeComponent';
import Info from './components/InfoComponent';
import PatientForm from './components/PatientFormComponent';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigatior = createStackNavigator({
  Home: {screen: Welcome},
  Info: {screen: Info},
  PatientForm: {screen: PatientForm}
});

const App = createAppContainer(AppNavigatior);

export default App;