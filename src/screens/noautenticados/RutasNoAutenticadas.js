import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../autenticados/Revista';



const RutasNoAutenticadas = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(RutasNoAutenticadas);