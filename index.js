/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './src/component/Splash'
import Menu from './src/component/Menu'
import Settings from './src/component/Settings'
import AppTransporter from './AppTransporter'
import Collection from "./src/component/Collection"

AppRegistry.registerComponent(appName, () => AppTransporter);
