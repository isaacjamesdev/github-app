import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Welcome from './pages/Welcome/welcome';
import Repositories from './pages/Repositories/repositories';
import Organization from './pages/Organizations/Organization';

import {colors} from './styles/index'

const Routes = (userLogged=false) => createAppContainer(
  createSwitchNavigator({
    Welcome,
    'user': createBottomTabNavigator({
      Repositories,
      Organization
    },{
      tabBarOptions:{
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style:{
          backgroundColor: colors.secundary
        }
      },
    })
  }, {
    initialRouteName: userLogged ? 'user' : 'Welcome'
  })
);

export default Routes;
