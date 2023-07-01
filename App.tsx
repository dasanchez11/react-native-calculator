import {SafeAreaView, StatusBar} from 'react-native';
import CalculatorScreen from './src/screens/calculator.screen';
import {AppStyles} from './src/theme/app.theme';

const App = () => {
  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
