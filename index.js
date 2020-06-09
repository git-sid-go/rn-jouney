/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HeyHome from './app/screens/HeyHome';

AppRegistry.registerComponent(appName, () => HeyHome);
