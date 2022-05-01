import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import Login from "./pages/Login";
import SignUp from './pages/SignUp'

const AppNavigator = createStackNavigator({
  'Login': {
    screen: Login,
    navigationOptions: {
      "title": "Bem vindo!",
    }
  },
  'SignUp': {
    screen: SignUp,
  }
}, {
  defaultNavigationOptions : {
    headerShown: false,
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

