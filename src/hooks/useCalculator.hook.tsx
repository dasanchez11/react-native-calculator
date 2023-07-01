import {useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

enum Operadores {
  add,
  substract,
  multiply,
  divide,
}

const useCalculator = () => {
  const [number, setNumber] = useState('100');
  const [prevNumber, setPrevNumber] = useState<string | null>(null);

  const lastOperation = useRef<Operadores>();

  const cleanCalculator = () => {
    setPrevNumber(number);
    setNumber('0');
  };

  const createNumber = (textNumber: string) => {
    // No aceptar doble punto
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);

        // Evaluar si es otro cero, y hay un punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        // Evitar 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const buttonDelete = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumberToPrevious = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divide = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.divide;
  };

  const add = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.add;
  };

  const substract = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.substract;
  };

  const multiply = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.multiply;
  };

  const calculate = () => {
    const firstNumber = Number(number);
    const secondNumber = Number(prevNumber);

    switch (lastOperation.current) {
      case Operadores.add:
        setNumber(`${firstNumber + secondNumber}`);
      case Operadores.substract:
        setNumber(`${secondNumber - firstNumber}`);
      case Operadores.multiply:
        setNumber(`${secondNumber * firstNumber}`);
      case Operadores.divide:
        setNumber(`${secondNumber / firstNumber || 0}`);
      default:
        break;
    }

    setPrevNumber('0');
  };

  return {
    calculate,
    add,
    substract,
    divide,
    multiply,
    number,
    prevNumber,
    setNumber,
    setPrevNumber,
    cleanCalculator,
    createNumber,
    buttonDelete,
    positiveNegative,
  };
};

export default useCalculator;
