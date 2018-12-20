import React from 'react';
import Welcome from './components/WelcomeComponent';
import Info from './components/InfoComponent';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigatior = createStackNavigator({
  Home: {screen: Welcome},
  Info: {screen: Info}
});

const App = createAppContainer(AppNavigatior);

export default App;