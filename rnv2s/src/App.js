import { Navigation } from 'react-native-navigation';

import AppScreen from "./screens/AppScreen";
import SubScreen from "./screens/SubScreen";
import withStore from "./hoc/withStore";
import Store from "./store/Store";

const store = Store.create();

Navigation.registerComponent(`app.AppScreen`, () => withStore(AppScreen, store));
Navigation.registerComponent(`app.SubScreen`, () => withStore(SubScreen, store));

function start() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'app.AppScreen'
              }
            }
          ]
        }
      }
    });
  });
}

export default start;

