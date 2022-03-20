import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import Login from "./src/pages/Login";

const AppNavigator = createStackNavigator({
  'Login': {
    screen: Login,
    navigationOptions: {
      "title": "Bem vindo!",
    }
  }
}, {
  defaultNavigationOptions : {
    headerShown: false,
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

