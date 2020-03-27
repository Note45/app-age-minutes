import { createAppContainer } from 'react-navigation';
import  { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';

const Pages =  createStackNavigator({
  Home: {
    screen: Main
  },
});

const Routes = createAppContainer(Pages);

export default Routes;