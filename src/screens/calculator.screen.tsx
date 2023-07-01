import {View, Text, StyleSheet} from 'react-native';
import {AppStyles} from '../theme/app.theme';
import CalculatorButton from '../components/calculator-button.component';
import {useRef, useState} from 'react';
import useCalculator from '../hooks/useCalculator.hook';

const CalculatorScreen = () => {
  const {
    prevNumber,
    number,
    cleanCalculator,
    positiveNegative,
    buttonDelete,
    divide,
    createNumber,
    multiply,
    substract,
    add,
    calculate,
  } = useCalculator();

  return (
    <View style={AppStyles.calculatorContainer}>
      <Text style={CalculatorScreenStyles.smallResult}>
        {prevNumber !== '0' ? prevNumber : ''}
      </Text>
      <Text
        style={CalculatorScreenStyles.result}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={CalculatorScreenStyles.row}>
        <CalculatorButton
          text="AC"
          color="lightGray"
          action={cleanCalculator}
        />
        <CalculatorButton
          text="+/-"
          color="lightGray"
          action={positiveNegative}
        />
        <CalculatorButton text="Del" color="lightGray" action={buttonDelete} />
        <CalculatorButton text="%" color="orange" action={divide} />
      </View>
      <View style={CalculatorScreenStyles.row}>
        <CalculatorButton text="7" color="gray" action={createNumber} />
        <CalculatorButton text="8" color="gray" action={createNumber} />
        <CalculatorButton text="9" color="gray" action={createNumber} />
        <CalculatorButton text="x" color="orange" action={multiply} />
      </View>
      <View style={CalculatorScreenStyles.row}>
        <CalculatorButton text="4" color="gray" action={createNumber} />
        <CalculatorButton text="5" color="gray" action={createNumber} />
        <CalculatorButton text="6" color="gray" action={createNumber} />
        <CalculatorButton text="-" color="orange" action={substract} />
      </View>
      <View style={CalculatorScreenStyles.row}>
        <CalculatorButton text="1" color="gray" action={createNumber} />
        <CalculatorButton text="2" color="gray" action={createNumber} />
        <CalculatorButton text="3" color="gray" action={createNumber} />
        <CalculatorButton text="+" color="orange" action={add} />
      </View>
      <View style={CalculatorScreenStyles.row}>
        <CalculatorButton
          text="0"
          color="gray"
          doubleWidth
          action={createNumber}
        />
        <CalculatorButton text="." color="gray" action={createNumber} />
        <CalculatorButton text="=" color="orange" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const CalculatorScreenStyles = StyleSheet.create({
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  smallResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
