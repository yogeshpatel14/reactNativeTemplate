/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import appContainerNav from './src/navigations/rootController';

AppRegistry.registerComponent(appName, () => appContainerNav);
