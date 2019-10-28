import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Revista';



const RutasNoAutenticadas = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
  } 
  },
},
{
  headerMode:'none',
  navigationOptions:{
  }

});

export default createAppContainer(RutasNoAutenticadas);