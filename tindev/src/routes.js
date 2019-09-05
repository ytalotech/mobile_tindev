//createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
    createSwitchNavigator({ //tem varias coisas que ficam desabilitadas, tipo nõa tem botoa para voltar ...
        Login,
        Main,
    })
);