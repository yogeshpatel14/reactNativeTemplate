/**
 * register all screen in this file
 * import class and add in registerAllScreen
 */

/**
 * import screen class
 */
import Home from '../../../App';
import DetailsScreen from '../../../detailsPage';
import DetailsScreen2 from '../../../detailsScreen2';


/**
 * screen name constants
 */
import {
    NAV_HOME,
    NAV_DETAILS,
    NAV_DETAILS_2
} from './navigationScreenName';

const registerAllScreen = {
    [NAV_HOME]: { screen: Home },
    [NAV_DETAILS]: { screen: DetailsScreen },
    [NAV_DETAILS_2]: { screen: DetailsScreen2 }
}

export {
    registerAllScreen
}