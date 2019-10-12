import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Questions from "./Questions";
import MessageList from "./MessageList";


const AppNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Questions,
        },
        MessageList: {
            screen: MessageList,
        }
    },

);




export default createAppContainer(AppNavigator);
