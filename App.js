import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Send from "./src/screens/Send.js"
import Receive from "./src/screens/Receive.js"

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    Send: Send,
    Receive: Receive
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
