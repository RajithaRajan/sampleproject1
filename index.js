/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import Routes from './routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
