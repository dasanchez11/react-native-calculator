import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export type ButtonColor = 'gray' | 'orange' | 'lightGray';

export interface CalculatorButtonProps {
  text: string;
  color?: ButtonColor;
  doubleWidth?: boolean;
  action: (text: string) => void;
}

const CalculatorButton = ({
  text,
  color = 'gray',
  doubleWidth = false,
  action,
}: CalculatorButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => action(text)}>
      <View
        style={{
          ...calculatorButtonStyles.button,
          ...calculatorButtonStyles[color],
          width: !doubleWidth ? 80 : (80 + 8) * 2,
        }}>
        <Text
          style={{
            ...calculatorButtonStyles.buttonText,
            color: calculatorButtonStyles[color].color,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

const calculatorButtonStyles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '400',
  },
  lightGray: {
    color: 'black',
    backgroundColor: '#9b9b9b',
  },
  gray: {
    backgroundColor: '#2d2d2d',
    color: 'white',
  },
  orange: {
    backgroundColor: '#ff9427',
    color: 'white',
  },
});
