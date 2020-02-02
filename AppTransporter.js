import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack"
import Menu from "./src/component/Menu"
import Settings from "./src/component/Settings"
import Collection from "./src/component/Collection"
import Splash from "./src/component/Splash"

const AppNavigator = createStackNavigator(
{
  Splash,
Menu,
Settings,
Collection
},
{
  initialRoutename: "Splash",
  headerMode: "none"
}
)

AppTransporter = createAppContainer(AppNavigator);

export default AppTransporter;