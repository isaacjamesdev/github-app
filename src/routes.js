import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './pages/Welcome/welcome';
import Repositories from './pages/Repositories/repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories
  })
);

export default Routes;
