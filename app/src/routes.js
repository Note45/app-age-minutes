import { createAppContainer } from 'react-navigation';
import  { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';

const Pages =  createStackNavigator({
  'Age of Minutes': {
    screen: Main,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#E2F3F5',
        elevation: 0
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: '500',
      },
      headerTitleAlign: 'center',
    }
  }
});

const Routes = createAppContainer(Pages);

export default Routes;