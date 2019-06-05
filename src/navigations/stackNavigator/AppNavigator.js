/**
 * import react-navigation
 */
import { createStackNavigator, createAppContainer } from 'react-navigation';

/**
 * navigationbar style
 */
import { navigationbarStyle } from './navigationbarStyle';

/**
 * register all screen
 */
import {registerAllScreen} from './screenRegister';

/**
 * declare stack navigation
 */
const stackAppNavigator = createStackNavigator(
  registerAllScreen,
  navigationbarStyle

);

/**
 * define app container with stack navigation
 */
const AppNavigator = createAppContainer(stackAppNavigator)

export default AppNavigator;